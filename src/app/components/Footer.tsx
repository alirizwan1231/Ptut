'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Notice Board', href: '/#news' },
    { label: 'Alumni Network', href: '/about' },
    { label: 'Quality Enhancement Cell', href: '/administration/qec' },
    { label: 'News & Events', href: '/#news' },
    { label: 'Career Opportunities', href: '/#news' },
  ];

  const studentLinks = [
    { label: 'Academic Calendar', href: '/academic-regulations' },
    { label: 'Exam Date Sheet', href: '/administration/examinations' },
    { label: 'Semester Results', href: '/administration/examinations' },
  ];

  const facultyLinks = [
    { label: 'Update Profile', href: '/faculty' },
    { label: 'Faculty Publications', href: '/faculty' },
  ];

  return (
    <footer className="relative bg-navy text-white/80 overflow-hidden border-t-4 border-accent">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(198,40,40,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          <div className="lg:col-span-5 space-y-6">
            <a href="/" className="flex items-center gap-4">
              <div className="relative h-14 w-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-2">
                <Image
                  src="/images/PTUT-Logo.png"
                  alt="PTUT Logo"
                  width={48}
                  height={48}
                  className="h-full w-auto object-contain "
                />
              </div>
              <div>
                <strong className="text-white text-xl font-bold tracking-tight block">
                  PTUT Lahore
                </strong>
                <span className="text-[11px] text-accent font-semibold uppercase tracking-widest">
                  Punjab Tianjin University of Technology
                </span>
              </div>
            </a>

            <p className="text-sm text-white/60 leading-relaxed max-w-[34ch]">
              Pakistan&apos;s First Technology University — pioneering applied education, industry-linked curriculum, and innovation with purpose.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
<a href="https://www.google.com/maps/search/?api=1&query=Punjab+Tianjin+University+of+Technology+Lahore" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Near Green Town, Lahore — Punjab, Pakistan</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={16} className="text-accent shrink-0" />
<a href="tel:+924299332438" className="hover:text-white transition-colors">+92 42 9933 2438-39</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="text-accent shrink-0" />
<a href="mailto:info@ptut.edu.pk" className="hover:text-white transition-colors">info@ptut.edu.pk</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Clock size={16} className="text-accent shrink-0" />
                <span>Mon — Fri: 08:00 — 16:00</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs text-accent font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent">
                      <ArrowUpRight size={12} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs text-accent font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent rounded-full" />
              Students
            </h4>
            <ul className="space-y-3">
              {studentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent">
                      <ArrowUpRight size={12} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs text-accent font-bold uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent rounded-full" />
              Faculty
            </h4>
            <ul className="space-y-3">
              {facultyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-accent">
                      <ArrowUpRight size={12} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/40 tracking-wide">
            © {currentYear} PTUT — WEBSITE DEVELOPED BY IT DEPARTMENT, PTUT
          </p>
          <p className="text-[11px] text-white/40 tracking-wide uppercase">
            Punjab Tianjin University of Technology, Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}