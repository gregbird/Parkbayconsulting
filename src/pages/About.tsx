import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';
import portraitSrc from '../assets/1755356116126.png';

const clientLogos = ['DAA', 'EY', 'Bus Éireann', 'LAYA', 'Western Union'];

const credentials = [
  {
    label: 'Accreditation',
    value: 'Professional Executive Coach (ICF-aligned)',
  },
  {
    label: 'Tools',
    value: 'MBTI · EQ-i · 360 Feedback · Psychometric Assessment',
  },
  {
    label: 'Experience',
    value: '20+ Years in Leadership & Organisational Development',
  },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  useSEO({
    title: 'About Ciara McCluskey | Executive Coach Ireland | Parkbay Consulting',
    description:
      'Ciara McCluskey is a leading executive coach and leadership development specialist with 20+ years of experience partnering with senior leaders across Ireland and internationally.',
    canonical: 'https://www.parkbayconsulting.ie/about',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <FadeUp>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
                  About Ciara
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="font-display text-[40px] md:text-[52px] lg:text-[58px] font-bold leading-[1.1] text-navy mb-7">
                  Ireland's Leading Executive Coach & Leadership Specialist
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[17px] leading-[1.85] text-slate max-w-[560px]">
                  Ciara McCluskey is the founder of Parkbay Consulting and a leading executive coach
                  and Learning & Development specialist with over 20 years of experience partnering
                  with senior leaders across the Republic of Ireland and
                  internationally. Her work spans organisations including DAA, EY, Bus Éireann, LAYA
                  Healthcare, and Western Union — bringing a practitioner's perspective forged in
                  real boardroom dynamics across Ireland's private and public sectors.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.15} className="lg:col-span-2 order-1 lg:order-2">
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={portraitSrc}
                  alt="Ciara McCluskey, Founder of Parkbay Consulting"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-8 h-[1px] bg-gold mb-3" />
                  <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/80">
                    Ciara McCluskey
                  </p>
                  <p className="text-[11px] tracking-wide text-white/60">
                    Founder, Parkbay Consulting
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-white border-t border-[#E5E0D8] py-24 lg:py-32">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[42px] font-semibold text-navy mb-10">
              Experience & Credentials
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="text-[17px] leading-[1.85] text-slate mb-6">
              Ciara's background bridges strategic organisational development and individual
              coaching. She has held senior Learning & Development roles and has led large-scale
              talent and performance programmes across complex, matrixed organisations. Her coaching
              practice is grounded in behavioural science and evidence-based psychometric tools,
              including Emotional Intelligence (EQ-i), Hogan Inventory and Myers-Briggs Type Indicator (MBTI)
             frameworks.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] leading-[1.85] text-slate mb-6">
              She holds professional ICF Professional Coaching Accreditation and brings deep expertise in leadership
              development, career transition, high-potential talent, and executive team
              effectiveness. Her approach is direct and results-focused — not a listening service,
              but a partnership built for progress.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[17px] leading-[1.85] text-slate mb-6">
              Ciara works with leaders at inflection points: those stepping into more senior roles,
              navigating high-pressure transitions, or seeking a trusted thinking partner to help
              them perform at their best. Her clients consistently describe her work as challenging,
              honest, and transformational.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] leading-[1.85] text-slate">
              Parkbay Consulting was founded on a simple belief: that the most ambitious leaders
              deserve expert, independent support — delivered with rigour, discretion, and a genuine
              commitment to results.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-ivory border-t border-[#E5E0D8] py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {credentials.map((cred, i) => (
              <FadeUp key={cred.label} delay={i * 0.1}>
                <div
                  className={`p-8 border border-[#E5E0D8] ${
                    i > 0 ? 'md:-ml-[1px]' : ''
                  }`}
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-3">
                    {cred.label}
                  </p>
                  <p className="text-[16px] font-semibold text-navy leading-[1.5]">{cred.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Sector experience */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[42px] font-semibold text-white mb-4">
              Sectors & Organisations
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] leading-[1.75] text-white/70 mb-14 max-w-[600px]">
              Parkbay Consulting has partnered with senior professionals across financial
              services, healthcare, transport, and professional services.
            </p>
          </FadeUp>
          <div className="flex flex-wrap gap-x-12 gap-y-5">
            {clientLogos.map((name, i) => (
              <motion.span
                key={name}
                className="text-[15px] font-bold tracking-[0.12em] uppercase text-white/50"
                initial={prefersReducedMotion ? { opacity: 0.5 } : { opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-white py-16 lg:py-20 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="border-l-2 border-gold pl-8 max-w-[720px]">
              <p className="text-[18px] leading-[1.75] text-slate italic mb-8">
                "Coaching works best when the fit is right. Book a confidential introductory call to
                explore whether we're a good match."
              </p>
              <Link to="/book" className="btn-gold text-[13px]">
                <span>Book Your Intro Call</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
