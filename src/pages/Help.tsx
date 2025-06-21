
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  MessageCircle, 
  User, 
  Filter, 
  Zap, 
  Settings,
  ArrowRight,
  CheckCircle,
  Info,
  HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Help = () => {
  const helpSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: User,
      color: "text-blue-500",
      items: [
        {
          title: "Complete Your Profile",
          description: "Fill out your profile with accurate information to get better matches",
          steps: [
            "Click on Profile in the sidebar",
            "Choose your profession (Developer, Doctor, or Founder)",
            "Add your specialization and skills",
            "Upload a profile photo (optional)"
          ]
        },
        {
          title: "Select Your Role",
          description: "Choose the professional community you want to connect with",
          steps: [
            "After signing in, you'll see three profession cards",
            "Click on Developer, Doctor, or Founder based on your profession",
            "This will take you to the matching interface for that community"
          ]
        }
      ]
    },
    {
      id: "matching",
      title: "Finding Matches",
      icon: Heart,
      color: "text-red-500",
      items: [
        {
          title: "Swiping on Profiles",
          description: "Discover and connect with professionals in your field",
          steps: [
            "Swipe right or click the heart icon to like someone",
            "Swipe left or click the X to pass",
            "When both people like each other, it's a match!",
            "Matched profiles will appear in your matches"
          ]
        },
        {
          title: "Using Filters",
          description: "Narrow down profiles based on specific criteria",
          steps: [
            "Click the filter icon in the top navigation",
            "For Developers: Filter by frontend, backend, fullstack, mobile, etc.",
            "For Doctors: Filter by specialty like cardiology, pediatrics, surgery, etc.",
            "For Founders: Filter by industry, startup stage, or focus area",
            "Apply filters to see only relevant profiles"
          ]
        }
      ]
    },
    {
      id: "messaging",
      title: "Messaging & Chat",
      icon: MessageCircle,
      color: "text-green-500",
      items: [
        {
          title: "Starting Conversations",
          description: "Connect with your matches through messaging",
          steps: [
            "Click the message icon on a profile card",
            "Write your first message to break the ice",
            "Be genuine and mention something from their profile",
            "Ask questions to start meaningful conversations"
          ]
        },
        {
          title: "Chat Features",
          description: "Make the most of your conversations",
          steps: [
            "Send text messages in real-time",
            "Messages are organized by conversation",
            "Click on Messages in the sidebar to see all chats",
            "Continue conversations to build professional relationships"
          ]
        }
      ]
    },
    {
      id: "profile-boost",
      title: "Profile Boost",
      icon: Zap,
      color: "text-purple-500",
      items: [
        {
          title: "Boost Your Visibility",
          description: "Get more views and matches with profile boost",
          steps: [
            "Click the 'Boost Now' button in the sidebar",
            "Your profile will be shown to more people for 30 minutes",
            "Expect 10x more views during the boost period",
            "Use boosts strategically during peak hours"
          ]
        }
      ]
    },
    {
      id: "settings",
      title: "Settings & Account",
      icon: Settings,
      color: "text-gray-500",
      items: [
        {
          title: "Account Management",
          description: "Manage your account preferences and settings",
          steps: [
            "Click Settings in the sidebar",
            "Update your notification preferences",
            "Change your account information",
            "Manage privacy settings"
          ]
        },
        {
          title: "Logout",
          description: "Securely sign out of your account",
          steps: [
            "Click the Logout button at the bottom of the sidebar",
            "You'll be redirected to the sign-in page",
            "Your profile and matches are saved for next time"
          ]
        }
      ]
    }
  ];

  const tips = [
    {
      icon: CheckCircle,
      title: "Be Authentic",
      description: "Use real photos and honest information in your profile for better connections."
    },
    {
      icon: MessageCircle,
      title: "Start Conversations",
      description: "Don't wait for others to message first. Be proactive in reaching out."
    },
    {
      icon: Filter,
      title: "Use Filters Wisely",
      description: "Filters help you find relevant matches, but don't be too restrictive."
    },
    {
      icon: Heart,
      title: "Give People a Chance",
      description: "Look beyond just photos - read profiles and consider shared interests."
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Header />
          
          <div className="pt-20 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Sidebar Trigger */}
              <div className="mb-6">
                <SidebarTrigger />
              </div>
              
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <HelpCircle className="w-12 h-12 text-primary mr-3" />
                  <h1 className="text-4xl font-bold">Help Center</h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to know about using TriConnect to build meaningful professional relationships
                </p>
              </div>

              {/* Quick Tips */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-500" />
                    Quick Tips for Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                        <tip.icon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm">{tip.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help Sections */}
              <div className="space-y-6">
                {helpSections.map((section) => (
                  <Card key={section.id} className="overflow-hidden">
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="flex items-center">
                        <section.icon className={`w-6 h-6 mr-3 ${section.color}`} />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-4">{item.description}</p>
                            <div className="space-y-2">
                              {item.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-center space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                            {itemIndex < section.items.length - 1 && (
                              <Separator className="mt-6" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Support */}
              <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Need More Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for? We're here to help you succeed on TriConnect.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge variant="secondary" className="px-4 py-2">
                      Contact Support
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2">
                      Community Forum
                    </Badge>
                    <Badge variant="secondary" className="px-4 py-2">
                      Video Tutorials
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Help;
