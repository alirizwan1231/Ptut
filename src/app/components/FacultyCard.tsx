import Link from 'next/link';
import Image from 'next/image';

interface Props {
  slug: string;
  name: string;
  designation: string;
  department: string;
  image: string;
}

export default function FacultyCard({ slug, name, designation, department, image }: Props) {
  const isLeadership = ['Dean', 'Head of Department', 'Treasurer', 'Project Director', 'Coordinator'].some(r => designation.includes(r));

  return (
    <Link
      href={`/faculty/${slug}`}
      className="group block bg-surface rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${
          isLeadership ? 'bg-accent/10 text-accent' : 'bg-navy/10 text-heading'
        }`}>
          {designation}
        </span>
        <h3 className="text-base font-bold text-heading leading-tight mb-1 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="text-xs text-muted font-medium">{department}</p>
      </div>
    </Link>
  );
}