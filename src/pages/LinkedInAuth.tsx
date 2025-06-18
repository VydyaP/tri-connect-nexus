
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const LinkedInAuth = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LinkedIn OAuth simulation");
    
    // Mock successful LinkedIn login
    login({
      name: "LinkedIn User",
      email: "user@linkedin.com"
    });
    
    navigate("/select-role");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-8 h-8" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <CardTitle className="text-2xl font-bold">LinkedIn</CardTitle>
            </div>
            <p className="text-muted-foreground">
              Sign in with your LinkedIn account
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                Li
              </div>
              <p className="text-muted-foreground">
                Click below to authenticate with LinkedIn
              </p>
            </div>
            
            <Button type="submit" className="w-full h-12 bg-blue-700 hover:bg-blue-800">
              Continue with LinkedIn
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>This is a demo LinkedIn OAuth page</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkedInAuth;
