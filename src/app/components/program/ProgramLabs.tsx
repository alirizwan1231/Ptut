'use client';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

interface Props {
  labs: string[];
}

export default function ProgramLabs({ labs }: Props) {
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
          Infrastructure
        </span>
        <h2 className="text-[clamp(26px,3vw,36px)] font-bold text-heading tracking-tight">
          Laboratories & Facilities
        </h2>
        <p className="text-body mt-2 max-w-[60ch]">
          State-of-the-art laboratories providing hands-on experience with modern electrical engineering equipment and systems.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {labs.map((lab, i) => (
          <motion.div
            key={lab}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 p-5 bg-surface rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <FlaskConical size={18} />
            </div>
            <span className="text-sm font-semibold text-heading leading-snug pt-1">{lab}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}