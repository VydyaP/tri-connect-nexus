
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Settings, Users, MessageCircle, Heart, Zap } from "lucide-react";
import Header from "@/components/Header";
import SwipeCard from "@/components/SwipeCard";
import { useToast } from "@/hooks/use-toast";

const DeveloperMatch = () => {
  const { toast } = useToast();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  // Mock developer profiles
  const developerProfiles = [
    {
      id: "1",
      name: "Sarah Chen",
      age: 28,
      location: "San Francisco, CA",
      profession: "Full Stack Developer",
      company: "Google",
      bio: "Passionate about React and machine learning. Love building products that make a difference. When I'm not coding, you'll find me hiking or playing guitar.",
      interests: ["React", "Python", "Machine Learning", "Hiking", "Guitar", "Coffee"],
      photos: ["photo-1488590528505-98d2b5aba04b", "photo-1518770660439-4636190af475"],
      onlineStatus: "online" as const,
      matchScore: 94,
    },
    {
      id: "2",
      name: "Alex Rodriguez",
      age: 32,
      location: "Austin, TX",
      profession: "DevOps Engineer",
      company: "Netflix",
      bio: "Infrastructure enthusiast who loves automating everything. Kubernetes wizard by day, craft beer enthusiast by night.",
      interests: ["Kubernetes", "AWS", "Automation", "Craft Beer", "Rock Climbing", "Photography"],
      photos: ["photo-1461749280684-dccba630e2f6", "photo-1581091226825-a6a2a5aee158"],
      onlineStatus: "recently" as const,
      matchScore: 87,
    },
    {
      id: "3",
      name: "Emily Johnson",
      age: 26,
      location: "Seattle, WA",
      profession: "Frontend Developer",
      company: "Microsoft",
      bio: "UI/UX lover creating beautiful and accessible web experiences. Always learning new frameworks and design patterns.",
      interests: ["Vue.js", "TypeScript", "Design Systems", "Accessibility", "Yoga", "Books"],
      photos: ["photo-1473091534298-04dcbce3278c", "photo-1519389950473-47ba0277781c"],
      onlineStatus: "online" as const,
      matchScore: 91,
    }
  ];

  const [profiles, setProfiles] = useState(developerProfiles);

  const handleLike = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    toast({
      title: "It's a Match! 💕",
      description: `You and ${profile?.name} liked each other!`,
    });
    nextProfile();
  };

  const handlePass = (profileId: string) => {
    nextProfile();
  };

  const handleMessage = (profileId: string) => {
    const profile = profiles.find(p => p.id === profileId);
    toast({
      title: "Message Sent! 💬",
      description: `Started a conversation with ${profile?.name}`,
    });
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      toast({
        title: "No more profiles",
        description: "Check back later for more developers!",
      });
    }
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
                💻
              </div>
              <div>
                <h1 className="text-2xl font-bold">Developer Connect</h1>
                <p className="text-muted-foreground">Find your coding soulmate</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Swipe Area */}
            <div className="lg:col-span-3">
              <div className="flex justify-center">
                {currentProfile ? (
                  <SwipeCard
                    profile={currentProfile}
                    onLike={handleLike}
                    onPass={handlePass}
                    onMessage={handleMessage}
                  />
                ) : (
                  <Card className="w-full max-w-sm mx-auto p-8 text-center">
                    <CardContent>
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-xl font-bold mb-2">You're all caught up!</h3>
                      <p className="text-muted-foreground">Check back later for more developers</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Your Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm">Likes sent</span>
                      </div>
                      <Badge>12</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Matches</span>
                      </div>
                      <Badge>8</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Messages</span>
                      </div>
                      <Badge>5</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Boost Profile */}
              <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <h3 className="font-bold">Boost Your Profile</h3>
                  </div>
                  <p className="text-sm mb-4 text-white/90">
                    Get 10x more views and matches for the next 30 minutes
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Boost Now
                  </Button>
                </CardContent>
              </Card>

              {/* Top Skills */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Trending Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Python", "TypeScript", "AWS", "Docker", "GraphQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperMatch;
