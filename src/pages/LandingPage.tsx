import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // shadcn/ui
import { Button } from '@/components/ui/button'; // shadcn/ui
import { ShieldCheck, LogIn, UserPlus } from 'lucide-react';

const LandingPage = () => {
  console.log('LandingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-sky-950">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <ShieldCheck className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6">
              Welcome to <span className="text-blue-600">AuthSecure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Your reliable and straightforward solution for managing user access and identity.
              Secure your application with our robust authentication services.
            </p>
            
            <Card className="max-w-md mx-auto bg-white dark:bg-slate-800 shadow-xl border dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Get Started</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">
                  Access your account or create a new one to begin.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/login"> {/* Path from App.tsx */}
                    <LogIn className="mr-2 h-5 w-5" /> Login
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-700">
                  <Link to="/registration"> {/* Path from App.tsx */}
                    <UserPlus className="mr-2 h-5 w-5" /> Register
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border dark:border-slate-700/50">
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Secure Sign-Up</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Easy and secure account creation process.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border dark:border-slate-700/50">
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Robust Login</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Reliable authentication for existing users.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border dark:border-slate-700/50">
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Password Recovery</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">User-friendly account recovery options.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;