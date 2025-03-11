
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
  duration: string;
  participants: number;
  maxParticipants: number;
  tags: string[];
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  deadline,
  duration,
  participants,
  maxParticipants,
  tags,
  imageUrl,
}) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden border border-border/40 shadow-subtle transition-all duration-300 hover:shadow-medium">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-medium text-primary mb-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-xs text-muted-foreground">{deadline}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-xs text-muted-foreground">{duration}</span>
            </div>
            <div className="flex items-center col-span-2">
              <Users className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-xs text-muted-foreground">
                {participants}/{maxParticipants} Participants
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <Link to={`/projects/${id}`}>
              <Button variant="outline" size="sm" className="rounded-full">
                Details
              </Button>
            </Link>
            <Button size="sm" className="rounded-full bg-accent hover:bg-accent/90">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
