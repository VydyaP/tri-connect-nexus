
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, MessageCircle, Star, MapPin, Clock } from "lucide-react";

interface SwipeCardProps {
  profile: {
    id: string;
    name: string;
    age: number;
    location: string;
    profession: string;
    company: string;
    bio: string;
    interests: string[];
    photos: string[];
    onlineStatus: "online" | "recently" | "offline";
    matchScore: number;
  };
  onLike: (id: string) => void;
  onPass: (id: string) => void;
  onMessage: (id: string) => void;
}

const SwipeCard = ({ profile, onLike, onPass, onMessage }: SwipeCardProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === profile.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? profile.photos.length - 1 : prev - 1
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "recently": return "bg-yellow-500";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "Online now";
      case "recently": return "Recently active";
      default: return "Offline";
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="p-0 relative">
        {/* Photo Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={`https://images.unsplash.com/${profile.photos[currentPhotoIndex]}?auto=format&fit=crop&w=400&h=600`}
            alt={profile.name}
            className="w-full h-full object-cover cursor-pointer"
            onClick={nextPhoto}
          />
          
          {/* Photo Navigation Dots */}
          {profile.photos.length > 1 && (
            <div className="absolute top-4 left-4 flex space-x-1">
              {profile.photos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentPhotoIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Match Score */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/90 text-primary-foreground">
              <Star className="w-3 h-3 mr-1" />
              {profile.matchScore}% Match
            </Badge>
          </div>

          {/* Online Status */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 rounded-full px-3 py-1">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(profile.onlineStatus)}`} />
            <span className="text-white text-xs">{getStatusText(profile.onlineStatus)}</span>
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
            <div className="flex items-center space-x-2 text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-primary">{profile.profession}</p>
            <p className="text-sm text-muted-foreground">{profile.company}</p>
          </div>

          <p className="text-sm leading-relaxed">{profile.bio}</p>

          {/* Interests */}
          <div className="flex flex-wrap gap-2">
            {profile.interests.slice(0, 3).map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
            {profile.interests.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{profile.interests.length - 3} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-14 h-14 border-2 hover:bg-red-50 hover:border-red-200"
              onClick={() => onPass(profile.id)}
            >
              <X className="w-6 h-6 text-red-500" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-14 h-14 border-2 hover:bg-blue-50 hover:border-blue-200"
              onClick={() => onMessage(profile.id)}
            >
              <MessageCircle className="w-6 h-6 text-blue-500" />
            </Button>
            
            <Button
              size="lg"
              className="rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
              onClick={() => onLike(profile.id)}
            >
              <Heart className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SwipeCard;
