import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LogIn, UserPlus, LayoutDashboard, LogOutIcon } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  // Mock authentication state - replace with actual auth context/logic
  const isAuthenticated = false; // Set to true to see authenticated user view

  const handleLogout = () => {
    console.log('Logout action triggered');
    // In a real app, this would clear auth state and redirect
    // e.g., setIsAuthenticated(false); navigate('/login');
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-lg">AuthSecure</span>
        </Link>
        
        <nav className="flex items-center gap-4 md:gap-6">
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className={navLinkClasses}>
                <LogIn className="mr-2 h-4 w-4 inline-block" />
                Login
              </NavLink>
              <NavLink to="/registration" className={navLinkClasses}>
                 <UserPlus className="mr-2 h-4 w-4 inline-block" />
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" className={navLinkClasses}>
                <LayoutDashboard className="mr-2 h-4 w-4 inline-block" />
                Dashboard
              </NavLink>
              <Button variant="ghost" onClick={handleLogout} className="text-sm font-medium text-muted-foreground hover:text-primary">
                <LogOutIcon className="mr-2 h-4 w-4 inline-block" />
                Logout
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;