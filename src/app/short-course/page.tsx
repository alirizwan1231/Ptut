import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Calendar, Clock, CheckCircle, Download, GraduationCap, Sparkles } from 'lucide-react';

export default function ShortCoursePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white pt-32 pb-16 border-b-4 border-accent">
          <div className="max-w-[1240px] mx-auto px-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3 bg-white/5 px-3 py-1 rounded-full">
              Professional Development
            </span>
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight">Short Courses</h1>
            <p className="mt-4 text-white/70 max-w-2xl text-lg">
              Specialized training programs designed for immediate industry impact.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <ScrollReveal className="lg:col-span-2">
                <div className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                  <div className="bg-gradient-to-r from-navy to-navy-light p-8 text-white">
                    <div className="inline-flex items-center gap-2 bg-accent text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-wider">
                      ADMISSIONS OPEN
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Denim Supervisor</h2>
                    <p className="text-white/70">6 Months Short Course at Punjab Tianjin University of Technology Lahore</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-accent" /> Course Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Can run your own business',
                        'Can be Quality, Stitching and Pattern making expert',
                        'Can get jobs in different textile and fashion industries / Brands',
                      ].map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-body">
                          <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="bg-bg-alt rounded-xl p-6 border border-border">
                    <h3 className="text-xs font-bold text-heading uppercase tracking-widest mb-4">Key Dates</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar size={18} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted font-medium uppercase">Course Start</div>
                          <div className="text-heading font-bold">22 October 2024</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted font-medium uppercase">Last Date to Apply</div>
                          <div className="text-heading font-bold">21 June 2024</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap size={18} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-muted font-medium uppercase">Duration</div>
                          <div className="text-heading font-bold">6 Months</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-navy rounded-xl p-6 text-white">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Downloads</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Advertisement' },
                        { label: 'Application Form' },
                        { label: 'Course Fee Challan' },
                      ].map((doc, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                        >
                          <span className="text-sm font-medium">{doc.label}</span>
                          <Download size={16} className="text-accent/60" />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}