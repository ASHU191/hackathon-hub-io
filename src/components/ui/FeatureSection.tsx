
import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  alignment?: 'left' | 'center';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  alignment = 'center',
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto ${alignment === 'center' ? 'text-center' : 'text-left'} mb-12`}>
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-border/40 shadow-subtle hover:shadow-medium transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-6 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
