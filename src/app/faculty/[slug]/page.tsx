import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { staffMembers } from 'src/data/faculty';
import { ArrowLeft, Mail, Award } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return staffMembers.map((m) => ({ slug: m.slug }));
}

export default function FacultyDetailPage({ params }: Props) {
  const member = staffMembers.find((m) => m.slug === params.slug);
  if (!member) notFound();

  const related = staffMembers
    .filter((m) => m.slug !== member.slug && m.department === member.department)
    .slice(0, 3);

  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-bg to-bg-alt min-h-screen">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="text-xs font-medium text-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/faculty" className="hover:text-accent">Staff Profile</Link>
          <span>/</span>
          <span className="text-heading font-semibold">{member.name}</span>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">
          <div className="relative">
            <div className="absolute top-5 left-5 -right-5 -bottom-5 bg-navy rounded-2xl opacity-5" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-bg-alt">
              <Image src={member.image} alt={member.name} fill className="object-cover object-top" priority />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                <span className="text-[9px]">◆</span>
                {member.department}
              </span>
              <h1 className="text-[clamp(28px,3.5vw,42px)] font-bold text-heading tracking-tight mb-2">{member.name}</h1>
              <p className="text-lg text-muted font-medium">{member.designation}</p>
            </div>

            {member.email && (
              <div className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border shadow-sm max-w-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Email</div>
                  <div className="text-sm font-medium text-heading">{member.email}</div>
                </div>
              </div>
            )}

            <div className="bg-surface rounded-xl border border-border p-6 lg:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                <Award size={20} className="text-accent" />
                About
              </h3>
              <p className="text-body leading-relaxed">
                {member.name} serves as {member.designation} in the {member.department} at Punjab Tianjin University of Technology. Committed to advancing technology education and fostering academic excellence.
              </p>
            </div>

            <Link href="/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-heading hover:text-accent transition-colors">
              <ArrowLeft size={16} /> Back to Staff Profile
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-heading mb-8">Colleagues in {member.department}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link key={s.slug} href={`/faculty/${s.slug}`} className="group flex items-center gap-4 p-4 bg-surface rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-bg-alt">
                    <Image src={s.image} alt={s.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading group-hover:text-accent transition-colors">{s.name}</h4>
                    <p className="text-xs text-muted font-medium">{s.designation}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}