import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PTUT — Punjab Tianjin University of Technology',
  description: "Pakistan's First Technology University. Innovation with Purpose, Excellence with Vision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-bg text-body">
        <ThemeProvider>
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}