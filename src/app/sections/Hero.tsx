'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stats = [
  { label: '10+', sub: 'Undergraduate Programs' },
  { label: '2', sub: 'Graduate Programs' },
  { label: '2', sub: 'Campuses — Lahore & Raiwind' },
  { label: '2026', sub: 'Fall Admissions Open' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0D2B5A] text-white overflow-hidden border-b-4 border-[#C62828]"
    >
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="PTUT Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B5A]/80 via-[#0D2B5A]/60 to-[#0D2B5A]/40 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0D2B5A/30_100%)] z-[1]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C62828] z-[3]" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1240px] mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-36 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 text-[12px] md:text-[13px] font-semibold tracking-[0.08em] uppercase mb-6 md:mb-8 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C62828] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C62828]" />
              </span>
              Pakistan&apos;s First Technology University
            </div>
          </motion.div>

          {/* Main Heading — University Name */}
          <motion.div variants={itemVariants} className="relative">
            {/* Decorative PTUT watermark */}
            <span className="absolute -top-6 -left-2 md:-left-4 text-[clamp(60px,12vw,140px)] font-black text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
              PTUT
            </span>

            <h1 className="text-[clamp(32px,5.2vw,68px)] font-extrabold leading-[1.08] tracking-tight">
              Punjab Tianjin{' '}
              <span className="block">University of Technology</span>
            </h1>
          </motion.div>

          {/* Tagline / Sub-heading */}
          <motion.div
            variants={itemVariants}
            className="mt-5 md:mt-6 flex items-center gap-4"
          >
            <h2 className="text-[clamp(22px,3vw,38px)] font-bold leading-[1.15] tracking-tight text-white/95">
              Innovation with Purpose.
              <br className="hidden sm:block" />{' '}
              <span className="text-[#C62828]">Excellence</span> with Vision.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-base md:text-lg text-white/70 max-w-[55ch] leading-[1.75] font-light"
          >
            The first institute in Pakistan built around a vision of world-class
            technical and vocational training at graduation level — applied
            knowledge and skill for the market that&apos;s actually hiring.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-8 md:mt-10"
          >
            <a
              href="#admissions"
              className="group inline-flex items-center gap-2.5 bg-[#C62828] text-white px-7 py-4 text-sm font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C62828]/30 active:translate-y-0"
            >
              APPLY FOR ADMISSION
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#programs"
              className="group inline-flex items-center gap-2 border-[1.5px] border-white/30 text-white px-7 py-4 text-sm font-medium rounded-lg transition-all hover:border-[#C62828] hover:text-[#C62828] hover:bg-white/5 active:translate-y-0"
            >
              VIEW PROGRAMS
              <ArrowRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-14 md:mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.sub}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 hover:border-[#C62828]/30 transition-all duration-300"
                >
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#C62828] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <b className="block text-2xl md:text-[28px] font-extrabold text-white mb-1 tracking-tight">
                    {stat.label}
                  </b>

                  <span className="text-[12px] md:text-[13px] text-white/50 font-medium leading-tight block">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 text-white/40 hover:text-[#C62828] transition-colors group"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
          Explore
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}