
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/register",
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_35%,hsl(var(--accent)/.08),transparent)] lg:bg-[radial-gradient(60%_35%_at_50%_35%,hsl(var(--accent)/.08),transparent)]" />
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={ctaLink}>
                <Button className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-white">
                  {ctaText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink}>
                  <Button variant="outline" className="rounded-full px-8 py-6">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
            
            <div className="pt-4 text-sm text-muted-foreground">
              Join <span className="font-medium">3,000+</span> developers and creators using our platform.
            </div>
          </div>
          
          {imageSrc ? (
            <div className="hidden lg:flex justify-center items-center animate-scale-in">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                <img 
                  src={imageSrc} 
                  alt="Platform Preview" 
                  className="relative rounded-2xl shadow-strong" 
                />
              </div>
            </div>
          ) : (
            <div className="hidden lg:block">
              <div className="relative h-[500px] w-full rounded-2xl bg-gradient-to-br from-white to-secondary p-1 shadow-strong animate-scale-in">
                <div className="absolute inset-0 bg-white rounded-xl">
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-secondary animate-pulse" />
                      <div className="h-4 w-32 rounded-full bg-secondary/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
