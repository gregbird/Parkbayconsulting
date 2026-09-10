import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';

const services = [
  {
    eyebrow: 'C-Suite & Boardroom Coaching',
    title: 'Executive Coaching for Senior Leaders',
    subtitle: 'For CEOs, directors, and C-suite executives across Ireland',
    body: 'The most effective leaders in Ireland\'s boardrooms share a common trait: they invest in expert, independent coaching. Parkbay Consulting\'s flagship one-to-one programme pairs senior executives with Ciara McCluskey for a rigorously personalised coaching engagement built around your specific challenges and strategic ambitions.',
    body2: 'Whether you are navigating a complex organisational transformation, preparing for a new board position, or seeking to strengthen your executive presence, this programme delivers the clarity and strategic sharpness that high-stakes leadership demands.',
    points: [
      'One-to-one sessions tailored to your leadership context',
      'Psychometric profiling: Emotional Intelligence Profiling, Hogan, MBTI, 360-degree feedback',
      'Stakeholder alignment and boardroom dynamics',
      'Executive presence and strategic communication',
      'Confidential, independent thinking partnership',
    ],
    keywords: 'executive coaching Ireland, CEO mentoring Ireland, C-suite coaching, corporate executive coach Ireland',
    bg: 'bg-white',
  },
  {
    eyebrow: 'High-Performance Leadership Programmes',
    title: 'Leadership Development Ireland',
    subtitle: 'For high-potential talent and senior management teams',
    body: 'High performance is not accidental. Parkbay Consulting\'s leadership development programmes are designed for ambitious professionals in Ireland who are being developed into more senior roles — and for the organisations that recognise the commercial value of structured, expert coaching.',
    body2: 'These programmes integrate individual and team-level interventions, combining one-to-one coaching with structured frameworks for goal-setting, accountability, and measurable performance improvement.',
    points: [
      'Designed for career progression',
      'Structured 3–9 month programme arc with clear milestones',
      'Team effectiveness and high-performance culture',
      'Emotional intelligence and resilience building',
    ],
    keywords: 'leadership development Ireland, high-performance coaching Dublin, leadership training Belfast',
    bg: 'bg-ivory',
  },
  {
    eyebrow: 'Strategic Career Transitions',
    title: 'Career Advancement Coaching for Executives',
    subtitle: 'For leaders navigating pivotal professional changes',
    body: 'Career inflection points are defining moments. Whether stepping into a first C-suite role, transitioning from executive to non-executive director, returning to leadership after a career break, or considering an international move, the right coaching support at the right moment can make the difference between a successful transition and a costly mistake.',
    body2: 'Ciara McCluskey brings decades of corporate leadership experience to every transition coaching engagement — providing both the strategic perspective and the honest, direct feedback that executives need to navigate change with confidence.',
    points: [
      'First-time C-suite and board appointments',
      'Cross-sector and international transitions',
      'Return-to-leadership and portfolio career development',
      'Executive job search strategy and personal brand',
      'Non-executive and advisory role preparation',
    ],
    keywords: 'career advancement for executives, strategic leadership coaching, executive mentor Cork, C-suite coaching Galway',
    bg: 'bg-white',
  },
];

const steps = [
  {
    number: '01',
    title: 'Assessment & Goals',
    body: 'We start by fully understanding the challenges you face. Psychometric tools such as MBTI, EQ-i, or 360-degree evaluations build a clearer picture. Using both quantitative and qualitative data, we develop clear goals with measurable milestones.',
  },
  {
    number: '02',
    title: 'Implementation',
    body: 'A tailored plan is developed together. Regular sessions provide support and feedback as you experiment with new approaches, deepen self-awareness, and build stronger leadership capabilities against agreed milestones.',
  },
  {
    number: '03',
    title: 'Progress Review',
    body: 'At regular intervals we reflect on progress and consolidate gains. We revisit goals, ensure improvements are durable, and plan proactively for upcoming challenges so you always know whether you are on track.',
  },
];

export default function Services() {
  useSEO({
    title: 'Executive Coaching Services Ireland | C-Suite, Leadership & Career | Parkbay Consulting',
    description:
      'Explore Parkbay Consulting\'s executive coaching services: C-suite coaching, high-performance leadership development, and strategic career transition coaching across Ireland.',
    canonical: 'https://parkbayconsulting.com/services',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              Coaching Programmes
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] text-navy mb-7">
              Executive Coaching
              <br className="hidden md:block" /> Services Across Ireland
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] md:text-[19px] leading-[1.85] text-slate max-w-[640px] mx-auto mb-10">
              Three bespoke coaching programmes for senior leaders — designed to deliver measurable
              results at every stage of the executive career.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <Link to="/book" className="btn-gold text-[13px]">
              <span>Book a Strategic Consultation</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Service sections */}
      {services.map((svc, i) => (
        <section key={svc.title} className={`${svc.bg} border-t border-[#E5E0D8] py-24 lg:py-32`}>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 !== 0 ? '' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <FadeUp>
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
                    {svc.eyebrow}
                  </p>
                  <h2 className="font-display text-[34px] md:text-[40px] font-semibold text-navy mb-3 leading-[1.15]">
                    {svc.title}
                  </h2>
                  <p className="text-[14px] text-slate/70 italic mb-7">{svc.subtitle}</p>
                  <p className="text-[17px] leading-[1.85] text-slate mb-5">{svc.body}</p>
                  <p className="text-[17px] leading-[1.85] text-slate mb-10">{svc.body2}</p>
                  <Link to="/book" className="btn-gold text-[13px]">
                    <span>Book a Consultation</span>
                  </Link>
                </FadeUp>
              </div>
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <FadeUp delay={0.1}>
                  <div className="border border-[#E5E0D8] p-8 lg:p-10">
                    <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-6">
                      What's Included
                    </p>
                    <ul className="flex flex-col gap-4">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-[3px]" strokeWidth={1.5} />
                          <span className="text-[15px] leading-[1.7] text-slate">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="bg-ivory border-t border-[#E5E0D8] py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-3">
              The Process
            </p>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-navy mb-16">
              How Executive Coaching Works
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
                <div
                  className={`pt-8 ${
                    i < steps.length - 1
                      ? 'pb-10 md:pb-0 md:pr-10 border-b md:border-b-0 md:border-r border-[#E5E0D8]'
                      : 'pb-0'
                  } ${i > 0 ? 'md:pl-10' : ''} border-t-2 border-gold`}
                >
                  <p className="text-[28px] font-display font-bold text-gold mb-5">{step.number}</p>
                  <h3 className="text-[18px] font-semibold text-navy mb-4">{step.title}</h3>
                  <p className="text-[15px] leading-[1.8] text-slate">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-white mb-4">
              Start the Conversation
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-white/60 mb-10 max-w-[480px] mx-auto">
              Book a confidential introductory call to explore how executive coaching can support
              your next step across Ireland.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link to="/book" className="btn-gold text-[13px]">
              <span>Book an Intro Call</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
