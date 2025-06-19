import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '@/components/layout/Header'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import AuthFormCard from '@/components/AuthFormCard'; // Custom component

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Placeholder login logic
    // In a real application, this would involve an API call
    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful, navigating to dashboard...');
      // Simulate successful login and navigate to dashboard
      // In a real app, you'd set auth tokens, update context, etc.
      navigate('/dashboard'); // Path from App.tsx
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <AuthFormCard
          title="Login to Your Account"
          description="Enter your email and password to access your dashboard."
          footerContent={
            <div className="text-center text-sm">
              <p>
                Don&apos;t have an account?{' '}
                <Link to="/registration" className="font-medium text-blue-600 hover:underline">
                  Sign Up
                </Link> {/* Path from App.tsx */}
              </p>
              <p className="mt-2">
                <Link to="/password-recovery" className="font-medium text-blue-600 hover:underline">
                  Forgot your password?
                </Link> {/* Path from App.tsx */}
              </p>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;