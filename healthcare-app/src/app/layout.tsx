// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'; // Import ClerkProvider
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HealthApp - Your Health Companion',
  description: 'A revolutionary platform for managing your health.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> {/* Essential: Wraps everything */}
      <html lang="en">
        <body className="...">
          <Header /> {/* Header is INSIDE the provider */}
          <main className="...">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}