import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Download, FileText, AlertCircle, ClipboardList, ListChecks } from 'lucide-react';

const downloads = [
  { title: 'Undertaking Form', type: 'FORM' },
  { title: 'Medical Certificate', type: 'FORM' },
  { title: '2nd List BS Program Fee Challan', type: 'CHALLAN' },
  { title: 'First Semester Challan for MSC Program', type: 'CHALLAN' },
  { title: 'SET 2nd List', type: 'LIST' },
  { title: 'PPG 2nd List', type: 'LIST' },
  { title: 'MET 2nd List', type: 'LIST' },
  { title: 'FD 2nd List', type: 'LIST' },
  { title: 'EET 2nd List', type: 'LIST' },
  { title: 'CET 2nd List', type: 'LIST' },
  { title: 'BBIT 2nd List', type: 'LIST' },
  { title: 'AU 2nd List', type: 'LIST' },
  { title: 'ArET 2nd List', type: 'LIST' },
  { title: 'AI 2nd List', type: 'LIST' },
  { title: '1st Merit List Phase-1 2026 MSMET', type: 'LIST' },
  { title: '1st Merit List Phase-1 2026 MSET', type: 'LIST' },
];

export default function MeritListPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy text-white pt-32 pb-16 border-b-4 border-accent">
          <div className="max-w-[1240px] mx-auto px-6">
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight">Merit Lists</h1>
            <p className="mt-4 text-white/70 max-w-2xl text-lg">
              Download provisional merit lists, fee challans, and required forms for Fall 2026 admissions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6">
            <ScrollReveal>
              <div className="bg-bg-alt border-l-4 border-accent rounded-r-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-accent shrink-0 mt-1" size={24} />
                  <div>
                    <h2 className="text-lg font-bold text-heading mb-2">Instructions for Selected Candidates</h2>
                    <p className="text-body leading-relaxed">
                      The selected candidates are directed to download fee challan (available on website), fill it with your details and pay the same in any branch of BOP. After payment, visit the admissions office along with original documents and 4 sets of photocopies that includes Matric/O Levels, Intermediate P-1/DAE P-II/A Levels, B.Form/CNIC, Domicile, passport size pictures (4 No.s) along with undertaking form (available on website).
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24 bg-bg">
          <div className="max-w-[1240px] mx-auto px-6">
            <ScrollReveal>
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                  <span className="text-[9px]">◆</span> Downloads
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-heading">Provisional Phase I — Second Merit List</h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloads.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <a
                    href="#"
                    className="group flex items-center gap-4 p-5 bg-bg-alt rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center shrink-0">
                      {item.type === 'FORM' ? <FileText size={18} /> : item.type === 'CHALLAN' ? <ClipboardList size={18} /> : <ListChecks size={18} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold text-accent tracking-widest uppercase mb-0.5">{item.type}</div>
                      <div className="text-sm font-semibold text-heading group-hover:text-accent transition-colors truncate">{item.title}</div>
                    </div>
                    <Download size={16} className="text-muted group-hover:text-accent transition-colors shrink-0" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}