import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Punjab+Tianjin+University+of+Technology+Lahore';

const quickLinks = [
  {
    href: '/admissions',
    label: 'Admissions',
    desc: 'Explore programs, check eligibility, and apply online today.',
  },
  {
    href: '/merit-list',
    label: 'Merit Lists',
    desc: 'Download provisional merit lists, fee challans, and required forms for Fall 2026 admissions.',
  },
  {
    href: '/faculty',
    label: 'Faculty',
    desc: 'Staff profiles and directory.',
  },
  {
    href: '/administration/registrar',
    label: 'Registrar Office',
    desc: 'Student records, enrollment, and academic documentation.',
  },
  {
    href: '/administration/examinations',
    label: 'Examinations',
    desc: 'Exam scheduling, results, and controller office.',
  },
  {
    href: '/administration/directorate-of-academics',
    label: 'Directorate of Academics',
    desc: 'Curriculum development, academic policy, and faculty development.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white pt-32 pb-16 border-b-4 border-accent">
          <div className="max-w-[1240px] mx-auto px-6">
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-white/70 max-w-2xl text-lg">
              Get in touch with Punjab Tianjin University of Technology, Lahore.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ScrollReveal>
                <div className="p-6 bg-bg-alt rounded-xl border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center mb-4">
                    <MapPin size={18} />
                  </div>
                  <h2 className="text-sm font-bold text-heading mb-1.5">Visit Us</h2>
                  <p className="text-sm text-body leading-relaxed">
                    Near Green Town, Lahore — Punjab, Pakistan
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-accent hover:underline underline-offset-4"
                  >
                    Get directions <ExternalLink size={14} />
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="p-6 bg-bg-alt rounded-xl border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center mb-4">
                    <Phone size={18} />
                  </div>
                  <h2 className="text-sm font-bold text-heading mb-1.5">Call Us</h2>
                  <a
                    href="tel:+924299332438"
                    className="text-sm text-body hover:text-accent transition-colors"
                  >
                    +92 42 9933 2438-39
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="p-6 bg-bg-alt rounded-xl border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center mb-4">
                    <Mail size={18} />
                  </div>
                  <h2 className="text-sm font-bold text-heading mb-1.5">Email Us</h2>
                  <a
                    href="mailto:info@ptut.edu.pk"
                    className="text-sm text-body hover:text-accent transition-colors"
                  >
                    info@ptut.edu.pk
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="p-6 bg-bg-alt rounded-xl border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center mb-4">
                    <Clock size={18} />
                  </div>
                  <h2 className="text-sm font-bold text-heading mb-1.5">Office Hours</h2>
                  <p className="text-sm text-body leading-relaxed">Mon — Fri: 08:00 — 16:00</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="pb-24 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6">
            <ScrollReveal>
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  <span className="text-[9px]">◆</span> Quick Links
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-heading">Where to go for…</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, i) => (
                <ScrollReveal key={link.href} delay={i * 0.05}>
                  <Link
                    href={link.href}
                    className="group flex items-start gap-4 p-6 bg-surface border border-border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all h-full"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-heading group-hover:text-accent transition-colors">
                        {link.label}
                      </h3>
                      <p className="mt-1.5 text-sm text-body leading-relaxed">{link.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
