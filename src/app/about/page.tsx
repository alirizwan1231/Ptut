'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Header from '../components/Header';
import Footer from '../components/Footer';

const partners = [
  {
    abbr: 'TUTE',
    name: 'Tianjin University of Technology & Education',
    role: 'Curriculum Development & Academic Framework',
  },
  {
    abbr: 'TJPU',
    name: 'Tianjin Polytechnic University',
    role: 'Technical Training & Research Collaboration',
  },
  {
    abbr: 'TCU',
    name: 'Tianjin Chengjian University',
    role: 'State-of-the-Art Lab Facilities & Infrastructure',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── PAGE HERO ─── */}
       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b-4 border-accent">
  {/* Background Image */}
  <Image
    src="/images/hero.png"
    alt="PTUT Campus"
    fill
    className="object-cover"
    priority
  />

  {/* Dark overlay for readability — hero always renders on a dark navy backdrop regardless of theme */}
  <div className="absolute inset-0 bg-navy/70" />

  {/* Decorative gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,40,40,0.15)_0%,transparent_50%)] pointer-events-none" />

  {/* Dot pattern */}
  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

  <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8">
    <ScrollReveal>
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-6">
          <span className="w-8 h-[1px] bg-accent" />
          Discover PTUT
        </div>
        <h1 className="text-[clamp(36px,5.5vw,64px)] font-extrabold text-white leading-[1.05] tracking-tight">
          About Punjab Tianjin{' '}
          <span className="text-accent">University of Technology</span>
        </h1>
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-[55ch]">
          Pakistan&apos;s first technology university — born from a vision shared between Punjab and Tianjin, built to empower technologists for the modern world.
        </p>
      </div>
    </ScrollReveal>
  </div>
</section>

        {/* ─── OUR STORY ─── */}
        <section className="py-24 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-[100px] font-black text-heading/[0.04] leading-none select-none pointer-events-none">
                    2017
                  </span>
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                      <span className="text-[9px]">◆</span>
                      Our History
                    </span>
                    <h2 className="text-[clamp(28px,3.2vw,40px)] font-bold text-heading leading-tight tracking-tight mb-6">
                      A vision forged across borders.
                    </h2>
                    <div className="space-y-5 text-body leading-[1.8]">
                      <p>
                        Punjab Tianjin University of Technology (PTUT) started in the backdrop of a historic visit by the <strong className="text-heading">Chief Minister of Punjab, Pakistan</strong> to Tianjin, China in <strong className="text-accent">May 2017</strong>, where a framework agreement was signed between a consortium of three reputed universities of Tianjin and the Government of Punjab.
                      </p>
                      <p>
                        As per the vision of the Chief Minister, PTUT is a leading public sector university dedicated to preparing trained technologists in the province. Through cutting-edge research and highly in-demand, industry-oriented degree programs, PTUT empowers the youth with necessary skills in the latest technological domains.
                      </p>
                      <p>
                        The concept of Technology Universities is new in Pakistan. PTUT focuses on providing a career path to technicians and diploma holders who want to excel — disseminating applied knowledge and skills that are actually required in the job market.
                      </p>
                    </div>

                    {/* Mini timeline */}
                    <div className="mt-10 flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-extrabold text-heading">2017</div>
                        <div className="text-[11px] text-muted font-medium uppercase tracking-wider mt-1">Founded</div>
                      </div>
                      <div className="w-12 h-[1px] bg-accent/30" />
                      <div className="text-center">
                        <div className="text-3xl font-extrabold text-heading">3</div>
                        <div className="text-[11px] text-muted font-medium uppercase tracking-wider mt-1">Chinese Partners</div>
                      </div>
                      <div className="w-12 h-[1px] bg-accent/30" />
                      <div className="text-center">
                        <div className="text-3xl font-extrabold text-heading">10+</div>
                        <div className="text-[11px] text-muted font-medium uppercase tracking-wider mt-1">Programs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="relative">
                  <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-navy rounded-2xl opacity-[0.04]" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <Image
                      src="/images/hero.png"
                      alt="PTUT Campus"
                      width={600}
                      height={450}
                      className="w-full h-[400px] lg:h-[480px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg">
                        <div className="text-[11px] font-bold text-accent uppercase tracking-widest mb-1">Framework Agreement</div>
                        <div className="text-sm font-semibold text-heading">Signed in Tianjin, China — May 2017</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── VISION & MISSION ─── */}
        <section className="py-24 bg-bg-alt">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3 justify-center">
                  <span className="text-[9px]">◆</span>
                  Guiding Principles
                </span>
                <h2 className="text-[clamp(30px,3.4vw,44px)] font-bold text-heading leading-tight tracking-tight">
                  Vision & Mission
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Vision */}
              <ScrollReveal>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative bg-surface rounded-2xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-navy/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-white mb-6 shadow-lg shadow-navy/20 group-hover:scale-110 transition-transform duration-300">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight">Our Vision</h3>
                    <p className="text-body leading-relaxed">
                      To be a leading public sector university of Punjab for preparing trained technologists — empowering national development and prosperity through cutting-edge, industry-aligned education.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Mission */}
              <ScrollReveal delay={0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative bg-surface rounded-2xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-white mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-4 tracking-tight">Our Mission</h3>
                    <p className="text-body leading-relaxed">
                      Through cutting-edge research and highly in-demand industry-oriented degree programs, we commit to empowering the youth with necessary skills and expertise in the latest technological domains.
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>



        {/* ─── CTA ─── */}
        <section className="pb-20 pt-4">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-accent text-white rounded-2xl px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-navy shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center lg:text-left">
                  <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-tight max-w-[24ch]">
                    Be part of Pakistan&apos;s technology revolution.
                  </h2>
                  <p className="text-white/80 mt-3 text-sm">
                    ◆ Applications open for Fall {new Date().getFullYear()}
                  </p>
                </div>
                <a
                  href="/"
                  className="relative z-10 shrink-0 bg-surface text-accent px-8 py-4 text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  BACK TO HOME →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}