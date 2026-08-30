'use client';
import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import {
    BookOpen,
    ChevronRight,
    Menu,
    X,
    GraduationCap,
    DollarSign,
    ClipboardList,
    Award,
    Users,
    Calendar,
    FileText,
    AlertCircle,
    Scale,
    Library,
    UserCheck,
    Building,
    PenTool,
    Shield,
    BookMarked,
} from 'lucide-react';

const chapters = [
    { id: 'ch1', title: 'Chapter 1: Job Descriptions', icon: Users },
    { id: 'ch2', title: 'Chapter 2: Admission Regulations', icon: FileText },
    { id: 'ch3', title: 'Chapter 3: Fee Regulations', icon: DollarSign },
    { id: 'ch4', title: 'Chapter 4: Semester Regulations', icon: Calendar },
    { id: 'ch5', title: 'Chapter 5: Examination Regulations', icon: ClipboardList },
    { id: 'ch6', title: 'Chapter 6: Planning & Orientation', icon: BookOpen },
    { id: 'ch7', title: 'Chapter 7: Post Graduate Studies', icon: GraduationCap },
];

export default function AcademicContent() {
    const [mobileTocOpen, setMobileTocOpen] = useState(false);

    const note = (title: string, children: React.ReactNode) => (
        <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-4 my-5">
            <p className="text-sm font-bold text-heading mb-1 flex items-center gap-2">
                <AlertCircle size={14} className="text-accent" /> {title}
            </p>
            <div className="text-sm text-body leading-relaxed">{children}</div>
        </div>
    );

    const table = (headers: string[], rows: (string | number)[][]) => (
        <div className="overflow-x-auto my-5 rounded-lg border border-border">
            <table className="w-full text-sm text-left">
                <thead className="bg-navy text-white">
                    <tr>{headers.map((h, i) => <th key={i} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {rows.map((row, ri) => (
                        <tr key={ri} className="bg-surface hover:bg-bg-alt transition-colors">
                            {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-body">{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="bg-bg-alt min-h-screen">
            <div className="bg-navy text-white pt-28 pb-14 lg:pt-32 lg:pb-16 border-b-4 border-accent">
                <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                        <BookOpen size={14} /> Official Document
                    </span>
                    <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-tight tracking-tight max-w-[24ch]">
                        Academic Regulations
                    </h1>
                    <p className="mt-4 text-white/70 max-w-[65ch] leading-relaxed text-base lg:text-lg">
                        Punjab Tianjin University of Technology, Lahore — Comprehensive academic, fee, and discipline
                        regulations governing the semester system for faculty, staff, and students.
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-10 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

                    <aside className="lg:w-72 shrink-0">
                        <div className="lg:sticky lg:top-28">
                            <button
                                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                                className="lg:hidden w-full flex items-center justify-between bg-surface border border-border rounded-xl px-5 py-3.5 text-sm font-bold text-heading shadow-sm mb-3"
                            >
                                <span className="flex items-center gap-2"><Menu size={16} className="text-accent" /> Table of Contents</span>
                                {mobileTocOpen ? <X size={16} /> : <ChevronRight size={16} />}
                            </button>

                            <div className={`${mobileTocOpen ? 'block' : 'hidden'} lg:block bg-surface rounded-xl border border-border shadow-sm p-5`}>
                                <h3 className="text-xs font-bold text-heading uppercase tracking-[0.15em] mb-4 hidden lg:block">Navigate</h3>
                                <nav className="space-y-1">
                                    {chapters.map((ch) => (
                                        <a key={ch.id} href={`#${ch.id}`} onClick={() => setMobileTocOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-body hover:text-heading hover:bg-bg-alt transition-colors group">
                                            <ch.icon size={15} className="text-accent opacity-70 group-hover:opacity-100" />
                                            <span>{ch.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    <article className="flex-1 space-y-8">

                        {/* CHAPTER 1 */}
                        <ScrollReveal>
                            <section id="ch1" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">01</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Job Descriptions</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Introduction</h3>
                                        <p>This document has been prepared for the faculty members and staff of Punjab Tianjin University of Technology Lahore to apprise them about the academic, fee and discipline regulations of the university. It is important that all faculty members and staff are aware of these regulations and claim of ignorance will not be accepted as an excuse in matters of conflict.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Important Information and Definitions</h3>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            <li>Masculine gender used in the following regulations implies male students as well as female students.</li>
                                            <li>The term faculty member or instructor or teacher when mentioned in these regulations would refer to the concerned faculty member or instructor or teacher, if not mentioned as such.</li>
                                            <li>The medium of instructions and examinations shall be English for all subjects except Islamic Studies and Pakistan Studies for which the medium of instructions and examinations may be either Urdu or English.</li>
                                            <li>The term &ldquo;Academic Year&rdquo; refers to the period of study at the University spread over one calendar year period. Academic year is further divided into semesters.</li>
                                            <li>The term &ldquo;Contact Hour&rdquo; refers to a 60 minutes period of contact with the students.</li>
                                            <li>The term &ldquo;Credit Hour (CH)&rdquo; refers to a unit of academic credit during a semester. Each credit hour is related to a one or more &ldquo;Contact hours per week&rdquo; according to subject type and the semester in which it is offered as defined in these regulations.</li>
                                            <li>The term &ldquo;Pre-requisites&rdquo; refers to subjects that must be successfully completed prior to registration in a subject requiring these pre-requisites.</li>
                                            <li>The term &ldquo;Co-requisite&rdquo; refers to subjects that must be registered simultaneously if studied for the first time. During repetition, simultaneous registration of such subjects is not necessary.</li>
                                            <li>The term &ldquo;Tutor&rdquo; refers to a teacher appointed as an advisor and counselor to a group of students and the term &ldquo;Tutorial&rdquo; refers to a scheduled session with their tutor.</li>
                                        </ul>
                                    </div>

                                    {note('Special Provisions', (
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>In all cases where the regulations are silent, the decision of the Vice Chancellor shall be final.</li>
                                            <li>Interpretation of these rules and regulations by authorized officers of the University shall be final.</li>
                                            <li>The University authorities reserve the right to make any changes in the existing regulations, rules, fee structure and courses of study that may be considered necessary at any time without prior notice.</li>
                                            <li>No student is allowed to maintain simultaneous enrollment in any other program of studies in the University or any other educational institution within or outside Pakistan, unless permitted by the competent authority as an Exchange Student.</li>
                                            <li>In case a student enrolled in this University is found to be a regular student of some other University/institution whether local or foreign, his admission in this University shall be canceled.</li>
                                            <li>Students are required to know the rules and regulations mentioned in the prospectus and notified time to time. Ignorance of rules and regulations does not absolve them of their responsibilities and shall not be treated as an excuse.</li>
                                        </ul>
                                    ))}

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Functions and Duties of Faculty Members</h3>
                                        <ul className="list-disc pl-5 space-y-2 mt-2">
                                            <li>Unless in any case it is otherwise distinctly provided, the whole time of all University employees is at the disposal of the University and they may be employed in any manner required by proper authority without claim for additional remuneration.</li>
                                            <li>Faculty members are required to be available on-campus under fixed timings as they are full-time employees.</li>
                                            <li>Faculty members are required to be punctual (i) in observing classroom timing; (ii) in examination schedule, and (iii) in submitting grades.</li>
                                            <li>When office hours are canceled by a faculty member for any reason (including university business) the department&apos;s secretary must be informed and a notice must be posted on the faculty member&apos;s office door. These hours may be rescheduled during that week, if possible.</li>
                                            <li>Absence from class without any valid reason or prior notice may result in disciplinary proceedings. Such proceedings, if absolutely required, will be initiated by the concerned chairperson.</li>
                                            <li>The teaching load is allocated by the department&apos;s Chairperson keeping in view research and other commitments of the faculty member.</li>
                                            <li>The normal teaching load per academic year may vary from 16 to 24 semester credit hours distributed over the fall, spring and summer semesters. Each theory credit hour is equated to one class contact hour per week and each laboratory (practical) credit hour is equated to 2 to three contact hours per week.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Ethics and Norms of Faculty Members</h3>
                                        <p className="mb-2">In pursuing his/her professional obligations the faculty member shall:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Adhere to Islamic/religious values and ethical norms.</li>
                                            <li>Safeguard and promote national interest.</li>
                                            <li>Act always in a manner that brings honor and prestige to the individual, the university and the profession.</li>
                                            <li>Justify public trust and confidence through sheer devotion to excellence and by providing quality education for all students.</li>
                                            <li>Make the teaching profession attractive by continuously updating his/her knowledge and perfecting his/her pedagogic skills.</li>
                                            <li>Safeguard and promote the interest and well-being of the students and make every effort to protect them from physical or mental harm.</li>
                                            <li>Not discriminate based on race, color, gender, national origin, political or religious beliefs, family/ social/ cultural background by excluding any student from participation in any academic/professional program or by denying any student any legitimate benefits, or by granting any undue advantage to any student.</li>
                                            <li>Be fair in the award of grades.</li>
                                            <li>Ensure academic freedom for each student.</li>
                                            <li>Not use professional relationships for personal gains, such as accepting favors or gifts from students.</li>
                                            <li>Promote mutual respect among colleagues and safeguard and promote their welfare and genuine interests.</li>
                                            <li>Maintain confidentiality of information related to students and colleagues unless disclosure of such information serves a compelling professional purpose or is required by law.</li>
                                            <li>Not make false statements in any documentation.</li>
                                            <li>Be knowledgeable of his/her administrative responsibilities and rights.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Functions and Duties of The Deans of Faculties</h3>
                                        <p className="mb-2">The Dean of the Faculty concerned shall be responsible to see that the Statutes, Regulations and Rules relating to the Faculty are duly observed and followed. Without prejudice to the above, the Dean shall have the following functions and duties:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>To co-ordinate teaching, publication and research in the departments of the Faculty;</li>
                                            <li>To frame time table for the different classes in consultation with the other Deans;</li>
                                            <li>To take disciplinary action against the students who have defaulted in the payment of their fees and other dues in time;</li>
                                            <li>To condone the delay in the payment of dues and to remit the late fee fine;</li>
                                            <li>To make proposals for improvement of facilities in each department in the faculty in consultation with the HODs/ In-charges;</li>
                                            <li>To scrutinize budget proposals of the departments and make recommendations to the Vice-Chancellor;</li>
                                            <li>To forward to the Vice-Chancellor all applications of the HODs for leave or absence;</li>
                                            <li>To sanction casual leave to the non-teaching staff attached to his office;</li>
                                            <li>To grant earned leave to the laboratory staff up to and including the rank of laboratory supervisor;</li>
                                            <li>To see that all the members of the teaching and non-teaching staff under the faculty attend to their duties in due time and for the full duration and report the matter to the Vice-Chancellor;</li>
                                            <li>To permit departments to proceed on excursion and on industrial/study tours within the country;</li>
                                            <li>To prepare annual report before and after the Academic Session of the teaching and research activities of the faculty;</li>
                                            <li>To forward applications of teaching and non-teaching staff of his faculty for study leave to the Vice-Chancellor;</li>
                                            <li>To place all proposals in respect of object and schemes of study received from the HODs before the Board of Faculty forward recommendations to the Vice-Chancellor;</li>
                                            <li>To present the Graduates of the faculty for conferment of degrees at the Convocation of the University;</li>
                                            <li>To pass orders for inter departmental transfer of the laboratory staff in consultation with the HODs under his faculty;</li>
                                            <li>To write confidential reports of the office staff;</li>
                                            <li>To see all resolutions/decisions of the Vice-Chancellor, the Academic Council and the Syndicate relating to the faculty communicated to him are given effect;</li>
                                            <li>To put up proposals regarding allocation of seats and procedure for admission to various disciplines for the consideration of the Vice Chancellor/Academic Council;</li>
                                            <li>To consider the case of migration of students from other Universities to this University and make recommendations to the Vice Chancellor;</li>
                                            <li>To provide the Vice Chancellor with adequate information on all academic and other related matters and periodically submit a progress report on teaching and research carried out by the departments within his faculty.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Functions and Duties of The HODs/ In-Charges of Teaching Departments</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>To organize teaching and research in the Department and to ensure that the Syllabi are completed in time and research is carried out in accordance with the policies laid from time to time;</li>
                                            <li>To assist the Deans in framing time table of different classes;</li>
                                            <li>To sanction casual/emergency leave to the teaching and non-teaching staff in the department;</li>
                                            <li>To scrutinize and forward to the Dean application for all kinds of leave other than casual/emergency leave from the teaching and non-teaching staff and to propose consequential arrangements;</li>
                                            <li>To prepare budget proposals and schemes of study and forward them to the Dean of the Faculty concerned;</li>
                                            <li>To arrange for visiting teachers;</li>
                                            <li>To arrange for the class test in the Department;</li>
                                            <li>To ensure that all teachers in the Department maintain a record of attendance of all students of the various classes and to supply the same to the Dean of faculty concerned;</li>
                                            <li>To see that all teaching and non-teaching staff in the department attend to their duties properly;</li>
                                            <li>To act as the Convener of the Board of Studies;</li>
                                            <li>To appoint Research Assistant on the recommendation of the Departmental Committee and the teachers utilizing the services of the research staff, provided that funds are available;</li>
                                            <li>To keep the Dean regularly informed of teaching and research and submit periodical report to him for forwarding it to the Vice Chancellor/Syndicate;</li>
                                            <li>To submit Annual Report about teaching, research, development and other academic programs, planned and executed by the Department to the Dean of faculty concerned before and after each academic session;</li>
                                            <li>To perform such other duties as may be assigned to him by the Dean or the Vice Chancellor from time to time.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 2 */}
                        <ScrollReveal>
                            <section id="ch2" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">02</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Admission Regulations</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Admission Categories</h3>
                                        <p>For the purpose of admissions, applicants are categorized based on their qualification.</p>
                                        <ul className="list-disc pl-5 space-y-1 mt-2">
                                            <li><strong>Category 1:</strong> Candidates with DAE qualification.</li>
                                            <li><strong>Category 2:</strong> Candidates with Intermediate qualification.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Seat Distribution in Each Category</h3>
                                        <p>Seats in each discipline offered by the university will be distributed as under:</p>
                                        <ul className="list-disc pl-5 space-y-1 mt-2">
                                            <li>Category 1: <strong>80%</strong> seats</li>
                                            <li>Category 2: <strong>20%</strong> seats</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Eligibility Requirements</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Category 1 applicants for Engineering Technology, Architecture Technology and Fashion Design Technology disciplines should have at least <strong>50% marks</strong> in the relevant discipline of DAE as determined by the admission committee.</li>
                                            <li>Category 2 applicants for Engineering Technology, Architecture Technology should have at least <strong>50% marks</strong> in F.Sc. (Pre-Engineering) or equivalent qualification A-Level/ICS as determined by IBCC.</li>
                                            <li>Category 2 applicants for Fashion Design Technology disciplines should have at least <strong>50% marks</strong> in Intermediate/ (any group) or equivalent as determined by IBCC.</li>
                                            <li>Applicants who earn less than 50% aggregate marks as calculated in 2.6(a) will not be eligible for admission.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Hafiz-E-Qura&apos;an Test</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Candidates who claim of being Hafiz-e-Qura&apos;an will be examined by a committee constituted for this purpose.</li>
                                            <li>The committee, after assessment, will give a score from 0 to 100 based on the level of proficiency in Hifz demonstrated by the candidate during examination.</li>
                                            <li>Decision of the committee will be final.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Admission/ Entry Test</h3>
                                        <p>An admission test will be conducted from all the candidates by the university.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Merit Aggregate Calculation and Screening Of Applicants</h3>
                                        <p className="mb-2">Aggregate marks would be calculated as under:</p>
                                        <div className="bg-bg-alt border border-border rounded-lg p-4 font-mono text-sm text-heading">
                                            [&#123;%age marks in DAE / Intermediate&#125; x 0.7] + [&#123;%age marks in Admission Test&#125; x 0.3]
                                        </div>
                                        <p className="mt-3">Aggregate of eligible Hafiz-e-Qura&apos;an applicants will be adjusted after inclusion of their earned Hifz test score as under:</p>
                                        <div className="bg-bg-alt border border-border rounded-lg p-4 font-mono text-sm text-heading mt-2">
                                            Adjusted Aggregate = Aggregate marks + (%age marks earned in Hifz test x 0.0127)
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Admission Criterion</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Separate merit lists will be prepared for Category 1 and Category 2 applicants.</li>
                                            <li>In case seats under any category remained vacant, that can be filled from other category.</li>
                                            <li>In each category admission will be purely only on merit.</li>
                                            <li>PTUT has been established primarily for Punjab domiciled candidates.</li>
                                            <li>In case the quota seats left vacant, the seats will be adjusted in open merit criterion.</li>
                                        </ul>
                                        <p className="mt-3 font-semibold text-heading">Allocation of seat in each department will be as under:</p>
                                        {table(['Category', 'Percentage'], [
                                            ['Open Merit', '90%'],
                                            ['Merged districts of FATA in KPK (One seat for each District)', '02%'],
                                            ['Baluchistan (One seat for each Civil Division)', '02%'],
                                            ['Sports based seats', '02%'],
                                            ['Minorities', '02%'],
                                            ['Disable', '02%'],
                                        ])}
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Age Limit</h3>
                                        <p>There is no age restriction for seeking admission to any degree program at the University.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Medical Fitness Requirement for Admitted Candidates</h3>
                                        <p>Selected candidates will be required to submit medical fitness certificate from the registered medical practitioner with PMDC/PMC (regulatory body as per law) as per policy of the university.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Submission of Original Documents</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students at the time of admission will submit the original documents of matriculation and DAE/intermediate in the admission office, after securing admission at PTUT.</li>
                                            <li>Admission office will verify these documents from the respective issuing authority and will be returned after verification.</li>
                                            <li>In case student needs his/her original documents, he/she has to write written application to the convener admission committee.</li>
                                            <li>In case the original documents submitted by the students are found fake, student&apos;s admission at the university shall be cancelled and legal action can be taken as per law.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Cancellation of Admission</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Admission of a candidate is liable to be cancelled if he / she is found guilty of suppression or misrepresentation of materials facts at any stage.</li>
                                            <li>The University reserves the right to reject any application for admission.</li>
                                            <li>If a student does not opt to register the courses and also does not request for the semester dropping for one semester, his/her admission shall automatically stand cancelled without any notification. However, he/she may apply to the in charge department and dean for re-admission as per prescribed criteria.</li>
                                            <li>In case a student applies for cancellation of his/her admission, the application must have been recommended by the respective chairperson/Head of Department/In charge Department. There should be no outstanding dues against him/her. He/she has to obtain clearance and return the university student card. Admission of student will be cancelled by convener admission committee after the approval of Vice Chancellor and original documents will be returned.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Student&apos;s Clearance Process</h3>
                                        <p className="mb-2">In order to obtain clearance from university, student has to complete the process of physical/online clearance on LMS from the following authorities:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Chairperson/Head of department</li>
                                            <li>Accounts Section</li>
                                            <li>In charge Student Affairs</li>
                                            <li>In charge Library</li>
                                            <li>Examination office</li>
                                            <li>Registrar Office</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Application Filling and Submission — Required Documents</h3>
                                        <p className="mb-2">Attested photocopies of the following documents are required to be submitted by all the applicants:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Diploma or certificate of all the examinations on the basis of which admission is sought, that is Matric/SSC or equivalent, Diploma of Associate Engineer, or F.Sc or H.S.S.C, or equivalent.</li>
                                            <li>Detailed Marks Certificates</li>
                                            <li>CNIC or B-Form issued by NADRA</li>
                                            <li>Domicile Certificate.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 3 */}
                        <ScrollReveal>
                            <section id="ch3" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">03</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Fee Regulations</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.1 Payment of Dues</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students shall pay prescribed six months fees irrespective of the number of credit hours registered during a semester.</li>
                                            <li>No relaxation in prescribed fees would be given to students deciding not to register in a semester due to any reason.</li>
                                            <li>Registration in subjects would be suspended if fee is not deposited within the prescribed deadline. Students having justifiable reasons for seeking relaxation in fee payment schedule must apply to the Vice Chancellor through the Dean and Chairman/In charge of department for this purpose.</li>
                                            <li>Neither tuition fee nor other charges will be charged from a student who does not register for any credit hours during a semester.</li>
                                            <li>The hostel charges are payable for the period of occupation, a part of term/semester being counted as full term/ semester. Rent and electricity charges for fans are payable for six months. Electricity charges for room heaters are payable for the winter season for four months.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.2 Periods of Fees and Other Charges</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The fees and other charges are categorized as: One-time payments at the time of admission; Annual recurring fees; Monthly recurring fees.</li>
                                            <li>During each year of a student&apos;s stay at the University, all recurring fees (annual or monthly) are calculated based on twelve months period and are charged in two installments payable at beginning of Fall and Spring semesters.</li>
                                            <li>A prescribed fee per credit hour will be charged from students registering during summer semester.</li>
                                            <li>A minimum of 48 months or 60 months recurring fees are admissible to students graduating respectively from a four years degree program or a five years degree program.</li>
                                            <li>Students registering in semesters beyond the minimum prescribed study period shall pay a prescribed admission retention fee at the beginning of Fall and Spring Semesters until submission of their degree requirements completion form (Form 2).</li>
                                            <li>A prescribed fee of Rs. 2000/- per credit hour will be charged from students registering during summer semester or any other additional course in a regular semester.</li>
                                            <li>Late fee Rs. 50/- will be charged per day after the deadline of fee submission.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.3 Fee Schedule for Deferred Semester</h3>
                                        <p>Neither tuition fee nor any other charges will be charged from students who have deferred their studies. However, an admission retention charge of <strong>Rs. 5,000/= per semester</strong> is applicable during this period.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.4 Refund of Securities</h3>
                                        <p>The University security and library security are refunded when a student leaves the University after completion of his degree after deduction of outstanding dues of the University or the library.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.5 Refund on Admission Cancellation</h3>
                                        <p className="font-semibold text-heading mb-2">3.5.1 Admission Cancellation by Freshly Admitted Students</p>
                                        <p className="mb-2">All dues paid by the student are refundable excluding the Admission Fee as per the following schedule:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Full (100%) fee refund if admission cancelled up to 7th day.</li>
                                            <li>Half (50%) fee refund if admission cancelled from 7th to 15th day.</li>
                                            <li>No fee refund if admission cancelled from 16th day onward.</li>
                                        </ul>
                                        <p className="mt-2">The count of days mentioned in the schedule for determining refund amount, would start from the date falling last from the date of convening of classes.</p>
                                        <p className="font-semibold text-heading mt-4 mb-2">3.5.2 Admission Cancellation by Other Students</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>The University security, library security, hostel security and mess securities are refunded when a student cancels his admission before completion of his degree.</li>
                                            <li>All other dues and fees deposited shall not be refunded including migration fee charged from migrated students.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">3.6 Fee Structure</h3>
                                        {table(['Sr. No.', 'Fee Structure', 'Local (Rs.)'], [
                                            ['1', 'Admission fee payable in first year (one time)', '1,000'],
                                            ['2', 'University Registration Fee (one time)', '500'],
                                            ['3', 'University Security (refundable)', '5,000'],
                                            ['4', 'Library Security (one time)', '500'],
                                            ['5', 'Verification fee', '2,000'],
                                            ['6', 'Deferment of studies/freezing (For one semester)', '5,000'],
                                            ['7', 'Re-admission Fee', '5,000'],
                                            ['8', 'Per credit hour fee for registering during summer semester or any other additional course in a regular semester', '2,000'],
                                            ['9', 'Semester Tuition Fee (recurring)', '21,000'],
                                            ['10', 'Late fee per day after the deadline of fee submission', '50'],
                                            ['11', 'Summer School Registration Fee', '200/paper'],
                                            ['12', 'Detail Marks Certificate', '500'],
                                            ['13', 'Merit Certificate', '200'],
                                            ['14', 'Rechecking of Answer Book', '300'],
                                            ['15', 'Other Certificates/Duplicate certificate', '200'],
                                            ['16', 'Provisional Certificate', '200'],
                                            ['17', 'Degree Fee', '1,500'],
                                            ['18', 'Verification Fee (degree/detail marks certificate)', '500'],
                                            ['19', 'Migration Fee', '15,000'],
                                        ])}
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 4 */}
                        <ScrollReveal>
                            <section id="ch4" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">04</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Semester Regulations</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Introduction</h3>
                                        <p className="mb-2">The following regulations govern the system of teaching and examination for the Undergraduate degrees awarded by Punjab Tianjin University of Technology (PTUT) Lahore.</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>System of Teaching and Examination at Punjab Tianjin University of Technology Lahore shall be based on Semester System.</li>
                                            <li>The Undergraduate degrees offered at the University are classified as: Bachelor of Science (B.Sc.) in Engineering Technology disciplines; Bachelor of Architecture Technology / B.Arch.; Bachelor of Fashion Design Technology; Bachelor of Science (BS) in Information, Management and Technology disciplines.</li>
                                            <li>Masculine gender used in the following regulations implies male students as well as female students.</li>
                                            <li>The medium of instructions and examinations shall be English, Urdu or Chinese depending upon the type of subject.</li>
                                            <li>The term &ldquo;Academic Year&rdquo; refers to the period of study at the University spread over one calendar year period. Academic year is further divided into semesters.</li>
                                            <li>The term &ldquo;Contact Hour&rdquo; refers to a 60 minutes period of contact with the students.</li>
                                            <li>The term &ldquo;Credit Hour (CH)&rdquo; refers to a unit of academic credit during a semester.</li>
                                            <li>The term &ldquo;Pre-requisites&rdquo; refers to subjects that must be successfully completed prior to registration in a subject requiring these pre-requisites.</li>
                                            <li>The term &ldquo;Tutor&rdquo; refers to a teacher appointed as an advisor and counselor to a group of students and the term &ldquo;Tutorial&rdquo; refers to a scheduled session with their tutor.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Degree Duration</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The minimum duration of the bachelor degree programs shall not be less than four academic years and the maximum duration will be six academic years. Extension beyond minimum duration will be required form the competent authority.</li>
                                            <li>The minimum duration of B.Arch. degree program shall not be less than five academic years and maximum duration will be seven academic years. Extension beyond minimum duration will be required form the competent authority.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Scheme of Studies for Undergraduate Engineering Technology Degree Programs</h3>
                                        <div className="grid md:grid-cols-2 gap-4 my-3">
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Total Credit Hours (Minimum)</p>
                                                <p className="text-2xl font-bold text-heading">130</p>
                                            </div>
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Total Credit Hours (Maximum)</p>
                                                <p className="text-2xl font-bold text-heading">140</p>
                                            </div>
                                        </div>
                                        <p className="mb-2">The 130-140 credit hours shall be made up as follows:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>A. Core Technology subjects:</strong> 70% credit hours</li>
                                            <li><strong>B. Related subjects:</strong> 30% credit hours</li>
                                        </ul>
                                        {table(['Parameter', 'Detail'], [
                                            ['Course Duration', 'Minimum of 8 semesters (4 years). Maximum time limit of 6 years, further extendable for one year with approval of Statutory Bodies. In case of 5 years degree program minimum credit hours will be 160 and maximum 180.'],
                                            ['Summer Session', 'For deficiency/failure/repetition of maximum 2 courses of 03 credits each'],
                                            ['Course Load per Semester', '15-18 Credit Hours for Regular Full-Time Students'],
                                        ])}
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Extension Beyond Maximum Duration</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The Vice Chancellor may grant extensions up to a maximum period of one year beyond the maximum duration for completing requirements for the award of degree.</li>
                                            <li>Extension beyond one year shall be granted by the academic council/ASRB for undergraduate/graduate programs respectively.</li>
                                            <li>In the absence of Dean, the Vice Chancellor will accord the approval.</li>
                                            <li>A student would be separated from the University if he requires extension beyond one year.</li>
                                            <li>Separated students can apply to the Vice Chancellor for readmission. If their application is accepted, credits from the previous registration will be transferred in accordance with the prescribed rule. They will be assigned to a junior Entry Session for computing their maximum degree duration and they will be allotted a new registration number.</li>
                                            <li>No readmission will be allowed if the student is separated again from the University.</li>
                                            <li>Fee and other dues of the university shall be applicable for the extended period of study.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">UG Students Classification on the Basis of Credit Hours</h3>
                                        <p className="mb-2 font-semibold text-heading">On the basis of credit hours registered during a semester:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-4">
                                            <li>Students registering in at least 12 credit hours during fall and spring semesters and 6 credit hours during summer semester within the minimum duration of their respective degree program shall be called <strong>&ldquo;Regular&rdquo;</strong>.</li>
                                            <li>Students shall be classified as <strong>&ldquo;Casual&rdquo;</strong> students if they register in less than 12 credit hours during fall and spring semesters and less than 6 credit hours during summer semester; Or they register in subjects after completion of their minimum degree duration period.</li>
                                        </ul>
                                        <p className="mb-2 font-semibold text-heading">On the basis of credit hours completed:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>&ldquo;First Year&rdquo;</strong> students if they have successfully completed less than or up to 32 credit hours of prescribed syllabus;</li>
                                            <li><strong>&ldquo;Second Year&rdquo;</strong> students if they have successfully completed more than 32 credit hours but up to 68 credit hours of prescribed syllabus;</li>
                                            <li><strong>&ldquo;Third Year&rdquo;</strong> students if they have successfully completed more than 68 credit hours but up to 104 credit hours of prescribed syllabus;</li>
                                            <li><strong>&ldquo;Fourth Year&rdquo;</strong> students, in case of five years degree program only, if they have successfully completed more than 104 credit hours but up to 136 credit hours of prescribed syllabus;</li>
                                            <li><strong>&ldquo;Final Year&rdquo;</strong> students if they have successfully completed more than 104 credit hours, in case of a four degree program and more than 136 credit hours, in case of a five years degree program, of prescribed syllabus.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Credit Hours for Undergraduate Degrees</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>A credit hour means teaching/earning a theory course for one hour each week throughout the semester.</li>
                                            <li>One credit hour in laboratory or practical work/project would require lab contact of three hours per week throughout the semester.</li>
                                            <li>The credit hours are denoted by two digits within brackets with a hyphen/plus in between. The first digit represents the theory part while the second (right side) digit represents the practical.</li>
                                            <li>Thus (3+0) means three credit hours of theory, while (3+1) means a total of four credit hours, of which three are of theory while one credit hour is for laboratory/studio work/field work/practical work supervised and graded by the faculty.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Credit Hours Requirements</h3>
                                        <p>The credit hours required for the award of degree may range from a minimum of 130 to a maximum of 140 for B.Sc. and bachelor degree programs (four years) and from a minimum of 160 to a maximum of 180 for degree programs with minimum duration of five academic years subject to meeting the requirements of the respective Accreditation Councils to meet the International Standards for Credit Hours required.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Course Load for Fall and Spring Semesters</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>An undergraduate program of instruction generally includes a 15-18 credit hours course load including exams in a regular semester. The required course load for a full time undergraduate program is minimum of 15 credit hours per semester.</li>
                                            <li>In case any student wishes to enroll for one or more courses beyond 18 cr. Hours s/he may be allowed by the Dean/Vice Chancellor with the advice of advisor/in charge department.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Semesters Nomenclature, Duration and Registration Matters</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>There shall be two regular semesters, namely Fall and Spring semesters, and an optional summer semester during each academic year.</li>
                                            <li>Fall and spring semesters will be spread over 16 to 18 weeks including examinations with at least 15 study weeks during the semester. The duration of summer semester will be 9 weeks including examinations with weekly contact hours being double from those of fall and spring semesters.</li>
                                            <li>The maximum and minimum permissible number of students to be allowed registration in a subject section will be decided by the concerned Board of Studies.</li>
                                            <li>Students may consult their tutors for registration guidelines.</li>
                                            <li>First year students may be allowed to register in at most 18 credit hours during fall and spring semesters.</li>
                                            <li>Students of second year and third year may be allowed to register in at most 20 credit hours during fall and spring semesters such that, because of repetition of subjects or fulfillment of graduation requirements, may apply to the Dean for up to two credit hour relaxation in the 20 credit hours registration limit.</li>
                                            <li>A student can register at most 8 credit hours during summer semester.</li>
                                            <li>Registration will only be allowed in a subject if the prerequisites, if any, of this subject have been completed successfully.</li>
                                            <li>Registration in a subject section will be closed if the maximum permitted numbers of students have registered in it.</li>
                                            <li>A subject section will be closed if less than the minimum numbers of students register in that section.</li>
                                            <li>During summer semester, selected subjects may be offered in accordance with departmental policy for summer semester.</li>
                                            <li>A PG student, regular or casual, may be allowed to register in maximum 12 credit hours during each semester.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Curriculum and Classification of Subjects</h3>
                                        <p className="mb-2">Subjects are classified as:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Type-A</strong> wherein the primary mode of teaching shall be lectures given by teachers supplemented by home assignments.</li>
                                            <li><strong>Type-B</strong> wherein the primary mode of teaching shall be experiments, studio laboratory, designs, drawings, assignments and projects conducted/executed by students as specified in the syllabus.</li>
                                            <li><strong>Type-AB</strong> which include both Type-A and Type-B parts.</li>
                                            <li><strong>Type-C</strong> wherein students engage in design and development of a project under direct supervision of teachers in a laboratory / studio / workshop / industry, spread over one or two regular semesters in an academic year.</li>
                                            <li>Thesis / Industrial project is required towards completion of post graduate degree.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Evaluation and Contact Hours</h3>
                                        <p className="font-semibold text-heading mb-1">Type-A Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>In Type-A subjects, there shall be a mid-semester examination of at least one hour duration and a comprehensive final examination of at least one and a half hour duration. These examinations shall carry 30 and 40 percent weight, respectively. The teacher shall schedule additional assessment instruments such as quizzes, assignments, presentations, seminars, group discussions, field study reports, etc. as specified in the syllabus or as determined by the teacher. These assessment instruments shall carry the remaining 30% weight of the subject.</li>
                                            <li>There shall be one contact hour per week during Fall and Spring semesters and two contact hours per week during Summer semester for each credit hour assigned to Type-A subjects.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">Type-B Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>In Type-B subjects, each Experiment, Studio work, Jury Presentation, Design, Drawing, Project or Assignment shall be considered as an independent assessment instrument. Cumulative performance in all independent assessment instruments shall form the basis for evaluating a student.</li>
                                            <li>There shall be two to three contact hours per week during Fall and Spring semesters and four to six contact hours per week during Summer semester for each credit hour assigned to Type-B subjects.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">Type-AB Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>Type-A part of the Type-AB subject will be assessed independently and Type-B part will be assessed independently, according to the respective procedure.</li>
                                            <li>Combined assessment will be computed from the weighted average of the two assessments according to the credit hours assigned to each part.</li>
                                            <li>Contact hours per week will be in accordance with the credit hours assigned to each part.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">Type-C Subjects and Thesis (For PG Only)</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>In Type-C subjects, each exercise, project or assignment shall be assessed for process during its life time (Continuous Assessment) while the end product shall be assessed, right after its submission, through Viva-Voce / Jury examination (Terminal Assessment).</li>
                                            <li>Continuous Assessment and Terminal Assessment of Type-C subjects may carry 60 and 40 percent weight, respectively.</li>
                                            <li>External Examiners/ Jurors shall be involved in the assessment of all Type-C subjects.</li>
                                            <li>There shall be two to four contact hours per week during Fall and Spring semesters for each credit hour assigned to Type-C subjects.</li>
                                            <li>Thesis sub-category evaluation process would be followed as prescribed in relevant regulations.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Academic Calendar</h3>
                                        <p className="mb-2">Director Academics/QEC will publish an Undergraduate and Graduate catalogues including schedule of its whole academic year. The calendar will include the following information:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Semester starting date.</li>
                                            <li>Holidays during the semester.</li>
                                            <li>Semester termination date.</li>
                                            <li>Mid-Term exam week</li>
                                            <li>Final exam week.</li>
                                            <li>Result notification and transcript issues dates. Each transcript will have course grades, semester Grade point average (GPA) and cumulative GPA (CGPA).</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Enrollment/Registration in Courses</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>In charge/chairperson department will assign an advisor to each student on admission. The advisor and the student together will develop a flexible comprehensive plan of study that will be implemented in each semester.</li>
                                            <li>Students are required to choose the courses they wish to enroll in, prior to the start of a semester with the advice of an advisor.</li>
                                            <li>Students may be allowed to withdraw from a course during 4-6 week of the semester. In such a case the transcript shall record that the student enrolled in the course and withdrew. Consequently, grade W will be awarded to the student which shall have no impact on the calculation of the CGPA of the student.</li>
                                            <li>In charge department /chairperson will provide the list of enrolled/active student to the examination office/office of the controller of examinations after sixth week of the start of semester.</li>
                                            <li>A student withdrawing after the 6th week shall be automatically awarded &ldquo;F&rdquo; grade which shall count in the GPA and stay on the transcript.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Cancellation of Enrollment</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>If a student fails to attend any lecture or remain absent without any leave application, during the first four weeks after the commencement of the semester as per announced schedule, his/her admission shall stand cancelled automatically without any notification.</li>
                                            <li>Student has to pay all his dues before he/she applies for cancellation of admission.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Award of Letter Grades</h3>
                                        <p className="mb-2">The subject teacher, having interacted with the students, taught them and having assessed them over the semester, shall award letter grades to the students. Letter grades will be awarded on an absolute scale.</p>
                                        <p className="font-semibold text-heading mb-2">Table-I: Letter Grades &amp; Corresponding Grade Points</p>
                                        <div className="overflow-x-auto my-4 rounded-lg border border-border">
                                            <table className="w-full text-sm text-center">
                                                <thead className="bg-navy text-white">
                                                    <tr>
                                                        {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F', 'W', 'I'].map(g => <th key={g} className="px-3 py-2 font-semibold">{g}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-surface">
                                                        {['4.0', '3.7', '3.3', '3.0', '2.7', '2.3', '2.0', '1.7', '1.0', '0', '–', '–'].map((gp, i) => <td key={i} className="px-3 py-2 text-body border-b border-border">{gp}</td>)}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="font-semibold text-heading mb-2">Table-II: Letter Grades Thresholds in Percent for Absolute Grading</p>
                                        <div className="overflow-x-auto my-4 rounded-lg border border-border">
                                            <table className="w-full text-sm text-center">
                                                <thead className="bg-navy text-white">
                                                    <tr>
                                                        {['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F', 'W', 'I'].map(g => <th key={g} className="px-3 py-2 font-semibold">{g}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-surface">
                                                        {['≥ 90', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '<50', '', ''].map((t, i) => <td key={i} className="px-3 py-2 text-body border-b border-border">{t}</td>)}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Result Matters</h3>
                                        <p className="mb-2 font-semibold text-heading">Result Computation Method</p>
                                        <p className="mb-2">The Grade Point Average (GPA) and Cumulative Grade point Average (CGPA) shall be computed according to the following formula:</p>
                                        <div className="bg-bg-alt border border-border rounded-lg p-4 font-mono text-sm text-heading mb-3">
                                            GPA = Σ(Credit Hours x Grade Points) / Σ(Credit Hours)
                                        </div>
                                        <p>For computation of GPA n is the number of subjects in the semester for which GPA is computed. For computation of CGPA n is the number of total subjects covered in all semesters up to the semester for which CGPA is to be computed.</p>
                                        <p className="mt-2">Grade points in each subject, Semester GPA and CGPA of each student shall be computed and notified by the Controller of Examinations at the end of each semester.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">CGPA Required for the Completion of Undergraduate Degree</h3>
                                        <p>For completion of the degree, the minimum qualifying CGPAs for BS is <strong>2.00</strong>. In case a student secures less than 2.00 CGPA (minimum qualifying CGPA) at the end of final Semester, s/he may be allowed to get re-admission in one or more courses, in which his/her Grade is below C, along with the forthcoming semester, provided that s/he is not debarred under the CGPA Improvement Regulation and time duration specified for the program.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Award of &ldquo;W&rdquo;, &ldquo;WF&rdquo;, &ldquo;I&rdquo; And &ldquo;IP&rdquo; Grades</h3>
                                        <p className="font-semibold text-heading mb-1">Withdrawal (&ldquo;W&rdquo; Grade)</p>
                                        <p className="mb-3">A student may be allowed to withdraw from a subject in whom he is registered. Applications (Form 1) to withdraw from a subject shall be entertained latest up to the 6th study week during Fall and Spring semesters and 3rd study week during Summer semester. Withdrawn subjects shall appear in the transcript with a letter grade &ldquo;W&rdquo;, and shall not be used in computation of GPA.</p>
                                        <p className="font-semibold text-heading mb-1">Forced Withdrawal (&ldquo;WF&rdquo; Grade)</p>
                                        <p className="mb-3">A student registered in a subject may not be permitted to continue due to shortage of attendance or other disciplinary action. Such students shall be awarded a &ldquo;WF&rdquo; (Forced Withdrawal) grade. It shall appear in the transcript as such, and shall not be used in computation of GPA.</p>
                                        <p className="font-semibold text-heading mb-1">Incomplete (&ldquo;I&rdquo; Grade)</p>
                                        <p className="mb-3">A student, who because of illness or any other acceptable reason fails to complete the required instruments in any subject may be awarded an &ldquo;I&rdquo; grade by the chairperson/HOD/In charge of the department after recommendations of the subject teacher with the approval of Dean as an interim grade. A student may be allowed &ldquo;I&rdquo; grade in maximum of 3 subjects in one semester. After final result notification, if the student fails to complete the unfinished portion within next semester; his &ldquo;I&rdquo; grade would be converted to &ldquo;F&rdquo; grade by the Controller of Examinations.</p>
                                        <p className="font-semibold text-heading mb-1">In Progress &ldquo;IP&rdquo; Grade and PG Thesis Grades</p>
                                        <p>Type &ldquo;C&rdquo; subjects and PG thesis sub-category spread over more than one semester may be graded as &ldquo;IP&rdquo; until completion of these subjects. This grade shall be recorded in the transcript and will not be treated as &ldquo;F&rdquo; grade. &ldquo;IP&rdquo; credits will be counted towards degree credit requirements, but these credits will not be used in computation of GPA/CGPA.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Repetition of Subjects</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students are permitted to repeat subjects in which they have earned a &rdquo;C-&ldquo;, &ldquo;D&rdquo; or &ldquo;F&rdquo; grade in a semester while remaining within their maximum credit hours registration limit.</li>
                                            <li>In case of repetition of a subject, the new grade earned shall replace the previous grade in computation of CGPA, whether high or low.</li>
                                            <li>Repeated subjects are shown with a (R) as suffix to the grade earned.</li>
                                            <li>Separate repetition of Type B part or Type A part of a subject, which is combination of Type A and Type B, is permitted.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Academic Probation and Separation</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>A student will be placed on <strong>Warning</strong> if his GPA falls below 2.0 in any semester with his CGPA remaining greater than 2.0.</li>
                                            <li>A student will be placed on <strong>Probation</strong> if his CGPA falls below 2.0 after any semester.</li>
                                            <li>A student will be <strong>separated</strong> from the University if he remains on probation for two consecutive semesters.</li>
                                            <li>Separated students can apply to the Vice Chancellor for re-admission. If their application is accepted, the concerned department will transfer subjects from the previous registration in accordance with the prescribed rule and assign them to an Entry Session for computing their maximum degree duration. They will be allotted new entry session as per the recommendation of the department and new registration number.</li>
                                            <li>A re-admitted student will not be granted second re-admission if he is separated again from the University.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Award of Degree and Merit Position</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students, who are eligible for the award of degree, are required to submit a Degree Requirements Completion Form (Form 2) to their respective Chairperson for onward submission to the Controller of Examinations.</li>
                                            <li>Students shall qualify for the award of undergraduate degree if they earn a minimum CGPA of 2.0 and they satisfy the conditions: Have no compulsory outstanding subject with &ldquo;W&rdquo;, &ldquo;WF&rdquo;, &ldquo;I&rdquo; and &ldquo;F&rdquo; grades; Have completed the prescribed number of credit hours.</li>
                                            <li>Students shall qualify for a <strong>&ldquo;Degree with Honours&rdquo;</strong> if they satisfy the following conditions: Have earned a CGPA of 3.70 or above out of a maximum of 4.00; Have not repeated a subject; Have not withdrawn from a subject with a &ldquo;W&rdquo; or &ldquo;WF&rdquo; grade; and Have not earned an &ldquo;F&rdquo; grade in any core or elective subject during the course of study.</li>
                                            <li>Medals and merit positions will only awarded to students having earned degree with honors. The awards will be based on the CGPA earned at the time of graduation. Comparison will be made within the students of same entry session graduating in the minimum permissible duration. Immigrating and students who have transferred credits will not be eligible for any medal or merit position.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Dean&apos;s Honour Roll (for UG students only)</h3>
                                        <p>At the end of each semester, there shall be a &ldquo;Dean&apos;s Honour Roll&rdquo; of students earning a Semester GPA of 3.7 and above without any &ldquo;W&rdquo; or &ldquo;WF&rdquo; or &ldquo;F&rdquo; grade while registered in at least 15 credit hours during that semester. There shall not be any Dean&apos;s Honor Roll for summer semester result.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Grievance Committee and Grade Change Request</h3>
                                        <p className="mb-2">A student has two options for redress of grievances. The first option can only be exercised during the semester and the second option after declaration of semester results.</p>
                                        <p className="font-semibold text-heading mb-1">During the semester</p>
                                        <p className="mb-2">A student may file a grievance petition with the Chairperson of his department during a semester if sufficient opportunity is not provided to him to review the assessment instruments as prescribed in the Examination regulations. The Chairperson will form a 3 member departmental Committee headed by a senior faculty member to redress the grievance. It will be mandatory on the Committee to hear both sides (student and the teacher), and recommend corrective action within 5 days after filing of the grievance. The recommendations of the Committee will be binding on the teacher as well as the student.</p>
                                        <p className="font-semibold text-heading mb-1">After Declaration of Semester Result</p>
                                        <p>A student may submit a Grade Change Request (Form 3) to the Chairperson&apos;s Office stating the specific reason for change in grade. Grade Change requests must be submitted not later than one week after the first grade was posted or within the first week of the following semester, whichever is later. The request will be routed to the concerned faculty member. Normally, the only person who can change a grade is the faculty member who gave the grade; however, in case that faculty member is no longer available or cannot be reached, the department Chairperson/HOD/In charge has the authority to evaluate the situation and change a grade, if required. When a grade is to be changed, the Chairperson shall forward the case to the Dean with justification for change. The result will be modified after approval of the Dean.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Students Registration</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students may register for subjects being offered during that semester within their maximum permissible credit hours registration limit.</li>
                                            <li>The student may add or drop subjects within first two weeks of Fall and Spring semesters and within first week of Summer semester.</li>
                                            <li>A student, who is fulfilling requirements of an &ldquo;I&rdquo; grade in a semester, is not required to register in the subject in which he has been awarded an &ldquo;I&rdquo; grade.</li>
                                            <li>Students deciding not to register in a semester must inform the department of their decision. Failure to register without any prior intimation may result in separation from the University.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Deferment of Studies (Freezing)</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students enrolled in the first semester cannot apply for deferment.</li>
                                            <li>There shall be no relaxation in the maximum degree duration period for students seeking deferment.</li>
                                            <li>A student may defer studies for at most two consecutive regular semesters, for medical or other genuine reasons, with summer semester not being counted. In such cases, the student shall apply (Form 4) to the concerned, at least 15 days before the commencement of the semester for approval of deferment by the concerned Dean for the above said purpose, while LMS data will be directed to route application (Form 4).</li>
                                            <li>No freezing during semester will be allowed.</li>
                                            <li>If a student is not enrolled in any course in a semester, he/she will not be considered a regular student of university in that period. The student may then enroll in these courses in a subsequent semester; however, s/he will have to meet pre-requisites of any course taken. In addition, it is understood that the university is not required to offer all courses in each semester.</li>
                                            <li>In special hardship cases, a semester may be freezed on medical grounds with the prior permission of the Vice Chancellor on the recommendations of the committee constituted by the Vice Chancellor.</li>
                                            <li>The maximum duration of Freezing is one year; a candidate who gets a semester freeze can get readmission next year with upcoming session</li>
                                            <li>Under special *hardship circumstances freezing of first semester can be considered by the approval of Vice Chancellor.</li>
                                        </ul>
                                        <p className="mt-3 font-semibold text-heading">Iddat</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Maternity/Delivery</li>
                                            <li>Death in the immediate family</li>
                                            <li>Any other subject to acceptance on justified rationale</li>
                                        </ul>
                                        <p className="mt-3">Note: Freezing of Semester will only be allowed after successful completion of 1st Semester as prerequisite as the case may be for other semester&apos;s predecessor to the freezing Semester</p>
                                        <p className="mt-3">A student has to generate application from his/her LMS account or submit a written application, for approval of deferment by the concerned dean through chairperson/HOD of the department. Neither tuition fee nor any other charges will be charged from students who have deferred their studies. However, an admission retention fee of Rs 5000/- per semester is applicable during this period.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Medical Certificate</h3>
                                        <p>Medical certificate from a registered medical practitioner is acceptable in the University.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Attendance Requirements</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students failing to maintain a minimum attendance of 75% in a subject during a semester shall be awarded a &ldquo;WF&rdquo; grade. Chairperson in consultation with the respective Dean shall review cases of students seeking relaxation of up to 10% in attendance requirement. The relaxation shall be allowed after approval by the Dean. Any relaxation in excess of 10% shall be forwarded to the Vice Chancellor through the respective Dean for final decision.</li>
                                            <li>Leaves availed by a student after approval of the Chairperson will not be counted towards attendance;</li>
                                            <li>Students eligible for the award of &ldquo;I&rdquo; grade will be awarded such a grade only if their attendance is at least 50%</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">Industrial Training</h3>
                                        <p>Industrial Training refers to students&apos; work experience in an engineering practice environment to familiarize themselves with professional engineering practices prior to graduation as BSc Engineering Technologist. The training curriculum consists of 32 weeks of continuous industrial/field training @ 8 hours working / day and 5 working days a week. BSc Engineering Technology Student shall undergo this Industrial Training during the 7th and 8th semester after he/ she has passed all subjects up to 6th semester. This Training covers a range of activities, such as design implementation, production processes, laboratory, on-site field works and maintenance. It also serves as a mechanism to integrate engineering practices and the curriculum to achieve the overall Program Outcomes and Graduate technologists attributes. Whereas, it provides exposure to engineering processes at a practical level; helps developing professional skills required by an undergraduate technologist. It also offers opportunity to the prospective employer to assess potential of the probable future employee.</p>
                                        <p className="mt-3 font-semibold text-heading">Credit Hour</p>
                                        <p>The term &ldquo;Credit Hour (Cr.Hr)&rdquo; refers to a unit of academic credit during a semester. Each credit hour defined as &ldquo;one contact hour per week&rdquo; for the theory class and &ldquo;3 contact hours per week&rdquo; for the laboratory work.</p>
                                        <p className="mt-3 font-semibold text-heading">Contact Hours</p>
                                        <p>(Theory / Lecture): One (1) contact hour per week for each credit hour of Theory/Lecture. Contact Hours (Practical): Three (3) contact hours per week for each credit hour of laboratory work.</p>
                                        <p className="mt-3 font-semibold text-heading">Objectives</p>
                                        <p>Through the Industrial Training, students will be able:-</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>To apply engineering knowledge learned in classroom environment in real industrial situations;</li>
                                            <li>To expose to professional engineering practices in the industries.</li>
                                            <li>To understand the role and responsibilities and code of ethics that BSc Engineering Technologists should uphold.</li>
                                            <li>To develop awareness about general workplace behaviors and build interpersonal skills.</li>
                                            <li>To prepare professional work records and reports.</li>
                                            <li>To build rapport and network with probable future employers to increase employability.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">UG Students Changing Discipline after Admission</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>A student, after first year of study at the University, may opt for change in discipline. The minimum admission merit of the discipline, being opted for, must be equal or lower than the merit of the opting student at the time of his admission.</li>
                                            <li>The student opting to change his discipline after first year must apply to the Vice Chancellor through his Chairman and the Dean. Acceptance shall depend on the availability of seats in the opted discipline.</li>
                                            <li>On acceptance of his request, the student shall start afresh with credit being given for any University core subjects studied in the first year in the original discipline. He will be issued new registration number and his maximum permissible duration count will start afresh.</li>
                                            <li>Students cannot opt for change in discipline after their second year at the University.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 5 */}
                        <ScrollReveal>
                            <section id="ch5" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">05</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Examination Regulations</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.1 Assessment Criteria</h3>
                                        <p className="mb-2">In each semester, students may be required to appear in quizzes, tests, mid semester examination, final semester examinations, presentations (individual/group), group discussion, and submit projects/ assignments/lab reports etc. These assessment marks (to be determined by the teacher concerned) will have different weightage contributing towards the overall assessment in percent marks. This weightage may be determined on the basis of following guidelines:</p>
                                        {table(['Nature of Examination', 'Weightage'], [
                                            ['Quizzes, Assignments, Presentations, etc.', '30%'],
                                            ['Mid Semester Examinations', '30%'],
                                            ['Final Semester Examinations', '40%'],
                                        ])}
                                        <p className="mt-3">In the beginning of a semester, the Instructor of each course should hand out a syllabus providing information to students that defines attendance policy, grade distribution policy, assessment criteria, paper specification, examination dates, schedule of material to be taught, take home assignment policy, required and recommended reading materials and any other information important for the successful completion of the course and its requirements.</p>
                                        <p className="mt-3">There will be no Supplementary/Special Examination in a Semester System; if a student fails in a course, s/he is required to repeat it. An incomplete (I) grade will be awarded by the faculty only in exceptional cases beyond the control of a student such as serious accidents, family tragedy, serious health ailments, etc.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.2 Evaluation Process of Subjects</h3>
                                        <p className="font-semibold text-heading mb-1">5.2.1 Evaluation of Type-A Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>For mid-semester and final examinations of Type-A subjects, the teacher of a subject shall set the question paper of that subject, supervise its examination, mark the answer books and prepare the award list. Any teaching resource provided to assist a teacher cannot be tasked to mark mid-semester and final examinations answer books.</li>
                                            <li>Every teacher of Type-A subjects shall return the marked quizzes, assignments, etc. and mid-semester examination scripts to the students for review, and in case of presentations, etc. communicate the earned score to the student within one week of the event. Mid-semester scripts, however, would be recovered from the students and deposited with the Chairperson concerned.</li>
                                            <li>At the end of scheduled teaching period of a semester but before commencement of the final examinations, the teacher shall prepare and display the Interim Award List.</li>
                                            <li>Teachers would mark the final examination scripts, and prepare and display complete Award List, excluding letter grades, within one week after the examination of the subject.</li>
                                            <li>The students may be shown the final examination marked scripts before submission of Comprehensive Award List to the Controller of Examinations, if they so desire.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">5.2.2 Evaluation of Type-B Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>Teachers of Type-B subjects shall keep all students informed of their performance at every stage in each category of task performed. Immediately after the end of each stage / assessment event, teachers shall prepare and communicate the earned score to the student in that stage / assessment event.</li>
                                            <li>At the end of semester and before the end of examination period, teachers shall prepare and display the Interim Award List.</li>
                                            <li>After following the procedures and requirements regarding Interim Award List, the teachers shall prepare and display complete Award List, excluding letter grades, within one week after the end of scheduled teaching period.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">5.2.3 Evaluation of Type-AB Subjects</p>
                                        <p className="mb-3">Type-A part of Type-AB subject will be evaluated based on the assessment instruments stated for Type-A subject and Type-B part of the subject will be evaluated according to the procedure stated for Type-B subject.</p>
                                        <p className="font-semibold text-heading mb-1">5.2.4 Evaluation of Type-C Subjects</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Teachers of Type-C subjects shall keep all students informed of their performance at every stage in each category of task performed. Immediately after the end of each stage / assessment event, teachers shall prepare and display a list of earned score of each student in that assessment instrument.</li>
                                            <li>At the end of first of the two semesters of a Type-C subject and before the end of examination period, teachers would prepare and display an Interim Award List. This list would be similar to the Comprehensive Award List of Type-A and Type -B subjects except that letter grade assignment based upon this list will be limited to &ldquo;IP&rdquo; Grade.</li>
                                            <li>At the end of second of the two semesters of a Type-C subject and before the end of examination period, teachers shall prepare and display the Interim Award List. Content and other requirements regarding Interim Award List shall be as described in these rules.</li>
                                            <li>Within one week of the conduct of Viva-voce / Jury examination, internal and external examiners shall prepare and display complete Award List excluding the letter grades.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.3 Interim Award Lists</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Interim Award Lists would be prepared and displayed before the final examination week.</li>
                                            <li>It would show the percentage as well as weighted score of each stage / assessment instrument of that subject including the mid-semester examination in case of Type-A subjects.</li>
                                            <li>The Interim Award List will be communicated to all students via electronic means or/and displayed on the Notice Boards for at least two working days to permit students to point out any anomalies, errors, omissions, etc. in the list. The teachers shall give due consideration to any anomalies, errors, omissions, etc. in the list pointed out by any student, and may correct the list. Any further processing of the list shall be carried out only after it has been displayed on the Notice Boards for the mandatory period and decisions regarding all matters pointed out by students have been taken.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.4 Comprehensive Award List</h3>
                                        <p className="mb-2">The Comprehensive Award List:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>For Type-A subjects shall show the weighted combination of the Interim Award and Final Examination award in percentage format and Letter Grades corresponding to the comprehensive award.</li>
                                            <li>For Type-AB subjects shall show the weighted combination of the Interim Award and Final Examination award of the Type-A part in percentage format the total award of Type-B part in percentage format. Percentage marks earned in Type-A part would be multiplied with the credit hours assigned to it and percentage marks earned in Type-B part would be multiplied by credit hours assigned to it. Weighted average marks would be calculated by adding the two products and dividing the sum by total credit hours assigned to the subject. Letter Grades will be assigned to the weighted average calculated above.</li>
                                            <li>For Type-B and Type-C subjects shall show Interim award along with the assigned letter grade.</li>
                                            <li>The concerned teacher will send sealed Comprehensive Award List to the Controller with a copy to the Chairperson for record only.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.5 Delay in Submission of Results</h3>
                                        <p>After passage of six working days from the date of scheduled final examination period, Controller of Examinations will submit a report to the Vice Chancellor on the status of submitted results. The Vice Chancellor will decide on the disposal of teachers failing to submit their results within the prescribed time.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.6 Code of Conduct of Examination Under Semester System</h3>
                                        <p className="font-semibold text-heading mb-1">5.6.1 Question Papers</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-3">
                                            <li>The concerned teacher sets all question papers.</li>
                                            <li>The paper setters ensure their correctness and supervise the photocopying of the papers.</li>
                                            <li>Question papers are kept in the safe custody of the teacher till the start of examination. He shall bear legal and moral responsibility for the safe custody and secrecy of the question papers.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mb-1">5.6.2 Reference Material During Tests / Examinations</p>
                                        <p className="mb-3">Prior to quizzes, mid-semester/final examination, the subject teacher announces such books, notes or other material that can be referred to by the students during the test or examinations. All other books, notes, papers, etc., are withdrawn from the examinees.</p>
                                        <p className="font-semibold text-heading mb-1">5.6.3 Examination Schedule</p>
                                        <p className="mb-3">The Chairperson of the department publishes the mid-semester and final semester examination schedule at least two weeks before start of the examinations in accordance with the University academic calendar.</p>
                                        <p className="font-semibold text-heading mb-1">5.6.4 Conduct of Mid-Semester and Final Semester Examinations</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The Chairperson shall depute teachers or staff as Deputy Superintendent and Invigilators for the conduct of examinations. The number of invigilators will be estimated on the basis of one invigilator for every 20 students.</li>
                                            <li>The subject teacher shall be the Superintendent for the conduct of examination. The Superintendent shall ensure the following:
                                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                                    <li>That all answer books used in the examination are signed or initialed. The teacher may require the students to answer on the question paper itself. No other answer books are to be used in these cases.</li>
                                                    <li>Answer books are issued to the invigilators five minutes before the commencement of the examination and retrieved at the end of the examination.</li>
                                                    <li>Teacher concerned will collect the answer sheets from the examination hall/room immediately but not later than within one day for checking.</li>
                                                    <li>The absentee report, if any, is prepared and forwarded to the Chairperson&apos;s office at the end of each examination.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.7 Responsibilities of Invigilators</h3>
                                        <p className="mb-2">The respective Chairperson appoints the teachers or staff as invigilators. They ensure the following:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Students are identified through means such as University identification card or CNIC.</li>
                                            <li>That the students are warned against the use of unfair means and have been advised to surrender mobile phones, notes, papers or other unauthorized material before the commencement of the examination.</li>
                                            <li>That the students are not allowed to talk with or copy from other students during the examination.</li>
                                            <li>That no student is allowed to join the examination thirty minutes after its commencement.</li>
                                            <li>That no student is allowed to submit the answer sheet and leave the examination room within thirty minutes of commencement of examination. Visits to toilets are carefully monitored.</li>
                                            <li>That the question papers and answer books of a student detected using unfair means or assisting another candidate, are taken away and the matter is reported to the respective Chairperson. The superintendent records all available evidence to be used as written proof later on.</li>
                                            <li>That the students write their registration numbers, name and class on the front cover of each additional answer sheet used. If more than one answer book is used, these are stapled together.</li>
                                            <li>Students are seated in the examination room according to the seating plan.</li>
                                            <li>All answer books used in the examination are initialed by the invigilator. No other answer books are to be used.</li>
                                            <li>Once assigned, examination duty is compulsory, in case of emergency alternate arrangement is to be made by an invigilator.</li>
                                            <li>Faculty member who want to take leave during examinations, need to get the approval from the competent authority.</li>
                                            <li>Report within time to respective department coordinator/HOD, collect answer sheets, candidate&apos;s attendance sheet and reach to respective examination room before 15 minutes of the examination schedule time.</li>
                                            <li>Question papers will be made available by the respective question paper setter / faculty in each examination hall before 10 minutes of the examination time schedule.</li>
                                            <li>Use of mobile phone is prohibited in the examination hall.</li>
                                            <li>Distribute the answer books to the students 10 minutes before the start of the examination and ask them to fill all the details in the answer book.</li>
                                            <li>Distribute the question paper to the students, 5 minutes before the start of examination.</li>
                                            <li>Take the signature of the students on the attendance sheet and maintain attendance record of the examination hall.</li>
                                            <li>Watch the students continuously and should be vigilant.</li>
                                            <li>Move in the examination hall to prevent indiscipline / copying.</li>
                                            <li>Should not leave examination hall during examination period. In case of urgency, may be allowed for maximum 15 minutes with permission from room-in-charge.</li>
                                            <li>Other invigilators / faculty are not allowed to enter into other examination halls without consent of concerned Hall/room-in-charge/superintendent.</li>
                                            <li>Distribute the supplement answer books / graph sheets (if any) to the students when requested by students.</li>
                                            <li>Ask the students to tie (if required) their supplement answer books before 5 minutes of the end of the examination time.</li>
                                            <li>At the end of examination, subject teacher/superintendent shall collect answer scripts from the examination room/hall.</li>
                                            <li>Two copies of question papers will be submitted to HOD/department coordinator after examination of paper is completed.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.8 Responsibilities of Superintendents</h3>
                                        <p className="mb-2">The subject teachers, acting as Superintendent(s), shall:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Supervise distribution of the question papers to the students according to the schedule published.</li>
                                            <li>Be available in the examination center during examination of their subject to clarify any query and to collect answer books after the examination from the examination room/hall. In case of multiple examination centers, they must remain available near the centers.</li>
                                            <li>Report any incidence of unfair means or disobedience or rowdyism detected in the examination center to the Controller of Examinations for processing under rules governing use of unfair means during examinations. The report must include collected evidence (if any), written and signed statement by the invigilator detecting the incidence and of the candidate(s) found involved.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.9 Disposal of Answer Scripts</h3>
                                        <p>Answer sheets of mid-semester and final examinations will be stored in the respective department for two semesters after declaration of result of a semester. The sheets would be disposed of subsequently in a suitable manner as decided by the concerned Chairperson.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.10 Transfer of Credits for Re-admitted Students</h3>
                                        <p>&ldquo;Subjects&rdquo; and &ldquo;grades of subjects&rdquo;, studied during the previous five years from the date of admission, in which they have earned a grade of &ldquo;C&rdquo; or above shall stand transferred and the students shall be placed in the semester recommended by the department. In addition, students who have availed this facility shall neither be eligible for a merit position nor degree with Honours.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.11 Final Transcript Issued by Examination Branch</h3>
                                        <p className="mb-2">Examination Branch will issue a final transcript after the student completes all the degree requirements. The recording of result on final transcript will be according to the following:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The transcript will be chronological showing all subjects registered in each semester and corresponding grades earned.</li>
                                            <li>All &ldquo;I&rdquo; grades would be replaced by the grade earned or &ldquo;F&rdquo; grade if requirements have not been completed.</li>
                                            <li>Elective subjects in which the student has earned &ldquo;F&rdquo; grades may not be counted towards computation of CGPA if alternate elective subjects have been studied in their place. This will not be automatic. The student must apply to the Controller Examination to avail this facility.</li>
                                            <li>Registrar office will issue the hope certificate, English proficiency and character certificates upon student&apos;s request.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.12 Results Declaration by Examination Branch</h3>
                                        <p>The student would be able to see his subject grades on the Examination portal as soon as the teachers have submitted these to the Controller Examinations. The status of these results would be &ldquo;Provisional&rdquo;. When all results have been received by the Branch, official results would be declared within one week following due process of scrutiny and verification. The status of these results would change to &ldquo;Confirmed&rdquo; after declaration.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.13 Departmental Assessment Committee</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>A two member departmental assessment committee shall be constituted by the each head of department to evaluate the validity of the assessment instrument (question papers) and the coverage of course contents.</li>
                                            <li>The Committee shall also check random samples of answer scripts of the semester examination for each course to evaluate the quality of assessments.</li>
                                            <li>The committee shall submit its report to the respective head of department with a copy to the respective dean.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.14 Unfair Means Committee Regulations</h3>
                                        <p>There shall be an Unfair Means Committee (UMC) to be constituted by the Vice-Chancellor, for three years to deal with the cases of alleged use of unfair means in the examination hall/ room. Any candidate found guilty of unfair means, his/her case will be submitted to Unfair Means Cases Committee.</p>
                                        <p className="font-semibold text-heading mt-3 mb-1">5.14.1 Functions of Committee</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The majority decision of the Committee shall be regarded as the verdict of the committee.</li>
                                            <li>If the committee fails to reach a decision, the matter shall be referred to the Vice Chancellor.</li>
                                            <li>The student accused of adopting unfair means in the examination hall/room shall be issued a show-cause notice to give him/her a reasonable opportunity to reply by the examination branch.</li>
                                            <li>If it is necessary, the committee may call the reporting examiner/ invigilator/teacher to its meeting for further confirmation.</li>
                                            <li>The student aggrieved of the decision of the Unfair Means Committee (UMC) may file an appeal to the Vice-Chancellor, within 05 working days of the notification of the decision of the Unfair Means Committee (UMC), who shall make the final decision. All the proceedings shall be recorded by the secretary and approved by the convener.</li>
                                            <li>The secretary shall communicate the decision of the Unfair Means Committee (UMC) to the accused student(s) and all concerned.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mt-3 mb-1">5.14.2 Procedure To Report Unfair Means (UM) Cases</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The invigilator shall report any unfair means (UM) case to the Head of the Department soon during/after the conduct of the concerned paper.</li>
                                            <li>The Head of Department shall report the unfair means (UM) cases to the examination branch which will refer the case to the UM committee, which shall decide all such cases within five working days of the end of respective mid-term/ final-term examinations.</li>
                                            <li>The unfair means (UM) cases shall be dealt with under the university rules.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mt-3 mb-1">5.14.3 Unfair Means (UM)</p>
                                        <p className="mb-2">In case a candidate, who has been allowed to an examination or is appearing or appeared in an examination, commits or attempts to commit any of the following acts:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Removes a leaf from her answer book, the answer book shall be canceled.</li>
                                            <li>Submits forged or fake documents in connection with the examination</li>
                                            <li>Commits impersonation in the examination.</li>
                                            <li>Copies from any paper book or notes.</li>
                                            <li>Mutilates the answer book.</li>
                                            <li>Possesses any kind of material, which may be helpful to her in the examination.</li>
                                            <li>Does anything that is immoral or illegal in connection with the examination and which may be helpful to him/her in the examination.</li>
                                            <li>Refuses to obey the invigilation staff or refuses to follow the instructions issued by the University in connection with the examination.</li>
                                            <li>Misbehaves or creates any kind of disturbances in or around the examination center.</li>
                                            <li>Uses abusive or obscene language on the answer script</li>
                                            <li>Possesses any kind of weapon in or around the examination center.</li>
                                            <li>Possesses any kind of electronic device which may be helpful in the examination.</li>
                                            <li>Takes answer sheet out of the examination room.</li>
                                        </ul>
                                        <p className="font-semibold text-heading mt-3 mb-1">5.14.4 Penalties</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>His/her case shall result in penalties keeping in view the nature and intensity of offence</li>
                                            <li>Heavy and light fine</li>
                                            <li>Cancellation of scholarships</li>
                                            <li>Cancellation of paper</li>
                                            <li>Expulsion forever from the University.</li>
                                            <li>Award of &ldquo;F&rdquo; grade in the subject*</li>
                                            <li>Suspension from program for one semester</li>
                                        </ul>
                                        <p className="mt-2">In case the student is suspended from the program for one semester, he/she shall register all the courses for the same semester again beside deposition of fees.</p>
                                        <p className="mt-2">Any other: Unfair Means Cases Committee will decide that the student will have to appear in summer semester/with regular semester for the cancelled paper.</p>
                                        <p className="font-semibold text-heading mt-3 mb-1">5.14.5 Appeal against the decision of the Unfair Means cases Committee</p>
                                        <p>If a student is not satisfied by the decision of the Unfair Means Cases Committee, she/he can submit his/her appeal within a week after the decision of the Committee to the Vice Chancellor. No appeal shall lie against the decision of the Syndicate.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.15 Regulations for Summer Semester</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Summer semester will be offered as an optional semester of 09 weeks duration.</li>
                                            <li>Students will be offered courses to remove deficiencies and can enroll in up to a maximum of 08 credit hours during summer.</li>
                                            <li>Moreover, a student who has either failed or has been stopped to take the examination due to shortage of class attendance or wishes to improve his/her grade is allowed to register in summer.</li>
                                            <li>The contact hours per week during the Summer Semester will be doubled to ensure that the course is completely taught in a summer session with half of the duration as compared to a regular (Fall/Spring) semester.</li>
                                            <li>The minimum strength to offer a course in Summer Semester will be five students. Fee as prescribed by the university will be charged from all such registered students.</li>
                                            <li>Teaching shall be mandatory for all offered courses in summer Semester.</li>
                                            <li>It shall be in the best interest of the students to clear their failed courses or the courses where they want to improve their grades by repeating the courses as early as possible. The University will not be responsible to offer failed or improvement courses in the final year unless and until the other conditions of Summer Semester registration are met.</li>
                                            <li>The registration, attendance, conduct of examination and result display policies etc. during the summer semester shall be same as in regular semester.</li>
                                            <li>After necessary verifications, the Chairman of the Department will notify the list of registered students within ten days of the start of regular semester and four days of the start of summer semester. He will also forward these lists to all concerned within a week.</li>
                                            <li>In case of repetition/ improvement of a course the student shall have to pay course registration and examination fee as prescribed by the university.</li>
                                            <li>It shall be notified that a student can only improve a grade lower than C (that is C-, D and F)</li>
                                            <li>In case a student repeats an elective course, which has already been taken and in case a student takes a new course in lieu of that elective course in which he failed, both the courses along with grades will be reflected on his transcript.</li>
                                            <li>The registration, attendance, conduct of examination and result display policies etc. during the summer semester shall be same as in regular semester.</li>
                                            <li>If a student registers himself for improvement of a course and completes it, the better grade obtained by him shall be considered for the computation of SGPA and CGPA.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.16 Rechecking of Examination Script</h3>
                                        <p className="mb-2">In case a student is not satisfied with the final result of any course, he/she may submit an application, within 15 days of the notification of results by the controller of the examinations, for rechecking of answer scripts of one or more courses to the concerned HOD by depositing applicable rechecking fee.</p>
                                        <p className="mb-2">Whereas the re-checking does not mean re-assessment/re-evaluation/re-marking of the answer book. Any senior faculty member from the relevant discipline will be arranged by the department chairman with the approval of dean for rechecking of answer script. Senior faculty member or rechecking committee appointed shall see that:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>There is no computational mistake in the grand total on the title page of the answer book.</li>
                                            <li>The total of various parts of a question has been correctly made at the end of each question.</li>
                                            <li>All totals have been correctly brought forward on the title page of the answer book.</li>
                                            <li>No portion of any answer has been left un-marked.</li>
                                            <li>Total marks in the answer book tally with the marks sheet.</li>
                                            <li>The hand-writing of the candidate tally in the questions/answer book.</li>
                                            <li>The candidate or anybody on his behalf has no right to see or examine the answer books for any purpose.</li>
                                            <li>The marks of a candidate could even decrease in light of (iii) above. In the event of reduction of marks the record shall be corrected accordingly and revised transcript will be issued.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.17 Damaged/Lost Answer Script</h3>
                                        <p className="mb-2">In an exceptional case where an answer script is damaged, lost or destroyed due to unavoidable circumstances, then the student may be given the following options:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Average marks shall be awarded to the student in that subject/course.</li>
                                            <li>In case of Final Examination, if the candidate so desires, s/he shall be given another chance as a special case to take the Examination in that subject/course in the next examination and no examination fee shall be charged from the student.</li>
                                            <li>In case of Internal Assessment, if the candidate so desires, s/he shall be given another chance as a special case to take the Make-up Assessment in that subject/course in the same academic session</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.18 Matters related to degree conferment</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Convocation will be conducted by the university to award the degrees to the qualified students as per criteria.</li>
                                            <li>Urgent degree can be issued as per policy of University upon the request of student.</li>
                                            <li>Degree shall only be issued to the concerned candidate in person on fulfillment of all requirement s and discharge of all liabilities evidenced by obtaining clearance as prescribed.</li>
                                            <li>In case a candidate desires that someone else be allowed to collect the degree on his behalf then a degree may be issued to a nominee carrying a legally acceptable Authority letter issued by the candidate. The nominee will have to provide a satisfactory proof of identity at the time of receiving degree.</li>
                                            <li>Duplicate Degree may be issued (with completion of all requirements) to a candidate in case the original degree is lost/damaged or in case of change in the name of candidate. The candidate has to apply to the Controller of Examinations for the issuance of duplicate degree along with the relevant documentary proof as per University rules.</li>
                                            <li>In case a candidate has lost or damaged his/her original degree or changed his/her name, a duplicate degree may be issued, after the completion of prescribed requirement. In any such case, a candidate shall have to submit a request in writing, along with the relevant documentary evidence in support of the request, to the controller of the examinations for the issuance of a duplicate degree.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">5.19 Awards and Distinctions</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Medals/Prizes/Rolls of Honor/Positions will be awarded to the students passing their internal as well as external examinations/term papers in the Semester System in the first attempt.</li>
                                            <li>In the Semester System, Letter Grades will be awarded on the basis of GP / GPA / CGPA and Positions would be given on the basis of CGPA. In case two or more students are acquiring same CGPA only then the Position would be decided on the basis of percentage among those students.</li>
                                            <li>The disciplines where number of students is less than 05, no position will be awarded in semester system.</li>
                                            <li>No medal and roll of honor will be granted to candidates who passed the examination in 2nd attempt.</li>
                                            <li>The result of the candidate is not declared within the prescribed time of the degree, then no medal will be awarded.</li>
                                            <li>No Medal/Roll of Honor will be awarded in the case of improving CGPA.</li>
                                        </ul>
                                    </div>

                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 6 */}
                        <ScrollReveal>
                            <section id="ch6" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">06</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Planning, Tutorial &amp; Orientation Rules</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">6.1 Departmental Planning for The Academic Year</h3>
                                        <p className="mb-2">Each department shall plan the subjects to be offered during the complete academic year before its commencement to ensure that the students have the necessary lead time to decide subjects for registration and make their own time table before commencement of a semester. The departmental plan will comprise of the following:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The number of sections for a subject during a semester and assignment of class rooms to each section planned.</li>
                                            <li>Maximum and minimum number of students allowed registration in a subject section.</li>
                                            <li>Subject allocation to faculty members over the academic year, that is, fall, spring and summer semesters, keeping in view their maximum permissible load. There may be cases when a faculty member is permitted to take a semester off from teaching while completing the assigned load during the remaining semesters of the academic year.</li>
                                            <li>Time table of each semester of the academic year showing the location, timings and teacher of each subject.</li>
                                            <li>The departmental plan will be submitted to the University Quality Enhancement Cell (QEC) for incorporation in the registration software at least 8 weeks before commencement of the academic year.</li>
                                            <li>The plan will be well advertised for the information of all University students.</li>
                                            <li>Any changes in the departmental plan for a semester will be communicated to the QEC at least 4 weeks before commencement of a particular semester.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">6.2 Subject/ Course Files</h3>
                                        <p className="mb-2">Maintenance of subject file is compulsory for the teacher. It will have a complete record of everything that happened during the semester. The course file will contain:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Code, Title and Description of the Subject with Weekly Teaching Schedule showing date of Mid-Term Examination. The same would also be distributed to all students before commencement of semester and will preferably be available on the web.</li>
                                            <li>Grading policy will identify each activity such as homework, Quizzes, Mid-Semester Examination, Final Examination, Term Papers. The same would also be distributed to all students before commencement of semester and will preferably be available on the web.</li>
                                            <li>Solution and copies of the best, worst and average of each Homework Assignment given to students.</li>
                                            <li>Solution and copies of the best, worst and average of each Quiz given.</li>
                                            <li>Solution and copies of the best, worst and average of the Mid-term examination given.</li>
                                            <li>Solution and copies of the best, worst and average of the final examination given.</li>
                                            <li>Grading Sheets of the Course detailing Statistical data on the grades obtained by students.</li>
                                            <li>Difficulties /Problems faced during classroom / course delivery.</li>
                                            <li>Description of Course/Learning Outcomes</li>
                                            <li>Course syllabus and changes, if any, made over at least 3 semesters</li>
                                            <li>Weekly Teaching Schedule</li>
                                            <li>Dates of Mid-Semester &amp; Final Semester Examinations</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">6.3 Tutorials and Role of Tutor</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The departmental Board of Studies will appoint a tutor for a group of students comprising of students preferably from each academic session in progress.</li>
                                            <li>There will be a one-hour formal tutorial session scheduled in the time table once each month.</li>
                                            <li>The tutor will be accessible to his advisees during scheduled office hours during a semester.</li>
                                            <li>The tutor will advise the students in matters such as registration in subjects, study difficulties, matters related to different offices of the University, scholarships and financial aid, personal counseling, leave issues, grade change requests, fees payment etc..</li>
                                            <li>Opinion of the tutor will be given due weight in assessing discipline, financial and attendance issues related to their advisees.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">6.4 Student Orientation and Guidance</h3>
                                        <p className="mb-2">The departments will arrange orientation for newly admitted students before commencement of first semester and guidance sessions for all students before commencement of each semester. The following information will be disseminated to the students during these sessions.</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Semester policies, especially warning, probation and separation policy.</li>
                                            <li>Registration guidelines, credit hour registration limits.</li>
                                            <li>Subject registration, guidelines, pre-requisites and way forward for weak students.</li>
                                            <li>Assignment of Tutors.</li>
                                            <li>Any other academic and co-curricular aspects.</li>
                                        </ul>
                                    </div>

                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CHAPTER 7 */}
                        <ScrollReveal>
                            <section id="ch7" className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="bg-navy px-6 py-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white">07</span>
                                    <h2 className="text-lg font-bold text-white tracking-tight">Post Graduate Studies</h2>
                                </div>
                                <div className="p-6 lg:p-8 space-y-6 text-[15px] leading-relaxed text-body">

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.1 Ph.D Structure</h3>
                                        <div className="grid md:grid-cols-2 gap-4 my-3">
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Total Credit Hours</p>
                                                <p className="text-lg font-bold text-heading">18 + PhD Dissertation</p>
                                                <p className="text-xs text-muted mt-1">(Course Work + Dissertation evaluated by at least two PhD experts from technologically advanced foreign countries)</p>
                                            </div>
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Semester Duration</p>
                                                <p className="text-lg font-bold text-heading">16 weeks</p>
                                                <p className="text-xs text-muted mt-1">Minimum of teaching excluding examinations</p>
                                            </div>
                                        </div>
                                        {table(['Parameter', 'Detail'], [
                                            ['Course Work Duration (Minimum)', '1-year, two semesters'],
                                            ['Course Duration (Minimum)', '3 years (including course work duration and Research Dissertation)'],
                                            ['Course Duration (Maximum)', '3-8 years (including course work duration) with approval of Director Research/Registrar/Controller of Examinations'],
                                            ['Number of Regular Semesters', '02'],
                                            ['Summer Session', 'Only for deficiency courses and Research'],
                                            ['Course Load per Semester for Regular Full-Time Students', '09-12 Credit Hours of Advanced Courses in the field and Research Methods'],
                                        ])}
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.2 MS/M.Phil Structure</h3>
                                        <div className="grid md:grid-cols-2 gap-4 my-3">
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Total Credit Hours</p>
                                                <p className="text-lg font-bold text-heading">30</p>
                                                <p className="text-xs text-muted mt-1">(24 Credit Hours Course Work + 06 Credit Hours Thesis) OR 30 Credit Hours Course Work</p>
                                            </div>
                                            <div className="bg-bg-alt rounded-lg p-4 border border-border">
                                                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Semester Duration</p>
                                                <p className="text-lg font-bold text-heading">16 weeks</p>
                                                <p className="text-xs text-muted mt-1">Minimum of teaching</p>
                                            </div>
                                        </div>
                                        {table(['Parameter', 'Detail'], [
                                            ['Number of Regular Semesters', '04'],
                                            ['Summer Session', 'Only for deficiency/failure/repetition courses (further chance through approval of statutory bodies)'],
                                            ['Course Load per Semester for Regular Full-Time Students', '09-12 Credit Hours'],
                                        ])}
                                        <p className="mt-3 text-sm text-muted">These policy guidelines will be the same for formal system, distance system and virtual system in respect to duration.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.3 MS/M.Phil Students</h3>
                                        <p>A graduate student normally enrolls for 9-12 credit hours in a regular semester. A graduate student must take at least 9 credit hours in Fall and Spring semesters to be classified as a full-time student.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.4 CGPA Required for the Completion of Graduate Degree</h3>
                                        <p>For completion of the degree, the minimum qualifying CGPA for MS/MPhil Students is <strong>2.50</strong>. In case a student secures less than 2.50 CGPA (minimum qualifying CGPA) at the end of final Semester, s/he may be allowed to get re-admission in one or more courses, in which his/her Grade is below C, along with the forthcoming semester, provided that s/he is not debarred under the CGPA Improvement Regulation and time duration specified for the program.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.5 PG Students Classification</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Postgraduate students shall be classified as &ldquo;Regular&rdquo; students during the minimum duration of their respective degree program while registering in at least 6 credit hours during fall and spring semesters and 3 credit hours during summer semester.</li>
                                            <li>Students shall be classified as &ldquo;Casual&rdquo; students if:
                                                <ul className="list-disc pl-5 mt-1">
                                                    <li>They register in less than 6 credit hours during fall and spring semesters and less than 3 credit hours during summer semester; Or;</li>
                                                    <li>They register for credit hours after completion of their minimum degree duration period.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.6 Matters Related to the Award of PG Degree</h3>
                                        <p className="font-semibold text-heading mb-2">Degree Duration and Extension</p>
                                        <p className="mb-2">The minimum and maximum duration for various postgraduate degrees is given below in the table. The duration spent by a student is counted from the date of his registration as a postgraduate student until completion of the semester in which the maximum duration ends:</p>
                                        {table(['Degree Programs', 'Duration (in calendar years)'], [
                                            ['Doctor of Philosophy', '03-06'],
                                            ['Master of Science (18 years equivalent)', '1½-04'],
                                        ])}
                                        <p className="mt-3">Under exceptional circumstances, the Vice Chancellor is authorized to grant extensions up to a maximum period of two years for Ph.D. and one year for other programs on the recommendation of the respective Postgraduate Research Committee (PGRC) and the Dean.</p>
                                        <p className="mt-2">Maximum duration of degree program in special/hardship cases may be considered in relaxation of rules subject to approval of relevant authorities.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.7 Credit Hours Required for Completing the PG Degree</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>The minimum credit hours requirement for the award of Ph.D. degree shall be 60 credit hours including a minimum of 42 credit hours of Ph.D. research culminating in a thesis.</li>
                                            <li>The minimum credit hours requirement for the award of 18 years equivalent degree shall be 30 credit hours beyond a 16 years degree including a minimum of 06 credit hours of M.Sc. thesis.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.8 Award of PG Degree</h3>
                                        <p className="mb-2">Students, who are eligible for the award of degree, are required to submit a Degree Requirements Completion Form to their respective chairman for onward submission to the Controller of Examinations. Degree status would be decided only after receipt of this form.</p>
                                        <p className="font-semibold text-heading mt-3 mb-1">Eighteen years equivalent M.Sc./Master/M.Phil. degree shall be awarded to those students, who have:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Earned a minimum CGPA of 2.5 in prescribed course work with no outstanding &ldquo;F&rdquo;, &ldquo;W&rdquo;, &ldquo;WF&rdquo; or &ldquo;I&rdquo; grade in core courses;</li>
                                            <li>Have repeated elective subjects in which they have earned &ldquo;F&rdquo;, &ldquo;W&rdquo;, &ldquo;WF&rdquo; grade, or have taken alternate elective subjects to complete the subjects credit hours requirements;</li>
                                            <li>Whose thesis, if opted for, has been approved after fulfilling prescribed requirements</li>
                                            <li>Whose Design Project, for non-thesis option, has been approved by two faculty members appointed by the Chairperson for this purpose.</li>
                                        </ul>
                                        <p className="mt-3">Ph.D. degree shall be awarded to those students, who have fulfilled prescribed requirements as stated in Ph.D. regulations published separately.</p>
                                        <p className="mt-3">Medals and merit positions will only be awarded to M.Sc./Master/M.Phil students having earned degree within 24 months duration and CGPA 3.75 or more. The awards will be based on the CGPA earned at the time of graduation. Comparison will be made within the students of same entry session graduating in the minimum permissible duration. Immigrating and students who have repeated subjects and transferred credits will not be eligible for any medal or merit position.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.9 Separation/Removal from Rolls of PG Students</h3>
                                        <p className="mb-2">Postgraduate students shall be separated from the program:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>If they do not register for two subjects during the first semester after their enrollment;</li>
                                            <li>On the recommendation of PGRC, if they fail to register for two consecutive semesters</li>
                                        </ul>
                                        <p className="mt-2">Removal from rolls of Ph.D students will be governed by the approved Ph.D. regulations published separately.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.10 Migration into Postgraduate Programs</h3>
                                        <p>No migration is permitted into any of the post graduate programs. Candidates are required to apply afresh, fulfilling all the requirements laid down by the University in this regard, into the program they are aspiring to undertake. Admission shall be based on merit as per the admission policy.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">7.11 Transfer of Subjects for Postgraduate Students</h3>
                                        <p className="mb-2">Subjects may be transferred on the recommendations of the Postgraduate Research Committee (PGRC) and Dean of the concerned department/faculty to students admitted in the postgraduate program, subject to the following conditions:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>That the subject has been studied at HEC recognized institution within last five years from the date of admission.</li>
                                            <li>The subject under consideration has not been given credit towards award of a degree.</li>
                                            <li>The subject must correspond to a subject currently offered by the concerned department or be deemed equivalent in depth and intensity to a current subject.</li>
                                            <li>The student must have earned at least &ldquo;60%&rdquo; marks in case of term/annual system or a minimum of CGPA 3.0 out of 4.0 in a semester system similar to the one in this University, in the subject, for determining transfer of M.Sc./ MPhil subjects.</li>
                                            <li>The student must have earned at least &ldquo;70%&rdquo; marks in case of term/annual system or a minimum of CGPA 3.3 out of 4.0 in a semester system similar to the one in this University, in the subject, for determining transfer of PhD subjects.</li>
                                            <li>The credits transferred shall be counted towards the degree requirements of the student. However, GPA of transferred credits shall not be counted towards the calculation of CGPA, and that only &ldquo;Transferred&rdquo; shall be written against those subject(s) in which transfer of credits was allowed.</li>
                                            <li>With the exception of subjects studied at PTUT Lahore, a maximum of 9 credit hours of subjects can be transferred.</li>
                                        </ul>
                                    </div>

                                </div>
                            </section>
                        </ScrollReveal>

                    </article>
                </div>
            </div>
        </div>
    );
}