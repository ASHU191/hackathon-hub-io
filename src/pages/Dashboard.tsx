
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Clock, FileCode, Layers, 
  LayoutDashboard, LogOut, Settings, Users, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Dashboard mock data
const mockUserProjects = [
  {
    id: '101',
    title: 'AI Health Monitoring',
    status: 'active',
    progress: 65,
    dueDate: 'Oct 15, 2023',
    timeRemaining: '2 days, 5 hours',
  },
  {
    id: '102',
    title: 'Blockchain Marketplace',
    status: 'completed',
    progress: 100,
    dueDate: 'Sep 30, 2023',
    timeRemaining: 'Completed',
  },
];

const mockUpcomingEvents = [
  {
    id: '201',
    title: 'Team Meeting',
    date: 'Today, 2:00 PM',
    type: 'meeting',
  },
  {
    id: '202',
    title: 'Project Deadline',
    date: 'Oct 15, 2023',
    type: 'deadline',
  },
  {
    id: '203',
    title: 'Code Review',
    date: 'Tomorrow, 10:00 AM',
    type: 'review',
  },
];

const mockNotifications = [
  {
    id: '301',
    message: 'Your submission for "AI Health Monitoring" has been received.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '302',
    message: 'New comment on your project from Sarah Mitchell.',
    time: '5 hours ago',
    read: true,
  },
  {
    id: '303',
    message: 'Reminder: Project deadline in 2 days.',
    time: '1 day ago',
    read: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-subtle overflow-hidden border border-border/40">
                <div className="p-6 border-b border-border/40">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">MIT University</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-2">
                  <ul className="space-y-1">
                    {[
                      { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
                      { id: 'projects', label: 'My Projects', icon: <Layers className="w-5 h-5" /> },
                      { id: 'submissions', label: 'Submissions', icon: <FileCode className="w-5 h-5" /> },
                      { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
                      { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
                    ].map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === item.id
                              ? 'bg-accent text-white'
                              : 'text-muted-foreground hover:bg-secondary'
                          }`}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="p-4 mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-muted-foreground"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 space-y-8">
              {/* Welcome Banner */}
              <div className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-subtle">
                <div className="p-8">
                  <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
                  <p className="text-muted-foreground mb-6">
                    Here's what's happening with your hackathon projects today.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Active Projects</p>
                          <h3 className="text-xl font-bold">1</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Completed</p>
                          <h3 className="text-xl font-bold">1</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Upcoming</p>
                          <h3 className="text-xl font-bold">2</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active Projects */}
              <div className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-subtle">
                <div className="p-6 border-b border-border/40 flex justify-between items-center">
                  <h2 className="text-lg font-medium">Your Projects</h2>
                  <Link to="/projects">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                
                <div className="divide-y divide-border/40">
                  {mockUserProjects.map((project) => (
                    <div key={project.id} className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">{project.title}</h3>
                          <div className="flex items-center mt-1">
                            <span className={`w-2 h-2 rounded-full mr-2 ${
                              project.status === 'active' ? 'bg-accent' : 'bg-green-500'
                            }`}></span>
                            <span className="text-sm text-muted-foreground capitalize">{project.status}</span>
                          </div>
                        </div>
                        
                        <Link to={`/projects/${project.id}`}>
                          <Button size="sm" variant="outline">View</Button>
                        </Link>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                project.status === 'completed' ? 'bg-green-500' : 'bg-accent'
                              }`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1.5 text-muted-foreground" />
                            <span className="text-muted-foreground">Due: {project.dueDate}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5 text-muted-foreground" />
                            <span className={`${
                              project.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'
                            }`}>
                              {project.timeRemaining}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Grid: Events and Notifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upcoming Events */}
                <div className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-subtle">
                  <div className="p-6 border-b border-border/40">
                    <h2 className="text-lg font-medium">Upcoming Events</h2>
                  </div>
                  
                  <div className="divide-y divide-border/40">
                    {mockUpcomingEvents.map((event) => (
                      <div key={event.id} className="p-4 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          event.type === 'meeting' 
                            ? 'bg-purple-100 text-purple-500' 
                            : event.type === 'deadline' 
                              ? 'bg-red-100 text-red-500'
                              : 'bg-blue-100 text-blue-500'
                        }`}>
                          {event.type === 'meeting' 
                            ? <Users className="w-5 h-5" />
                            : event.type === 'deadline'
                              ? <Clock className="w-5 h-5" />
                              : <FileCode className="w-5 h-5" />
                          }
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-sm">{event.title}</h3>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Notifications */}
                <div className="bg-white rounded-xl overflow-hidden border border-border/40 shadow-subtle">
                  <div className="p-6 border-b border-border/40 flex justify-between items-center">
                    <h2 className="text-lg font-medium">Notifications</h2>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Mark all as read
                    </Button>
                  </div>
                  
                  <div className="divide-y divide-border/40">
                    {mockNotifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 ${!notification.read ? 'bg-accent/5' : ''}`}
                      >
                        <p className="text-sm mb-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
