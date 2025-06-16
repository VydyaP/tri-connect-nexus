
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "4.2K", label: "Active Developers", trend: "+12%" },
    { value: "1.8K", label: "Medical Professionals", trend: "+8%" },
    { value: "3.1K", label: "Startup Founders", trend: "+19%" },
    { value: "2.4K", label: "Successful Matches", trend: "+25%" },
  ];

  const features = [
    {
      title: "For Developers",
      description: "Connect with like-minded tech professionals and find your coding partner",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "For Doctors",
      description: "Meet medical professionals who understand your dedication to healing",
      icon: "🩺",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "For Founders",
      description: "Find entrepreneurial partners who share your vision for innovation",
      icon: "🚀",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Where Professionals
              <br />
              <span className="text-4xl md:text-6xl">Connect & Thrive</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Join the premier matchmaking platform for Developers, Founders, and Doctors
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/signin">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale">
                  Welcome Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {stat.label}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Built for Professionals
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Three distinct communities, one powerful platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Connect?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found meaningful connections through TriConnect
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 TriConnect. Connecting professionals worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
