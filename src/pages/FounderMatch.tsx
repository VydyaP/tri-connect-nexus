
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, MessageCircle, Heart, Rocket, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import SwipeCard from "@/components/SwipeCard";
import FilterDialog from "@/components/FilterDialog";
import { useToast } from "@/hooks/use-toast";
import { founderProfiles } from "@/data/mockProfiles";
import { useNavigate } from "react-router-dom";

const FounderMatch = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState(founderProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(founderProfiles);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFiltersChange = (filters: string[]) => {
    setActiveFilters(filters);
    if (filters.length === 0) {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter(profile => 
        filters.includes(profile.profession)
      );
      setFilteredProfiles(filtered);
    }
    setCurrentProfileIndex(0);
  };

  const handleLike = (profileId: string) => {
    const profile = filteredProfiles.find(p => p.id === profileId);
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
    const profile = filteredProfiles.find(p => p.id === profileId);
    navigate(`/chat?id=${profileId}`);
    toast({
      title: "Message Sent! 💬",
      description: `Started a conversation with ${profile?.name}`,
    });
  };

  const nextProfile = () => {
    if (currentProfileIndex < filteredProfiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
    } else {
      toast({
        title: "No more profiles",
        description: "Check back later for more founders!",
      });
    }
  };

  const currentProfile = filteredProfiles[currentProfileIndex];

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
              <FilterDialog type="founder" onFiltersChange={handleFiltersChange} />
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {activeFilters.map((filter) => (
                  <Badge key={filter} variant="secondary">
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          )}

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
