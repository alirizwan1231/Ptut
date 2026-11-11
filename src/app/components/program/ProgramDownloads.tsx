'use client';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

interface Props {
  downloads: { label: string; url: string }[];
}

export default function ProgramDownloads({ downloads }: Props) {
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
          Resources
        </span>
        <h2 className="text-[clamp(26px,3vw,36px)] font-bold text-heading tracking-tight">
          Downloads & Forms
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {downloads.map((item, i) => {
          const isDownloadable = Boolean(item.url) && item.url !== '#';
          const Card = isDownloadable ? motion.a : motion.div;
          return (
          <Card
            key={item.label}
            {...(isDownloadable ? { href: item.url } : {})}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={isDownloadable
              ? "group flex flex-col items-center text-center p-6 bg-surface rounded-xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 transition-all"
              : "flex flex-col items-center text-center p-6 bg-surface rounded-xl border border-border shadow-sm"}
          >
            <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-heading group-hover:bg-accent group-hover:text-white transition-all mb-4">
              <FileText size={22} />
            </div>
            <h4 className="text-sm font-bold text-heading group-hover:text-accent transition-colors mb-2">
              {item.label}
            </h4>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted group-hover:text-accent transition-colors">
              <Download size={14} />
              PDF
            </span>
          </Card>
          );
        })}
      </div>
    </motion.section>
  );
}