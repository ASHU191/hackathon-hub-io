
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-primary font-bold text-xl tracking-tight">
            HackathonHub
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-primary/80'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <NavLink to="/login">
              <Button variant="outline" className="rounded-full px-5">
                Log In
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button className="rounded-full px-5 bg-accent hover:bg-accent/90">
                Register
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <MenuIcon className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20 px-6 animate-fade-in">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors animate-slide-up ${
                      isActive ? 'text-accent' : 'text-primary/80'
                    }`
                  }
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col space-y-3 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <NavLink to="/login">
                <Button variant="outline" className="w-full rounded-full py-6">
                  Log In
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button className="w-full rounded-full py-6 bg-accent hover:bg-accent/90">
                  Register
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
