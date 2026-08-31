import { Mail, Phone, User } from 'lucide-react';

const staff = [
  {
    name: 'Dr. Manzoom Akhter',
    role: 'Registrar',
    email: 'registrar@ptut.edu.pk',
    phone: '+92 42 9933 0080 Ext. 103',
    education: null,
  },
  {
    name: 'Rana Muhammad Abubakar',
    role: 'Deputy Registrar',
    email: 'deputyregistrar@ptut.edu.pk',
    phone: '+92 42 9933 2438 Ext. 104',
    education: null,
  },
  {
    name: 'Muhammad Ahmad',
    role: 'Assistant',
    email: 'muhammad.ahmad@ptut.edu.pk',
    phone: '+92 42 9933 2438 Ext. 104',
    education: 'MS in Finance — NUML University Islamabad\nBBA in Finance — University of Education Lahore',
  },
];

export default function RegistrarPage() {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="text-xl font-bold text-heading mb-4">About the Registrar Office</h3>
        <p className="text-body leading-relaxed">
          The Registrar Office serves as the central administrative hub for academic records, student enrollment, degree verification, and official correspondence. It ensures the integrity and confidentiality of all university documentation.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-heading mb-6">Office Bearers</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {staff.map((person) => (
            <div key={person.email} className="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-heading mb-4">
                <User size={28} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-1">{person.name}</h4>
              <div className="text-sm font-semibold text-accent mb-4">{person.role}</div>

              {person.education && (
                <div className="text-xs text-body bg-bg-alt rounded-lg p-3 mb-4 whitespace-pre-line leading-relaxed">
                  {person.education}
                </div>
              )}

              <div className="space-y-2 text-sm">
                <a href={`mailto:${person.email}`} className="flex items-center gap-2.5 text-body hover:text-accent transition-colors">
                  <Mail size={15} className="shrink-0" />
                  <span className="break-all">{person.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-body">
                  <Phone size={15} className="shrink-0" />
                  <span>{person.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}