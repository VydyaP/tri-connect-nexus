
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
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 animate-pulse" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in transform hover:scale-105 transition-transform duration-700">
              Where Professionals
              <br />
              <span className="text-4xl md:text-6xl">Connect & Thrive</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in opacity-0 animate-delay-300">
              Join the premier matchmaking platform for Developers, Founders, and Doctors
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/signin">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale transform hover:rotate-1 transition-all duration-300">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Scroll Animation */}
      <section className="py-16 px-4 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-y-1" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg bg-card/50 backdrop-blur-sm transform hover:rotate-2 transition-all duration-500 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Features Section with Enhanced Animations */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform duration-500">
            Built for Professionals
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
            Three distinct communities, one powerful platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6 group-hover:rotate-12 transition-transform duration-500 relative z-10`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 relative z-10">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Floating Animation */}
      <section className="py-16 px-4 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse animation-delay-1000" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transform hover:scale-105 transition-transform duration-500">
            Ready to Connect?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found meaningful connections through TriConnect
          </p>
          <Link to="/signin">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-scale transform hover:rotate-1 transition-all duration-300">
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
