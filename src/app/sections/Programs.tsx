'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'it', label: 'Computer & IT' },
  { id: 'mech', label: 'Engineering & Manufacturing' },
  { id: 'business', label: 'Business & Design' },
];

const programs = [
  { id: 1, title: 'Printing, Packaging & Graphics Engineering Technology', short: 'PPG', category: 'mech', img: '/images/prog-ppg.png', duration: '4-Year B.Sc', desc: 'Master the art and science of modern printing, packaging design, and graphic production technologies.' },
  { id: 2, title: 'Information Security Engineering Technology', short: 'ISE', category: 'it', img: '/images/prog-ise.jpg', duration: '4-Year B.Sc', desc: 'Build expertise in cybersecurity, threat detection, and secure network infrastructure management.' },
  { id: 3, title: 'Artificial Intelligence Engineering Technology', short: 'AIE', category: 'it', img: '/images/prog-aie.jpg', duration: '4-Year B.Sc', desc: 'Develop intelligent systems, machine learning models, and AI-driven solutions for real-world problems.' },
  { id: 4, title: 'Bachelor of Business & Information Technology', short: 'BBIT', category: 'business', img: '/images/prog-bbit.jpeg', duration: '4-Year BBIT', desc: 'Bridge business strategy with IT innovation to lead digital transformation in modern enterprises.' },
  { id: 5, title: 'Software Engineering Technology', short: 'SE', category: 'it', img: '/images/prog-se.jpg', duration: '4-Year B.Sc', desc: 'Learn full-stack development, software architecture, and agile engineering practices from day one.' },
  { id: 6, title: 'Garment Engineering Technology', short: 'GE', category: 'mech', img: '/images/prog-ge.jpg', duration: '4-Year B.Sc', desc: 'Combine textile science with manufacturing engineering to revolutionize the apparel industry.' },
  { id: 7, title: 'Electrical Engineering Technology', short: 'EE', category: 'it', img: '/images/prog-ee.jpg', duration: '4-Year B.Sc', desc: 'Design and maintain power systems, control circuits, and renewable energy infrastructure.' },
  { id: 8, title: 'Automotive Engineering Technology', short: 'AE', category: 'mech', img: '/images/prog-ae.jpg', duration: '4-Year B.Sc', desc: 'Study vehicle dynamics, powertrain systems, and emerging electric vehicle technologies.' },
  { id: 9, title: 'Mechanical Engineering Technology', short: 'ME', category: 'mech', img: '/images/prog-me.jpg', duration: '4-Year B.Sc', desc: 'Gain hands-on skills in CAD, thermodynamics, and precision manufacturing processes.' },
  { id: 10, title: 'Fashion Design Technology', short: 'FD', category: 'business', img: '/images/prog-fd.jpg', duration: '4-Year B.Sc', desc: 'Blend creative design thinking with digital tools to shape the future of fashion and wearable tech.' },
];

export default function Programs() {
  const [activeCat, setActiveCat] = useState('all');
  const filtered = activeCat === 'all' ? programs : programs.filter((p) => p.category === activeCat);

  return (
    <section id="programs" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#C62828] uppercase tracking-widest mb-3.5">
                <span className="text-[9px]">◆</span>
                Program Catalog
              </span>
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-bold tracking-tight text-[#0D2B5A] leading-tight">
                Undergraduate Programs
              </h2>
            </div>
            <p className="text-[#4A5568] max-w-[40ch] leading-relaxed">
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
                    ? 'bg-[#0D2B5A] text-white border-[#0D2B5A] shadow-lg shadow-[#0D2B5A]/20'
                    : 'bg-white text-[#4A5568] border-black/5 hover:border-[#0D2B5A] hover:text-[#0D2B5A]'
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
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
              >
                <div className="relative h-[220px] overflow-hidden shrink-0">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B5A]/55 to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#C62828] text-white text-[11px] font-bold px-3.5 py-1 rounded shadow-lg shadow-[#C62828]/35 tracking-widest">
                    {p.short}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-[17px] font-bold text-[#0D2B5A] leading-snug mb-1.5">
                    {p.title}
                  </h4>
                  <div className="text-[13px] text-[#64748B] font-medium mb-4">
                    Undergraduate Degree Program
                  </div>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex justify-between items-center border-t border-black/5 pt-4 mt-auto">
                    <span className="text-[11px] font-bold text-[#C62828] bg-[#C62828]/5 px-3.5 py-1.5 rounded-full tracking-wider uppercase">
                      {p.duration}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#C62828] text-[15px] font-bold group-hover:bg-[#C62828] group-hover:text-white group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal>
          <div className="mt-12 flex flex-col gap-4">
            <div className="text-xs text-[#64748B] tracking-widest font-semibold uppercase">
              ◆ Graduate Programs
            </div>
            <div className="flex flex-wrap gap-4">
              {['MS — Mechanical Engineering Technology', 'MS — Electrical Engineering Technology'].map((prog) => (
                <span
                  key={prog}
                  className="text-sm font-semibold px-7 py-3.5 border-[1.5px] border-[#0D2B5A] rounded-xl text-[#0D2B5A] bg-white hover:bg-[#0D2B5A] hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {prog}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}