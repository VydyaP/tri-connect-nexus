
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const SelectRole = () => {
  const navigate = useNavigate();
  
  // Mock user data - in real app this would come from auth context
  const user = {
    name: "Alex Johnson",
    photoURL: null,
  };

  const professions = [
    {
      id: "developer",
      title: "Developer",
      icon: "💻",
      description: "Connect with fellow developers, share code, and build amazing projects together",
      stats: [
        { value: "4.2K", label: "Active Developers" },
        { value: "78%", label: "Match Rate" },
        { value: "3.2hrs", label: "Avg Response Time" }
      ],
      trend: "+12%",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      route: "/match/developer"
    },
    {
      id: "doctor",
      title: "Doctor",
      icon: "🩺",
      description: "Meet medical professionals who understand your dedication to healing and helping others",
      stats: [
        { value: "1.8K", label: "Medical Professionals" },
        { value: "82%", label: "Match Rate" },
        { value: "2.8hrs", label: "Avg Response Time" }
      ],
      trend: "+8%",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      route: "/match/doctor"
    },
    {
      id: "founder",
      title: "Founder",
      icon: "🚀",
      description: "Find entrepreneurial partners who share your vision for innovation and growth",
      stats: [
        { value: "3.1K", label: "Startup Founders" },
        { value: "69%", label: "Match Rate" },
        { value: "4.1hrs", label: "Avg Response Time" }
      ],
      trend: "+19%",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      route: "/match/founder"
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleProfessionSelect = (profession: any) => {
    console.log(`Selected profession: ${profession.title}`);
    navigate(profession.route);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Banner */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Avatar className="w-20 h-20 mr-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h1 className="text-4xl font-bold mb-2">
                  Welcome, {user.name.split(" ")[0]}!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Choose your professional community
                </p>
              </div>
            </div>
          </div>
          
          {/* Profession Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {professions.map((profession) => (
              <Card
                key={profession.id}
                className="hover-scale cursor-pointer border-0 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                onClick={() => handleProfessionSelect(profession)}
              >
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className={`${profession.bgColor} p-8 text-center`}>
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${profession.color} flex items-center justify-center text-3xl mb-4`}>
                      {profession.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {profession.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {profession.description}
                    </p>
                  </div>
                  
                  {/* Stats Section */}
                  <div className="p-6 space-y-4">
                    {profession.stats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {stat.label}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {/* Trend Badge */}
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Growth Trend
                        </span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          {profession.trend}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              You can always change your profession later in your profile settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
