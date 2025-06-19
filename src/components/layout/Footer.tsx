import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <ShieldCheck className="h-5 w-5 text-blue-600" />
          <span className="font-semibold text-gray-700">AuthSecure</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 md:mb-0">
          {/* These links currently point to placeholder routes. 
              Ensure these routes exist in App.tsx or update paths accordingly. */}
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </nav>
        <div>
          <p className="text-center">
            &copy; {currentYear} AuthSecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;