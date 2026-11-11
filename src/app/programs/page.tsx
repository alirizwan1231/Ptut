import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { programs } from '../../data/programs';

export default function ProgramsPage() {
  const groups = programs.reduce<{ faculty: string; items: typeof programs }[]>(
    (acc, program) => {
      const existing = acc.find((g) => g.faculty === program.facultyGroup);
      if (existing) {
        existing.items.push(program);
      } else {
        acc.push({ faculty: program.facultyGroup, items: [program] });
      }
      return acc;
    },
    []
  );

  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white pt-32 pb-16 border-b-4 border-accent">
          <div className="max-w-[1240px] mx-auto px-6">
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight">Programs</h1>
            <p className="mt-4 text-white/70 max-w-2xl text-lg">
              Undergraduate programs offered at Punjab Tianjin University of Technology, Lahore.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6 space-y-16">
            {groups.map((group) => (
              <div key={group.faculty}>
                <ScrollReveal>
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                      <span className="text-[9px]">◆</span> Faculty
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-heading">{group.faculty}</h2>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((program, i) => (
                    <ScrollReveal key={program.slug} delay={i * 0.05}>
                      <Link
                        href={`/programs/${program.slug}`}
                        className="group flex items-start gap-5 p-6 bg-surface border border-border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all h-full"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-heading group-hover:text-accent transition-colors leading-snug">
                            {program.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-body leading-relaxed">{program.tagline}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-muted font-medium">
                            <span className="inline-flex items-center gap-1.5">
                              <BookOpen size={14} className="text-accent" /> {program.degree}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock size={14} className="text-accent" /> {program.duration}
                            </span>
                          </div>
                        </div>
                        <ArrowRight size={18} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
