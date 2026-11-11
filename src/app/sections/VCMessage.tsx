import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function VCMessage() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-bg to-bg-alt">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest mb-3.5">
              <span className="text-[9px]">◆</span>
              From the Vice Chancellor
            </span>
            <h2 className="text-[clamp(30px,3.4vw,44px)] font-bold tracking-tight text-heading leading-tight">
              A message from leadership.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute top-6 left-6 -right-6 -bottom-6 bg-navy rounded-xl opacity-5 -z-10" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/vc-adeel-akram.png"
                  alt="Prof. Dr. Adeel Akram"
                  width={420}
                  height={520}
                  className="w-full h-[400px] lg:h-[520px] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-7">
                <div className="text-[22px] font-bold text-heading tracking-tight">
                  Prof. Dr. Adeel Akram
                </div>
                <div className="text-[13px] text-muted font-medium uppercase tracking-widest mt-1">
                  Vice Chancellor / PTUT Lahore
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <span className="absolute -top-5 -left-2.5 text-[120px] leading-[0.6] text-accent opacity-10 font-black select-none pointer-events-none">
                &ldquo;
              </span>
              <div className="relative z-[1] text-[17px] leading-[1.85] text-body space-y-5">
                <p>
                  The role of universities has never been more vital. They are the engines of new knowledge, the birthplace of technologies that serve humanity, and the institutions that equip students with the skills, values, and character to thrive — not only in their professions but in life itself.
                </p>
                <p>
                  At Punjab Tianjin University of Technology Lahore, we believe education is more than vocational training and practical skills; it is a holistic journey that nurtures cognitive, spiritual, emotional, and social growth. PTUT Lahore stands today as one of Pakistan&apos;s most rapidly rising universities, guided by our philosophy of student-centered learning and committed to cultivating professional competence alongside integrity, empathy, and resilience.
                </p>
              </div>
              <div className="mt-9 pt-7 border-t border-border font-bold text-[22px] text-accent tracking-tight leading-tight">
                &ldquo;Innovation with Purpose, Excellence with Vision.&rdquo;
              </div>
              <a href="/leadership" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-accent hover:underline underline-offset-4">
                Meet PTUT leadership →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}