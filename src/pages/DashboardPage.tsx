import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Home, Settings, MessageSquare } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  // In a real application, user data might be fetched here or passed via props/context
  const userName = "Valued User"; // Placeholder user name

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader className="text-center">
            <img src="https://placehold.co/600x300/e2e8f0/64748b?text=Welcome+Aboard!" alt="Welcome Banner" className="rounded-t-lg mb-4" />
            <CardTitle className="text-3xl font-bold text-gray-800">Welcome, {userName}!</CardTitle>
            <CardDescription className="text-md text-gray-600 mt-2">
              You've successfully logged in. This is your personal dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-white">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                Quick Note
              </h3>
              <Textarea
                placeholder="Jot down any thoughts or reminders here..."
                className="min-h-[100px] focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="mt-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">Save Note</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/" className="w-full"> {/* Link to LandingPage as per App.tsx */}
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Homepage
                </Button>
              </Link>
              {/* Example link to a hypothetical settings page, not in App.tsx, so will lead to NotFound or could be developed later */}
              <Link to="/account-settings" className="w-full">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-800">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </Link>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <p className="text-xs text-gray-500 text-center w-full">
              For support, contact help@authsecure.com.
            </p>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;