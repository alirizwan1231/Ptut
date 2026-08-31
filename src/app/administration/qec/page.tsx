import { Mail, Phone, User, CheckCircle2 } from 'lucide-react';

const functions = [
  'Develop and implement quality assurance frameworks and procedures to ensure that academic programs meet national and international standards.',
  'Conduct systematic evaluations of academic programs and courses to assess their effectiveness in achieving desired learning outcomes.',
  'Gather and analyze feedback from students, faculty and other stakeholders to suggest program improvements.',
  'Organize and manage the visits of accreditation councils and Higher Education Commission (HEC).',
  'Organize workshops, seminars, and training sessions for faculty to enhance their teaching skills and understanding of quality standards.',
  'Promote a culture of continuous improvement by identifying areas for development and implementing action plans for enhancement.',
  'Prepare and maintain documentation required for compliance with accreditation councils and HEC standards, ensuring timely submission and accuracy.',
];

const accreditation = [
  { sr: 1, program: 'B.Sc. Electrical Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 2, program: 'B.Sc. Mechanical Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 3, program: 'B.Sc. Civil Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 4, program: 'B.Sc. Architectural Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 5, program: 'B.Sc. Automotive Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 6, program: 'B.Sc. Fashion Design Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 7, program: 'B.Sc. Software Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
  { sr: 8, program: 'B.Sc. Garments Engineering Technology', council: 'National Technology Council (NTC)', status: 'Accredited' },
];

const team = [
  {
    name: 'Dr. Zaigham Mushtaq',
    role: 'Director QEC',
    email: 'zaigham.mushtaq@ptut.edu.pk',
    phone: null,
  },
  {
    name: 'Muhammad Omer Yasin',
    role: 'Deputy Director QEC',
    email: 'omer.yasin@ptut.edu.pk',
    phone: null,
  },
];

export default function QECPage() {
  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-bold text-heading mb-4">Functions of QEC</h3>
        <div className="grid gap-4">
          {functions.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-bg-alt rounded-lg">
              <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-body leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <h3 className="text-lg font-bold mb-4 relative z-10">Quality Policy of PTUT</h3>
        <p className="text-white/85 leading-[1.85] text-sm relative z-10">
          Punjab Tianjin University of Technology (PTUT) is committed to achieving excellence in quality technical education, research, and innovation by continuously improving its academic programs, administrative processes, and institutional governance. Our aim is to develop a culture of quality that supports the personal and professional development of our youth and general public, faculty, and staff while meeting the evolving needs of the industry and the society. The University endeavors to attain the highest educational and research standards through national and international collaborations while conforming the requirements of relevant accreditation bodies.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-heading mb-4">Institutional Quality Circle — Accreditation of Programs</h3>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-white text-left">
                <th className="px-5 py-3.5 font-semibold">Sr. No.</th>
                <th className="px-5 py-3.5 font-semibold">Program</th>
                <th className="px-5 py-3.5 font-semibold">Accreditation Council</th>
                <th className="px-5 py-3.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {accreditation.map((row) => (
                <tr key={row.sr} className="bg-surface hover:bg-bg-alt transition-colors">
                  <td className="px-5 py-3.5 text-body">{row.sr}</td>
                  <td className="px-5 py-3.5 font-medium text-heading">{row.program}</td>
                  <td className="px-5 py-3.5 text-body">{row.council}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 size={12} /> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-heading mb-4">QEC Activities</h3>
        <div className="bg-surface border border-border rounded-xl p-6 shadow-sm space-y-3">
          <p className="text-sm font-semibold text-heading">Program Self Assessment:</p>
          <ul className="list-disc list-inside text-sm text-body space-y-1 ml-2">
            <li>M.Sc. Electrical Engineering Technology</li>
            <li>M.Sc. Mechanical Engineering Technology</li>
          </ul>
          <p className="text-sm text-body pt-2 border-t border-border">
            <span className="font-semibold text-heading">QEC Activity Calendar:</span> 2025-26
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-heading mb-6">QEC Leadership</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((person, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center text-heading mb-4">
                <User size={28} />
              </div>
              <h4 className="text-lg font-bold text-heading mb-1">{person.name}</h4>
              <div className="text-sm font-semibold text-accent mb-4">{person.role}</div>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${person.email}`} className="flex items-center gap-2.5 text-body hover:text-accent transition-colors">
                  <Mail size={15} className="shrink-0" />
                  <span className="break-all">{person.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}