import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';

interface FeatureProps {
  eyebrow: string;
  heading: string;
  body: string;
  imageRight: boolean;
}

function AlternatingFeature({ eyebrow, heading, body, imageRight }: FeatureProps) {
  const textCol = (
    <div className="flex flex-col justify-center py-10 lg:py-0">
      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-[34px] md:text-[40px] font-semibold text-navy mb-5 leading-[1.15]">
        {heading}
      </h2>
      <p className="text-[17px] leading-[1.85] text-slate max-w-[480px]">{body}</p>
    </div>
  );

  const imageCol = (
    <div
      className="w-full bg-ivory relative overflow-hidden"
      style={{ aspectRatio: '4/3' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );

  return (
    <FadeUp>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {imageRight ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{imageCol}</div>
              <div className="order-1 lg:order-2">{textCol}</div>
            </>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

const steps = [
  {
    number: '01',
    title: 'Assessment & Goals',
    body: 'We start by fully understanding the challenges you are facing. Depending on the situation, psychometric tools such as Myers-Briggs, Emotional Intelligence assessments, or 360-degree evaluations may be used to build a clearer picture of you, your blind spots, and your stakeholder landscape. Using both quantitative and qualitative data, we develop clear goals and a structured plan with measurable milestones.',
  },
  {
    number: '02',
    title: 'Implementation',
    body: 'Using our findings, we develop a tailored plan together to reach your goals. Regular check-ins provide support and feedback as you experiment with new approaches, deepen your understanding, practise new behaviours, and build stronger skills. We work to overcome barriers as they arise, measuring success against agreed milestones throughout.',
  },
  {
    number: '03',
    title: 'Progress Review',
    body: 'At regular intervals we reflect on your progress and growth. We revisit your goals, ensure any gains are durable, and plan proactively for upcoming challenges. With a structured review cadence, you always know whether you are on track — and if not, we reassess to get you back on plan.',
  },
];

export default function Coaching() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              Executive Coaching
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] text-navy mb-7">
              For Leaders Who Are Ready
              <br className="hidden md:block" /> to Go Further
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] md:text-[19px] leading-[1.85] text-slate max-w-[640px] mx-auto">
              Every elite professional eventually encounters a threshold where further progress
              demands a transformation. Whether it is evolving into a composed leader, a respected
              authority, a strategic thinker, or a creative visionary, reaching that next level
              requires expert guidance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[17px] leading-[1.85] text-slate mb-7">
              The modern landscape demands constant growth and adaptability. Navigating the pressures
              of leadership, shifting market dynamics, and rapid technological change requires
              exceptional agility and mental clarity.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] leading-[1.85] text-slate">
              Executive coaching bridges this gap. Just as world-class athletes rely on coaching to
              maintain peak performance, high-achieving professionals use coaching to uncover blind
              spots, challenge assumptions, and achieve growth that would be impossible in isolation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Alternating feature sections */}
      <div className="border-t border-[#E5E0D8]">
        <AlternatingFeature
          eyebrow="Strengths"
          heading="Build Your Strengths"
          body="The strengths that got you here may not be the same ones you need moving forward. Become the leader you want and need to be. Coaching will help you adapt, refine, and enhance your strengths to achieve your goals."
          imageRight={true}
        />
        <div className="border-t border-[#E5E0D8] bg-ivory">
          <AlternatingFeature
            eyebrow="Awareness"
            heading="See Your Blind Spots"
            body="We all have blind spots — and they are inevitably hard to see on your own. Coaching gives you honest, objective feedback that will help you understand yourself and others more clearly. Self-awareness at that level is an advantage few people possess."
            imageRight={false}
          />
        </div>
        <div className="border-t border-[#E5E0D8]">
          <AlternatingFeature
            eyebrow="Strategy"
            heading="Solve Problems Strategically"
            body="Problems become more complex and costly the higher you go. Most senior leaders feel isolated because they face these challenges alone. Coaching gives you a strategic sounding board to work through any situation you encounter."
            imageRight={true}
          />
        </div>
        <div className="border-t border-[#E5E0D8] bg-ivory">
          <AlternatingFeature
            eyebrow="Goals"
            heading="Reach Your Goals"
            body="No matter your destination, we will create a plan to get you there. Coaching gives you the edge, insights, and confidence to become the best version of yourself and achieve your goals along the way."
            imageRight={false}
          />
        </div>
      </div>

      {/* How coaching works */}
      <section className="bg-ivory border-t border-[#E5E0D8] py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-3">
              The Process
            </p>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-navy mb-16">
              How Coaching Works
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
                <div
                  className={`pt-8 ${
                    i < steps.length - 1 ? 'pb-10 md:pb-0 md:pr-10 border-b md:border-b-0 md:border-r border-[#E5E0D8]' : 'pb-0'
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

      {/* Services strip */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-white mb-5">
              Our Approach
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] leading-[1.85] text-white/70 max-w-[640px]">
              Parkbay Consulting's approach is direct and uncompromisingly results-focused. We help
              clients develop greater performance, drive, and clarity. Our clients are highly
              ambitious, competitive, and determined to succeed.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-32 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-navy mb-4">
              Start the Conversation
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-slate mb-10 max-w-[480px] mx-auto">
              Book a confidential introductory call to explore how coaching can support your next
              step.
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
