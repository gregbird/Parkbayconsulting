import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Users, ChevronLeft, ChevronRight, Plus, Minus, ArrowRight } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';
import portraitSrc from '../assets/1755356116126.png';

const clientLogoImages = [
  { src: new URL('../assets/download_(1).png', import.meta.url).href, alt: 'EY' },
  { src: new URL('../assets/download.png', import.meta.url).href, alt: 'Bus Éireann' },
  { src: new URL('../assets/download.jpeg', import.meta.url).href, alt: 'LAYA Healthcare' },
  { src: new URL('../assets/Western-Union-Logo.png', import.meta.url).href, alt: 'Western Union' },
  { src: new URL('../assets/dublin-airport-authority-daa-logo-vector.svg', import.meta.url).href, alt: 'DAA' },
];

const pillars = [
  {
    icon: <Target size={22} strokeWidth={1.5} className="text-gold" />,
    title: 'Clarity',
    body: 'Cut through complexity and gain the perspective you need to lead with confidence across Ireland and beyond.',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} className="text-gold" />,
    title: 'Performance',
    body: 'Unlock the next level of your professional impact. Sharpen the strategic edge that sets high-achieving Irish executives apart.',
  },
  {
    icon: <Users size={22} strokeWidth={1.5} className="text-gold" />,
    title: 'Results',
    body: 'Every engagement is built around measurable outcomes — not conversations for their own sake.',
  },
];

const testimonials = [
  {
    quote:
      'Ciara is a dedicated, highly talented coach who consistently delivered outstanding results. People from all levels within the company responded to Ciara\'s support and challenge. She inspires and helps people and I can\'t think of a better way of explaining how Ciara impacts an organisation',
    name: 'Brian Drain',
    company: 'Chief People Officer, daa',
  },
  {
    quote:
      'I worked with Ciara for a number of months on personal development and career coaching. I found her style and approach really practical and engaging. I would highly recommend her',
    name: 'Roy O Driscoll',
    company: 'Deputy Managing Director & Head of Commercial Business Development, Cork Airport',
  },
  {
    quote:
      'Ciara was a fantastic addition to our company for a complex change project we were working on.  Ciara worked closely with Organisation Development in the preparation for and delivery of a new Succession Planning tool,  Ciara\'s direction, experience and great personality helped us to deliver on this new process seamlessly.  I would strongly recommend Ciara for any organisational change/HR projects',
    name: 'Veronica O\'Keeffe',
    company: 'OD Manager, Laya Healthcare',
  },
  {
    quote:
      'Ciara is a high-energy, enthusiastic and motivational professional who gets the best out of teams. She was instrumental in building and delivering award-winning training and development programmes at Ernst & Young. She engages and inspires people to be creative and productive. I hope to work with Ciara in other situations as she transforms teams and performance through her outstanding work',
    name: 'Paul Rafferty',
    company: 'Operations Director, EY',
  },
];

const faqs = [
  {
    q: 'What is executive coaching and how does it differ from mentoring?',
    a: 'Executive coaching is a structured, evidence-based partnership focused on helping senior leaders achieve specific professional goals. Unlike mentoring — which typically involves sharing experience and advice — coaching is a forward-looking process that draws out your own insights and capabilities through skilled questioning, psychometric tools, and accountability frameworks.',
  },
  {
    q: 'Who is executive coaching best suited for?',
    a: 'Coaching delivers the greatest return for ambitious professionals at inflection points: leaders stepping into more senior roles, C-suite executives navigating organisational complexity, high-potential talent being prepared for advancement, and business owners scaling their enterprises across Ireland and internationally.',
  },
  {
    q: 'How long does an executive coaching programme typically last?',
    a: 'Most programmes run between three and twelve months, depending on the scope of goals. Each engagement begins with a diagnostic phase before we agree a tailored plan with clear milestones. Shorter focused programmes are available for specific career transitions or leadership challenges.',
  },
  {
    q: 'Do you work with clients outside Dublin?',
    a: 'Yes. Parkbay Consulting serves executives nationwide across the Republic of Ireland and Northern Ireland — including Cork, Galway, Limerick, Belfast, and Waterford — as well as internationally via video. Geographic location is never a barrier to accessing world-class executive coaching.',
  },
  {
    q: 'What psychometric tools do you use?',
    a: 'Ciara is accredited in a range of industry-leading tools including Myers-Briggs Type Indicator (MBTI), Emotional Intelligence (EQ-i 2.0), and 360-degree feedback frameworks. Tool selection is always aligned to the individual client\'s goals and context.',
  },
  {
    q: 'Is everything we discuss confidential?',
    a: 'Absolutely. All coaching conversations are strictly confidential. Where coaching is sponsored by an organisation, agreed boundaries around reporting are established upfront — typically limited to confirming engagement attendance and broad goal themes, never specific content.',
  },
];

