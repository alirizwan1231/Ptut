'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Users, FileCheck } from 'lucide-react';

interface Props {
  eligibility: {
    prerequisites: string[];
    distribution: string[];
    general: string[];
  };
}

export default function ProgramEligibility({ eligibility }: Props) {
  const sections = [
    {
      icon: FileCheck,
      title: 'Prerequisites',
      color: 'text-accent',
      bg: 'bg-accent/10',
      items: eligibility.prerequisites,
    },
    {
      icon: Users,
      title: 'Seat Distribution',
      color: 'text-heading',
      bg: 'bg-navy/10',
      items: eligibility.distribution,
    },
    {
      icon: CheckCircle,
      title: 'General Criteria',
      color: 'text-heading',
      bg: 'bg-navy/10',
      items: eligibility.general,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
    >
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
          <span className="text-[9px]">◆</span>
          Admissions
        </span>
        <h2 className="text-[clamp(26px,3vw,36px)] font-bold text-heading tracking-tight">
          Admission & Eligibility Criteria
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-surface rounded-xl border border-border p-6 shadow-sm">
            <div className={`w-10 h-10 rounded-lg ${section.bg} ${section.color} flex items-center justify-center mb-4`}>
              <section.icon size={20} />
            </div>
            <h3 className="text-lg font-bold text-heading mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-body leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}