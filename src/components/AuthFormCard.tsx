import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming utils.ts for cn exists

interface AuthFormCardProps {
  title: string;
  description?: string; // Optional: "Enter your credentials", "Create your account"
  children: React.ReactNode; // This is where the <form> and its inputs will go
  footerContent?: React.ReactNode; // For links like "Forgot password?", "Don't have an account? Sign Up"
  className?: string; // Allow parent to pass additional classes
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  children,
  footerContent,
  className,
}) => {
  console.log(`AuthFormCard loaded with title: ${title}`);

  return (
    <Card className={cn("w-full max-w-md shadow-lg", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="mt-2 text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter className="flex flex-col items-center justify-center pt-6">
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormCard;