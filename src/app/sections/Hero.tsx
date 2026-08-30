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
      className="relative min-h-screen flex items-center bg-navy text-white overflow-hidden border-b-4 border-accent"
    >
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-1.jpeg"
          alt="PTUT Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer Overlay for depth — kept on navy regardless of theme, it's a fixed dark hero */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/25 z-[1]" />
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] z-[1]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-[3]" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              Pakistan&apos;s First Technology University
            </div>
          </motion.div>

          {/* Main Heading — University Name */}
          <motion.div variants={itemVariants} className="relative">
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
              <span className="text-accent">Excellence</span> with Vision.
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
              className="group inline-flex items-center gap-2.5 bg-accent text-white px-7 py-4 text-sm font-semibold rounded-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/30 active:translate-y-0"
            >
              APPLY FOR ADMISSION
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#programs"
              className="group inline-flex items-center gap-2 border-[1.5px] border-white/30 text-white px-7 py-4 text-sm font-medium rounded-lg transition-all hover:border-accent hover:text-accent hover:bg-white/5 active:translate-y-0"
            >
              VIEW PROGRAMS
              <ArrowRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </motion.div>

          {/* Stats Strip */}
      
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors group"
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