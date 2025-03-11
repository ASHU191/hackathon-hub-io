
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import FeatureSection from '@/components/ui/FeatureSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, Code, FileCode, Globe, MessageSquare, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: 'Project Discovery',
      description: 'Browse and discover exciting hackathon projects from our curated collection.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Real-time Collaboration',
      description: 'Connect with teammates and collaborate effectively with our intuitive tools.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Timed Submissions',
      description: 'Stay on track with our precise countdown timers and submission deadlines.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Code Repositories',
      description: 'Seamlessly integrate with GitHub and other version control platforms.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Expert Feedback',
      description: 'Receive valuable feedback from industry professionals and mentors.',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: 'Project Showcase',
      description: 'Showcase your completed projects in our beautifully designed gallery.',
      icon: <FileCode className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Elevate Your Hackathon Experience"
          subtitle="A powerful platform designed for seamless project management, collaboration, and submissions for hackathons of any scale."
          ctaText="Get Started"
          ctaLink="/register"
          secondaryCtaText="Explore Projects"
          secondaryCtaLink="/projects"
        />
        
        <FeatureSection 
          title="Powerful Features"
          subtitle="Everything you need to manage, participate in, and succeed at hackathons."
          features={features}
        />
        
        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-up animate-delay-1">
                <h3 className="text-4xl font-bold text-primary mb-2">3K+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="animate-fade-up animate-delay-2">
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Projects</p>
              </div>
              <div className="animate-fade-up animate-delay-3">
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Hackathons</p>
              </div>
              <div className="animate-fade-up animate-delay-3">
                <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full bg-accent/10 text-accent font-medium">
                <Award className="w-4 h-4 mr-1.5" />
                Ready to join the next hackathon?
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Start your hackathon journey today
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're organizing a hackathon or looking to participate, our platform has everything you need for a successful experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90">
                    Create an Account
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="rounded-full px-8 py-6">
                    Browse Projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