const services = [
  {
    eyebrow: 'C-Suite & Boardroom',
    title: 'Executive Coaching for Senior Leaders',
    body: 'Bespoke one-to-one coaching for C-suite executives and board directors navigating high-stakes leadership challenges across Ireland\'s private and public sectors.',
    href: '/services',
  },
  {
    eyebrow: 'Leadership Programmes',
    title: 'High-Performance Leadership Development',
    body: 'Structured development programmes for high-potential leaders and senior management teams seeking to accelerate growth and scale impact across Ireland.',
    href: '/services',
  },
  {
    eyebrow: 'Career Transitions',
    title: 'Strategic Career Transition Coaching',
    body: 'Expert guidance for executives navigating career pivots, role expansions, international moves, or the transition into non-executive and board positions.',
    href: '/services',
  },
];

function TestimonialSlider() {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 40 }),
  };

  return (
    <div className="relative max-w-[800px] mx-auto">
      <div className="overflow-hidden min-h-[200px] flex items-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.blockquote
            key={current}
            custom={direction}
            variants={prefersReducedMotion ? undefined : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full text-center px-4"
          >
            <div className="w-10 h-[2px] bg-gold mx-auto mb-8" />
            <p className="font-display text-[20px] md:text-[22px] leading-[1.7] text-navy italic mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-gold">
              {testimonials[current].name}
            </p>
            <p className="text-[13px] text-slate/70 mt-1">{testimonials[current].company}</p>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 border border-[#E5E0D8] flex items-center justify-center text-slate hover:border-gold hover:text-gold transition-colors duration-200"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? 'bg-gold w-5' : 'bg-[#E5E0D8]'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 border border-[#E5E0D8] flex items-center justify-center text-slate hover:border-gold hover:text-gold transition-colors duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5E0D8]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[16px] font-medium text-navy group-hover:text-gold transition-colors duration-200 leading-[1.5]">
          {q}
        </span>
        <span className="flex-shrink-0 text-gold">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-[1.85] text-slate max-w-[680px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  useSEO({
    title: 'Executive Coaching Ireland | Leadership Development | Parkbay Consulting',
    description:
      'Parkbay Consulting: premium executive coaching across Ireland. Ciara McCluskey partners with C-suite leaders and senior executives in Dublin, Cork, Galway, Belfast and remotely worldwide.',
    canonical: 'https://parkbayconsulting.com/',
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-8 pb-0 lg:pt-12 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 lg:gap-x-20 gap-y-2 lg:gap-y-2 items-start">
            {/* Text */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <FadeUp delay={0}>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
                  Executive Coaching Ireland
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="font-display text-[48px] md:text-[60px] lg:text-[68px] font-bold leading-[1.08] text-navy mb-6">
                  Exceeding
                  <br />
                  Executive
                  <br />
                  Potential.
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[18px] md:text-[20px] leading-[1.75] text-slate mb-10 max-w-[520px]">
                  As a highly experienced Executive Coach, I offer 
                  specialised guidance for leaders and career development, 
                  empowering you to tackle intricate challenges with a focused, strategic perspective.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/book" className="btn-gold text-[13px]">
                    <span>Book an Intro Call</span>
                  </Link>
                  <Link to="/services" className="btn-navy-outline text-[13px]">
                    <span>Explore Coaching</span>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Portrait placeholder */}
            <FadeUp delay={0.15} className="lg:col-span-2">
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={portraitSrc}
                  alt="Ciara McCluskey, Executive Coach at Parkbay Consulting"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-8 h-[1px] bg-gold mb-3" />
                  <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/80">
                    Ciara McCluskey
                  </p>
                  <p className="text-[11px] tracking-wide text-white/60">Executive Coach · Ireland</p>
                </div>
              </div>
            </FadeUp>

            {/* Logo strip */}
            <FadeUp delay={0.4} className="lg:col-span-5">
              <div className="pt-7 border-t border-[#E5E0D8] pb-3">
                <p className="text-[18px] md:text-[20px] leading-[1.75] text-slate mb-5 text-center">
                  Trusted by professionals from
                </p>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  {clientLogoImages.map(({ src, alt }, i) => (
                    <motion.img
                      key={alt}
                      src={src}
                      alt={alt}
                      className="w-[120px] h-[70px] object-contain shrink-0"
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    />
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-white pt-10 pb-14 lg:pt-12 lg:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-[18px] leading-[1.85] text-slate mb-6 max-w-3xl mx-auto">
              As a highly experienced Executive Coach, I offer specialised guidance for leaders and career development, empowering you to tackle intricate challenges with a focused, strategic perspective.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] leading-[1.85] text-slate mb-8 max-w-2xl mx-auto">
              Regardless of what your next professional milestone entails, I am here to facilitate
              your progress toward it.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link
              to="/services"
              className="text-[15px] text-gold font-medium hover:underline underline-offset-4 transition-all duration-200"
            >
              Learn more about Executive Coaching in Ireland &rarr;
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-ivory py-24 lg:py-32 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeUp key={pillar.title} delay={i * 0.1}>
                <div
                  className={`px-10 py-10 ${
                    i < pillars.length - 1
                      ? 'border-b md:border-b-0 md:border-r border-gold/30'
                      : ''
                  } ${i === 0 ? 'md:pl-0' : ''} ${i === pillars.length - 1 ? 'md:pr-0' : ''}`}
                >
                  <div className="mb-5">{pillar.icon}</div>
                  <h3 className="text-[13px] font-semibold tracking-[0.1em] uppercase text-gold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[16px] leading-[1.75] text-slate">{pillar.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="bg-white py-24 lg:py-32 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
              Core Services
            </p>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-navy mb-4 max-w-[640px] leading-[1.15]">
              Coaching Programmes for Ireland's Senior Leaders
            </h2>
            <p className="text-[17px] leading-[1.75] text-slate mb-16 max-w-[560px]">
              Every engagement is bespoke. Select the programme that best fits your current
              leadership challenge, or{' '}
              <Link to="/book" className="text-gold hover:underline underline-offset-4">
                book a consultation
              </Link>{' '}
              to explore the right path.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E0D8]">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.1}>
                <Link
                  to={svc.href}
                  className={`group flex flex-col p-8 lg:p-10 h-full hover:bg-ivory transition-colors duration-200 ${
                    i < services.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#E5E0D8]' : ''
                  }`}
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
                    {svc.eyebrow}
                  </p>
                  <h3 className="font-display text-[20px] font-semibold text-navy mb-4 leading-[1.3]">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-slate flex-1">{svc.body}</p>
                  <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-gold group-hover:gap-3 transition-all duration-200">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ivory py-24 lg:py-32 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-3 text-center">
              Client Voices
            </p>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-navy mb-16 text-center">
              What Senior Leaders Say
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <TestimonialSlider />
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32 border-t border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <FadeUp>
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
                  FAQ
                </p>
                <h2 className="font-display text-[34px] md:text-[40px] font-semibold text-navy leading-[1.15] mb-6">
                  Common Questions
                </h2>
                <p className="text-[16px] leading-[1.75] text-slate mb-8">
                  Everything you need to know about executive coaching in Ireland, the process, and
                  how Parkbay Consulting works.
                </p>
                <Link to="/contact" className="btn-gold-outline text-[13px]">
                  <span>Ask a Question</span>
                </Link>
              </FadeUp>
            </div>
            <div className="lg:col-span-3">
              <FadeUp delay={0.1}>
                <div className="border-t border-[#E5E0D8]">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-[36px] md:text-[44px] font-semibold text-white mb-4">
              Ready to Exceed Your Executive Potential?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-white/60 mb-10 max-w-[480px] mx-auto">
              Book a confidential strategic consultation. Serving executives across Ireland and
              worldwide.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link to="/book" className="btn-gold text-[13px]">
              <span>Book a Strategic Consultation</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
