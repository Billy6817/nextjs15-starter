import './globals.css';
import NavBar from '@/components/NavBar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js 15 Starter',
  description: 'An opinionated starter showcasing Next.js 15 features',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <NavBar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
