'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'it', label: 'Computer & IT' },
  { id: 'mech', label: 'Engineering & Manufacturing' },
  { id: 'business', label: 'Business & Design' },
];

const programs = [
  { id: 1, title: 'Printing, Packaging & Graphics Engineering Technology', short: 'PPG', href: '/admissions', category: 'mech', img: '/images/prog-ppg.png', duration: '4-Year B.Sc', desc: 'Master the art and science of modern printing, packaging design, and graphic production technologies.' },
  { id: 2, title: 'Information Security Engineering Technology', short: 'ISE', href: '/programs/information-security-engineering-technology', category: 'it', img: '/images/prog-ise.jpg', duration: '4-Year B.Sc', desc: 'Build expertise in cybersecurity, threat detection, and secure network infrastructure management.' },
  { id: 3, title: 'Artificial Intelligence Engineering Technology', short: 'AIE', href: '/admissions', category: 'it', img: '/images/prog-aie.jpg', duration: '4-Year B.Sc', desc: 'Develop intelligent systems, machine learning models, and AI-driven solutions for real-world problems.' },
  { id: 4, title: 'Bachelor of Business & Information Technology', short: 'BBIT', href: '/programs/bachelor-of-business-and-information-technology', category: 'business', img: '/images/prog-bbit.jpeg', duration: '4-Year BBIT', desc: 'Bridge business strategy with IT innovation to lead digital transformation in modern enterprises.' },
  { id: 5, title: 'Software Engineering Technology', short: 'SE', href: '/programs/software-engineering-technology', category: 'it', img: '/images/prog-se.jpg', duration: '4-Year B.Sc', desc: 'Learn full-stack development, software architecture, and agile engineering practices from day one.' },
  { id: 6, title: 'Garment Engineering Technology', short: 'GE', href: '/programs/garment-engineering-technology', category: 'mech', img: '/images/prog-ge.jpg', duration: '4-Year B.Sc', desc: 'Combine textile science with manufacturing engineering to revolutionize the apparel industry.' },
  { id: 7, title: 'Electrical Engineering Technology', short: 'EE', href: '/programs/electrical-engineering-technology', category: 'it', img: '/images/prog-ee.jpg', duration: '4-Year B.Sc', desc: 'Design and maintain power systems, control circuits, and renewable energy infrastructure.' },
  { id: 8, title: 'Automotive Engineering Technology', short: 'AE', href: '/programs/automotive-engineering-technology', category: 'mech', img: '/images/prog-ae.jpg', duration: '4-Year B.Sc', desc: 'Study vehicle dynamics, powertrain systems, and emerging electric vehicle technologies.' },
  { id: 9, title: 'Mechanical Engineering Technology', short: 'ME', href: '/programs/mechanical-engineering-technology', category: 'mech', img: '/images/prog-me.jpg', duration: '4-Year B.Sc', desc: 'Gain hands-on skills in CAD, thermodynamics, and precision manufacturing processes.' },
  { id: 10, title: 'Fashion Design Technology', short: 'FD', href: '/programs/fashion-design-technology', category: 'business', img: '/images/prog-fd.webp', duration: '4-Year B.Sc', desc: 'Blend creative design thinking with digital tools to shape the future of fashion and wearable tech.' },
];

export default function Programs() {
  const [activeCat, setActiveCat] = useState('all');
  const filtered = activeCat === 'all' ? programs : programs.filter((p) => p.category === activeCat);

  return (
    <section id="programs" className="py-24 bg-bg-alt">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3.5">
                <span className="text-[9px]">◆</span>
                Program Catalog
              </span>
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-bold tracking-tight text-heading leading-tight">
                Undergraduate Programs
              </h2>
            </div>
            <p className="text-body max-w-[40ch] leading-relaxed">
              Technology-focused Bachelor&apos;s programs built around applied, market-oriented skill.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-5 py-2.5 text-[13px] font-semibold rounded-md border-[1.5px] transition-all ${
                  activeCat === cat.id
                    ? 'bg-navy text-white border-navy shadow-lg shadow-navy/20'
                    : 'bg-surface text-body border-border hover:border-navy hover:text-heading'
                }`}
              >
                {cat.label} ({cat.id === 'all' ? programs.length : programs.filter((p) => p.category === cat.id).length})
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <Link key={p.id} href={p.href} className="block h-full">
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-surface rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-[220px] overflow-hidden shrink-0">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
                  <span className="absolute top-4 right-4 bg-accent text-white text-[11px] font-bold px-3.5 py-1 rounded shadow-lg shadow-accent/35 tracking-widest">
                    {p.short}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-[17px] font-bold text-heading leading-snug mb-1.5">
                    {p.title}
                  </h4>
                  <div className="text-[13px] text-muted font-medium mb-4">
                    Undergraduate Degree Program
                  </div>
                  <p className="text-sm text-body leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex justify-between items-center border-t border-border pt-4 mt-auto">
                    <span className="text-[11px] font-bold text-accent bg-accent/5 px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                      {p.duration}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-bg-alt flex items-center justify-center text-accent text-[15px] font-bold group-hover:bg-accent group-hover:text-white group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal>
          <div className="mt-12 flex flex-col gap-4">
            <div className="text-xs text-muted tracking-widest font-semibold uppercase">
              ◆ Graduate Programs
            </div>
            <div className="flex flex-wrap gap-4">
              {['MS — Mechanical Engineering Technology', 'MS — Electrical Engineering Technology'].map((prog) => (
                <a
                  key={prog}
                  href="/admissions"
                  className="text-sm font-semibold px-7 py-3.5 border-[1.5px] border-navy rounded-xl text-heading bg-surface hover:bg-navy hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  {prog}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}