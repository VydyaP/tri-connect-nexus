
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Settings, Users, MessageCircle, Heart, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import SwipeCard from "@/components/SwipeCard";
import { useToast } from "@/hooks/use-toast";

const DoctorMatch = () => {
  const { toast } = useToast();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  // Mock doctor profiles
  const doctorProfiles = [
    {
      id: "1",
      name: "Dr. Maria Santos",
      age: 34,
      location: "Boston, MA",
      profession: "Cardiologist",
      company: "Massachusetts General Hospital",
      bio: "Passionate about heart health and helping patients live their best lives. Love traveling and trying new cuisines in my free time.",
      interests: ["Cardiology", "Medical Research", "Travel", "Cooking", "Yoga", "Photography"],
      photos: ["photo-1465146344425-f00d5f5c8f07", "photo-1501854140801-50d01698950b"],
      onlineStatus: "online" as const,
      matchScore: 92,
    },
    {
      id: "2",
      name: "Dr. James Wilson",
      age: 29,
      location: "Chicago, IL",
      profession: "Emergency Medicine",
      company: "Northwestern Memorial Hospital",
      bio: "ER doctor who thrives under pressure. When I'm not saving lives, I'm probably hiking or playing tennis.",
      interests: ["Emergency Medicine", "Trauma Care", "Hiking", "Tennis", "Chess", "Coffee"],
      photos: ["photo-1472396961693-142e6e269027", "photo-1488590528505-98d2b5aba04b"],
      onlineStatus: "recently" as const,
      matchScore: 88,
    },
    {
      id: "3",
      name: "Dr. Priya Patel",
      age: 31,
      location: "San Francisco, CA",
      profession: "Pediatrician",
      company: "UCSF Benioff Children's Hospital",
      bio: "Dedicated to children's health and wellbeing. Love reading, painting, and spending time with my golden retriever.",
      interests: ["Pediatrics", "Child Development", "Reading", "Painting", "Dogs", "Meditation"],
      photos: ["photo-1465146344425-f00d5f5c8f07", "photo-1501854140801-50d01698950b"],
      onlineStatus: "online" as const,
      matchScore: 95,
    }
  ];

  const [profiles, setProfiles] = useState(doctorProfiles);

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
        description: "Check back later for more medical professionals!",
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
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                🩺
              </div>
              <div>
                <h1 className="text-2xl font-bold">Medical Connect</h1>
                <p className="text-muted-foreground">Connect with healthcare professionals</p>
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
                      <p className="text-muted-foreground">Check back later for more medical professionals</p>
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
                      <Badge>18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Matches</span>
                      </div>
                      <Badge>11</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Messages</span>
                      </div>
                      <Badge>7</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Verification */}
              <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Stethoscope className="w-5 h-5" />
                    <h3 className="font-bold">Verify Your License</h3>
                  </div>
                  <p className="text-sm mb-4 text-white/90">
                    Get a verified badge to increase trust and matches
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Verify Now
                  </Button>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Popular Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Cardiology", "Pediatrics", "Emergency", "Surgery", "Neurology", "Psychiatry"].map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
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

export default DoctorMatch;
