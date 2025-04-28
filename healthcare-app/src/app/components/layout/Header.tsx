// src/components/layout/Header.tsx
'use client'; // Essential for Clerk components and hooks which run client-side

import Link from 'next/link';
import React from 'react';
// Import Clerk UI components and helpers
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
// Import Framer Motion for animations (as requested)
import { motion } from 'framer-motion';

const Header = () => {
  return (
    // Header element with styling: gradient background, white text, shadow, sticky position
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md sticky top-0 z-50">
      {/* Navigation container: centered, padding, flex layout */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo/Brand Name - Links to the landing page */}
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          HealthApp {/* Replace with your actual app name/logo component if available */}
        </Link>

        {/* Container for right-side navigation items and auth controls */}
        {/* suppressHydrationWarning on the parent div helps with SignedIn/SignedOut switching */}
        <div className="flex items-center space-x-4 md:space-x-6" suppressHydrationWarning>

          {/* General "Home" Link (usually points to landing), hidden on small screens */}
          {/* suppressHydrationWarning added DIRECTLY here to resolve the text node mismatch */}
          <Link
             href="/"
             className="hidden sm:inline hover:text-gray-200 transition-colors"
             suppressHydrationWarning // <--- Specific fix for the "Home" text hydration error
           >
            Home
          </Link>

          {/* Content shown ONLY when the user is signed OUT */}
          <SignedOut>
            {/* Sign In Button - triggers Clerk modal/redirect */}
            <SignInButton mode="modal">
              {/* Applying motion animation wrapper */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* The actual clickable button */}
                <button className="bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors shadow cursor-pointer">
                  Sign In
                </button>
              </motion.div>
            </SignInButton>

            {/* Sign Up Button - triggers Clerk modal/redirect */}
            <SignUpButton mode="modal">
              {/* Applying motion animation wrapper */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* The actual clickable button */}
                <button className="bg-secondary text-white font-semibold py-2 px-4 rounded hover:bg-secondary/90 transition-colors shadow cursor-pointer">
                  Sign Up
                </button>
              </motion.div>
            </SignUpButton>
          </SignedOut>

          {/* Content shown ONLY when the user is signed IN */}
          <SignedIn>
            {/* Link to the main application dashboard (protected route) */}
            <Link href="/home" className="hover:text-gray-200 transition-colors font-medium">
              Dashboard
            </Link>
            {/* Clerk's UserButton - handles profile, settings, sign out */}
            <UserButton afterSignOutUrl="/"/> {/* Redirects to landing page after signing out */}
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

// Export the Header component for use in the main layout
export default Header;  