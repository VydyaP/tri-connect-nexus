
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Settings, Users, MessageCircle, Heart, Rocket, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import SwipeCard from "@/components/SwipeCard";
import { useToast } from "@/hooks/use-toast";

const FounderMatch = () => {
  const { toast } = useToast();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  // Mock founder profiles
  const founderProfiles = [
    {
      id: "1",
      name: "Jessica Kim",
      age: 30,
      location: "Palo Alto, CA",
      profession: "AI Startup Founder",
      company: "InnovateTech AI",
      bio: "Building the future of AI-powered healthcare. Series A funded. Looking for someone who shares my passion for innovation and making an impact.",
      interests: ["AI/ML", "Healthcare Tech", "Venture Capital", "Skiing", "Wine Tasting", "Podcasts"],
      photos: ["photo-1581091226825-a6a2a5aee158", "photo-1473091534298-04dcbce3278c"],
      onlineStatus: "online" as const,
      matchScore: 96,
    },
    {
      id: "2",
      name: "Marcus Thompson",
      age: 33,
      location: "New York, NY",
      profession: "FinTech CEO",
      company: "PayFlow Solutions",
      bio: "Disrupting traditional banking with blockchain technology. When I'm not fundraising, I love playing basketball and exploring new restaurants.",
      interests: ["Blockchain", "FinTech", "Basketball", "Food", "Real Estate", "Mentoring"],
      photos: ["photo-1519389950473-47ba0277781c", "photo-1486312338219-ce68d2c6f44d"],
      onlineStatus: "recently" as const,
      matchScore: 89,
    },
    {
      id: "3",
      name: "Sophia Rodriguez",
      age: 28,
      location: "Austin, TX",
      profession: "SaaS Founder",
      company: "CloudScale Pro",
      bio: "Scaling businesses through intelligent automation. Bootstrapped to $10M ARR. Love rock climbing and building communities.",
      interests: ["SaaS", "Automation", "Rock Climbing", "Community Building", "Public Speaking", "Travel"],
      photos: ["photo-1465146344425-f00d5f5c8f07", "photo-1472396961693-142e6e269027"],
      onlineStatus: "online" as const,
      matchScore: 93,
    }
  ];

  const [profiles, setProfiles] = useState(founderProfiles);

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
        description: "Check back later for more founders!",
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
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white text-xl">
                🚀
              </div>
              <div>
                <h1 className="text-2xl font-bold">Founder Connect</h1>
                <p className="text-muted-foreground">Network with fellow entrepreneurs</p>
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
                      <p className="text-muted-foreground">Check back later for more founders</p>
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
                  <h3 className="font-bold mb-4">Your Network</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm">Connections</span>
                      </div>
                      <Badge>24</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Matches</span>
                      </div>
                      <Badge>15</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Conversations</span>
                      </div>
                      <Badge>9</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Networking */}
              <Card className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Rocket className="w-5 h-5" />
                    <h3 className="font-bold">Premium Networking</h3>
                  </div>
                  <p className="text-sm mb-4 text-white/90">
                    Access exclusive founder events and investors
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>

              {/* Trending Industries */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Hot Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "FinTech", "HealthTech", "Web3", "SaaS", "E-commerce"].map((industry) => (
                      <Badge key={industry} variant="secondary" className="text-xs">
                        {industry}
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

export default FounderMatch;
