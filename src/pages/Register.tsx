
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, CheckCircle, EyeIcon, EyeOffIcon, User, Mail, Lock, Building, Github, ScreenShare } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institute: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.institute) {
      setError('Please fill out all fields');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.password || !formData.confirmPassword) {
      setError('Please fill out all fields');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    setError('');
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateStep2()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // For demo purposes, just redirect to dashboard
      navigate('/dashboard');
    }, 1000);
  };

  const progressBar = (
    <div className="relative w-full h-2 bg-secondary rounded-full mb-8">
      <div 
        className={`absolute left-0 top-0 h-full bg-accent rounded-full transition-all duration-500 ${
          step === 1 ? 'w-1/2' : 'w-full'
        }`}
      ></div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-subtle p-8 animate-scale-in">
              {progressBar}
              
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-primary mb-2">
                  {step === 1 ? 'Create Your Account' : 'Set Your Password'}
                </h1>
                <p className="text-muted-foreground">
                  {step === 1 
                    ? 'Start your hackathon journey today' 
                    : 'Choose a secure password for your account'}
                </p>
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-destructive/10 text-destructive text-sm rounded-lg animate-fade-in">
                  {error}
                </div>
              )}
              
              <form onSubmit={step === 1 ? nextStep : handleSubmit} className="space-y-5">
                {step === 1 ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="fullName">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="institute">
                        Institute / Organization
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Building className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          id="institute"
                          name="institute"
                          type="text"
                          value={formData.institute}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                          placeholder="University / Company"
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="password">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <EyeIcon className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <CheckCircle className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-accent focus:border-accent"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <ul className="space-y-2">
                        <li className="flex items-center text-xs">
                          <span className={`inline-block w-4 h-4 mr-2 rounded-full ${formData.password.length >= 8 ? 'bg-accent' : 'bg-secondary'}`}></span>
                          At least 8 characters
                        </li>
                        <li className="flex items-center text-xs">
                          <span className={`inline-block w-4 h-4 mr-2 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-accent' : 'bg-secondary'}`}></span>
                          At least one uppercase letter
                        </li>
                        <li className="flex items-center text-xs">
                          <span className={`inline-block w-4 h-4 mr-2 rounded-full ${/[0-9]/.test(formData.password) ? 'bg-accent' : 'bg-secondary'}`}></span>
                          At least one number
                        </li>
                      </ul>
                    </div>
                  </>
                )}
                
                <div className="flex items-center justify-between space-x-4 pt-4">
                  {step === 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 py-6"
                      onClick={prevStep}
                    >
                      Back
                    </Button>
                  )}
                  
                  <Button
                    type={step === 1 ? 'button' : 'submit'}
                    className="flex-1 py-6 bg-accent hover:bg-accent/90"
                    onClick={step === 1 ? nextStep : undefined}
                    disabled={loading}
                  >
                    {step === 1 ? 'Continue' : loading ? 'Creating Account...' : 'Create Account'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-accent hover:text-accent/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
