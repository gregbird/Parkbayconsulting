import { Clock, Video, Target, Linkedin, Mail } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { useSEO } from '../hooks/useSEO';

// TODO: Replace with actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/ciara-mccluskey/30min';

const expectItems = [
  {
    icon: <Clock size={20} strokeWidth={1.5} className="text-gold" />,
    label: 'Duration',
    value: '30 minutes',
  },
  {
    icon: <Video size={20} strokeWidth={1.5} className="text-gold" />,
    label: 'Format',
    value: 'Video call or in person',
  },
  {
    icon: <Target size={20} strokeWidth={1.5} className="text-gold" />,
    label: 'Focus',
    value: 'Your challenges, goals, and coaching fit',
  },
];

export default function Book() {
  useSEO({
    title: 'Book a Strategic Consultation | Executive Coaching Ireland | Parkbay Consulting',
    description:
      'Book a confidential introductory call with Ciara McCluskey, Ireland\'s leading executive coach. No obligation — explore coaching fit in 30 minutes.',
    canonical: 'https://parkbayconsulting.com/book',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              Get Started
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] text-navy mb-7">
              Book an Introductory Call
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] md:text-[19px] leading-[1.85] text-slate max-w-[580px] mx-auto">
              This is a confidential, no-obligation conversation to explore what you are working on
              and whether coaching is the right fit. Sessions are conducted via video call or in
              person. Select a time below that works for you.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-16 lg:py-20 border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {expectItems.map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.1}>
                <div
                  className={`pt-7 ${
                    i < expectItems.length - 1
                      ? 'pb-8 md:pb-0 md:pr-10 border-b md:border-b-0 md:border-r border-[#E5E0D8]'
                      : ''
                  } ${i > 0 ? 'md:pl-10' : ''} border-t-2 border-gold`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-2">
                    {item.label}
                  </p>
                  <p className="text-[16px] font-semibold text-navy">{item.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly booking section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-8">
              Select a Time
            </p>
          </FadeUp>

          {/* Calendly embed */}
          <FadeUp delay={0.1}>
            <CalendlyEmbed url={CALENDLY_URL} />
          </FadeUp>

          {/* Fallback note */}
          <FadeUp delay={0.15}>
            <div className="mt-8 p-5 border-l-4 border-gold bg-ivory">
              <p className="text-[14px] text-slate leading-[1.7]">
                If the booking calendar does not load, please email us directly at{' '}
                <a
                  href="mailto:ciara.mccluskey(a)gmail.com"
                  className="text-gold hover:underline underline-offset-4"
                >
                  ciara.mccluskey(a)gmail.com
                </a>{' '}
                to arrange a time.
              </p>
            </div>
          </FadeUp>

          {/* Reassurance */}
          <FadeUp delay={0.2}>
            <div className="mt-10 pt-8 border-t border-gold/30 text-center">
              <p className="text-[13px] text-slate/70 italic max-w-[520px] mx-auto leading-[1.7]">
                All enquiries are treated with complete confidentiality. There is no obligation to
                proceed.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact alternative */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h3 className="text-[18px] md:text-[22px] font-semibold tracking-[0.04em] uppercase text-white mb-4">
              Prefer to reach out directly?
            </h3>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[16px] text-white/70 mb-10 max-w-[400px] mx-auto">
              Send a message and Ciara will respond within one business day.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@parkbayconsulting.ie"
                className="btn-gold-outline text-[13px] flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Email Us</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white-outline text-[13px] flex items-center gap-2"
              >
                <Linkedin size={14} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
