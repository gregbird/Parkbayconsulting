import { useState } from 'react';
import { Mail, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';

const coverageAreas = [
  { city: 'Dublin', note: 'Republic of Ireland — Headquarters' },
  { city: 'Cork', note: 'Republic of Ireland — South' },
  { city: 'Galway', note: 'Republic of Ireland — West' },
  { city: 'Limerick', note: 'Republic of Ireland — Midwest' },
  { city: 'Belfast', note: 'Northern Ireland' },
  { city: 'Remote / Worldwide', note: 'International video sessions' },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  useSEO({
    title: 'Contact | Executive Coaching Ireland | Parkbay Consulting',
    description:
      'Get in touch with Parkbay Consulting to enquire about executive coaching across Ireland — Dublin, Cork, Galway, Limerick, Belfast and worldwide.',
    canonical: 'https://www.parkbayconsulting.ie/contact',
  });

  const [formState, setFormState] = useState<FormState>('idle');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    organisation: '',
    role: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate async submission — wire up to a real endpoint or Supabase edge function when ready
    await new Promise((res) => setTimeout(res, 1000));
    setFormState('success');
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              Get in Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[42px] md:text-[56px] lg:text-[60px] font-bold leading-[1.1] text-navy mb-6 max-w-[700px]">
              Begin Your Executive Coaching Journey
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] leading-[1.85] text-slate max-w-[560px]">
              Reach out to explore how executive coaching can support your next professional
              milestone. All enquiries are treated with complete discretion.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeUp>
                <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-navy mb-8">
                  Send an Enquiry
                </h2>
              </FadeUp>

              {formState === 'success' ? (
                <FadeUp>
                  <div className="border border-gold/30 bg-ivory p-8 text-center">
                    <CheckCircle2 size={32} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-[22px] font-semibold text-navy mb-3">
                      Thank you for your enquiry
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-slate max-w-[400px] mx-auto">
                      Ciara will respond within one business day. All enquiries are strictly
                      confidential.
                    </p>
                  </div>
                </FadeUp>
              ) : (
                <FadeUp delay={0.05}>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[12px] font-medium tracking-[0.08em] uppercase text-slate">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={fields.name}
                          onChange={handleChange}
                          className="border border-[#E5E0D8] bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[12px] font-medium tracking-[0.08em] uppercase text-slate">
                          Email Address <span className="text-gold">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={fields.email}
                          onChange={handleChange}
                          className="border border-[#E5E0D8] bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="organisation" className="text-[12px] font-medium tracking-[0.08em] uppercase text-slate">
                          Organisation
                        </label>
                        <input
                          id="organisation"
                          name="organisation"
                          type="text"
                          value={fields.organisation}
                          onChange={handleChange}
                          className="border border-[#E5E0D8] bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="text-[12px] font-medium tracking-[0.08em] uppercase text-slate">
                          Current Role
                        </label>
                        <input
                          id="role"
                          name="role"
                          type="text"
                          value={fields.role}
                          onChange={handleChange}
                          className="border border-[#E5E0D8] bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="e.g. CEO, VP Operations"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[12px] font-medium tracking-[0.08em] uppercase text-slate">
                        Your Message <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={fields.message}
                        onChange={handleChange}
                        className="border border-[#E5E0D8] bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate/40 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                        placeholder="Briefly describe what you are working on and what you are hoping to achieve through coaching..."
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="btn-gold text-[13px] disabled:opacity-60"
                      >
                        <span>{formState === 'submitting' ? 'Sending...' : 'Send Enquiry'}</span>
                      </button>
                    </div>
                    <p className="text-[12px] text-slate/50 italic">
                      All enquiries are treated with complete confidentiality. There is no obligation to proceed.
                    </p>
                  </form>
                </FadeUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.1}>
                <h2 className="font-display text-[28px] md:text-[32px] font-semibold text-navy mb-8">
                  Direct Contact
                </h2>
                <ul className="flex flex-col gap-5 mb-12">
                  <li>
                    <a
                      href="mailto:hello@parkbayconsulting.ie"
                      className="flex items-center gap-3 text-[15px] text-slate hover:text-gold transition-colors duration-200"
                    >
                      <Mail size={16} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                      hello@parkbayconsulting.ie
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[15px] text-slate hover:text-gold transition-colors duration-200"
                    >
                      <Linkedin size={16} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                      Connect on LinkedIn
                    </a>
                  </li>
                </ul>

                {/* Coverage area */}
                <div className="border-t border-[#E5E0D8] pt-10">
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={16} className="text-gold" strokeWidth={1.5} />
                    <h3 className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
                      Serving Executives Nationwide
                    </h3>
                  </div>
                  <p className="text-[14px] text-slate leading-[1.7] mb-6">
                    Parkbay Consulting delivers executive coaching across the island of Ireland and
                    internationally via video — so geography is never a barrier to world-class
                    leadership development.
                  </p>
                  <ul className="flex flex-col gap-3">
                    {coverageAreas.map((area) => (
                      <li key={area.city} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-[7px]" />
                        <div>
                          <span className="text-[14px] font-semibold text-navy">{area.city}</span>
                          <span className="text-[13px] text-slate/60 ml-2">{area.note}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
