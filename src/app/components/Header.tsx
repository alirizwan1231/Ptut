'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#campus', label: 'Campus' },
    { href: '#news', label: 'Stories' },
    { href: '#admissions', label: 'Admissions' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-black/5'
          : 'bg-transparent border-b-0'
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 lg:h-12 flex items-center">
            <Image
              src="/images/ptut-logo.jpg"
              alt="PTUT Logo"
              width={48}
              height={48}
              className={`h-full w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-colors hover:text-[#C62828] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-[#C62828] after:transition-all hover:after:w-full ${
                scrolled ? 'text-[#121826]' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#admissions"
          className="hidden lg:inline-block text-[13px] font-semibold px-6 py-2.5 bg-[#C62828] text-white rounded-md transition-all hover:-translate-y-0.5 shadow-lg shadow-[#C62828]/25"
        >
          APPLY NOW
        </a>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-[#121826]' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-[#121826]' : 'text-white'} size={24} />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#121826] font-medium py-2 border-b border-black/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            className="text-center text-sm font-semibold px-6 py-3 bg-[#C62828] text-white rounded-md mt-2"
            onClick={() => setMobileOpen(false)}
          >
            APPLY NOW
          </a>
        </div>
      )}
    </header>
  );
}