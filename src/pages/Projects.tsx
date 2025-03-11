
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard, { ProjectCardProps } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, XCircle } from 'lucide-react';

// Mock data for projects
const mockProjects: ProjectCardProps[] = [
  {
    id: '1',
    title: 'AI-Powered Health Monitoring System',
    description: 'Build a real-time health monitoring system using machine learning to predict potential health issues based on vital signs.',
    deadline: 'Oct 15, 2023',
    duration: '48 hours',
    participants: 45,
    maxParticipants: 60,
    tags: ['AI/ML', 'Healthcare', 'IoT'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    title: 'Sustainable Smart City Dashboard',
    description: 'Create an interactive dashboard that visualizes environmental data from smart city sensors to help with urban planning.',
    deadline: 'Nov 2, 2023',
    duration: '72 hours',
    participants: 28,
    maxParticipants: 50,
    tags: ['Data Visualization', 'Sustainability', 'Smart Cities'],
    imageUrl: 'https://images.unsplash.com/photo-1553241066-21079585c01e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Decentralized Marketplace',
    description: 'Build a secure and scalable decentralized marketplace using blockchain technology for digital asset trading.',
    deadline: 'Oct 28, 2023',
    duration: '36 hours',
    participants: 32,
    maxParticipants: 40,
    tags: ['Blockchain', 'Web3', 'DeFi'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'AR Educational Experience',
    description: 'Develop an augmented reality application that makes learning more interactive and engaging for K-12 students.',
    deadline: 'Nov 10, 2023',
    duration: '48 hours',
    participants: 18,
    maxParticipants: 30,
    tags: ['AR/VR', 'Education', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'Accessibility-First Social Platform',
    description: 'Create a social platform that prioritizes accessibility for users with disabilities, featuring voice commands and screen reader optimization.',
    deadline: 'Oct 20, 2023',
    duration: '60 hours',
    participants: 22,
    maxParticipants: 35,
    tags: ['Accessibility', 'Social Media', 'Inclusion'],
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: '6',
    title: 'Climate Change Data Visualization',
    description: 'Build an interactive tool that visualizes climate change data in an engaging and informative way to raise awareness.',
    deadline: 'Nov 5, 2023',
    duration: '48 hours',
    participants: 38,
    maxParticipants: 50,
    tags: ['Climate', 'Data Visualization', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
];

// All available tags (extracted from projects)
const allTags = Array.from(new Set(mockProjects.flatMap(project => project.tags)));

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Filter projects based on search term and selected tags
  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => project.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Discover Projects</h1>
              <p className="text-lg text-muted-foreground">
                Browse through our curated collection of hackathon projects and find the perfect opportunity to showcase your skills.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-5xl mx-auto mb-10">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  className="lg:w-auto flex items-center gap-2 py-3"
                  onClick={() => setFiltersVisible(!filtersVisible)}
                >
                  <Filter className="h-5 w-5" />
                  Filters
                  {selectedTags.length > 0 && (
                    <span className="ml-1 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {selectedTags.length}
                    </span>
                  )}
                </Button>
                
                {(selectedTags.length > 0 || searchTerm) && (
                  <Button 
                    variant="ghost" 
                    className="lg:w-auto flex items-center gap-2 py-3"
                    onClick={clearFilters}
                  >
                    <XCircle className="h-5 w-5" />
                    Clear
                  </Button>
                )}
              </div>
              
              {/* Tags Filter */}
              {filtersVisible && (
                <div className="mt-4 p-4 border border-border rounded-lg bg-white animate-fade-in">
                  <h3 className="font-medium text-sm mb-3">Filter by Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-accent text-white'
                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fade-in">
                <h3 className="text-xl font-medium text-primary mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
