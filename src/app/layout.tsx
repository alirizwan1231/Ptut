import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PTUT — Punjab Tianjin University of Technology',
  description: 'Pakistan\'s First Technology University. Innovation with Purpose, Excellence with Vision.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#121826] bg-white">{children}</body>
    </html>
  );
}