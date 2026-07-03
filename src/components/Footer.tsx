import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import logoReversed from '../assets/logo-reversed.svg';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book a Call', to: '/book' },
];

const serviceLinks = [
  { label: 'C-Suite & Boardroom Coaching', to: '/services' },
  { label: 'High-Performance Leadership', to: '/services' },
  { label: 'Strategic Career Transitions', to: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <Link to="/" aria-label="Parkbay Consulting — Home">
              <img src={logoReversed} alt="Parkbay Consulting" className="h-11 w-auto mb-4" />
            </Link>
            <p className="text-[13px] text-white/60 tracking-wide mb-2 leading-[1.7]">
              Executive Coaching · Leadership Development
            </p>
            <p className="text-[13px] text-white/40 mb-4">Founded by Ciara McCluskey</p>
            <div className="flex items-center gap-1.5 text-[12px] text-white/40">
              <MapPin size={11} className="text-gold/60" />
              <span>Serving all of Ireland & Worldwide</span>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:ciara.mccluskey@gmail.com"
                  className="flex items-start gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="text-gold flex-shrink-0 mt-[2px]" />
                  hello@parkbayconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[14px] text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={15} className="text-gold flex-shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li className="text-[13px] text-white/40 leading-[1.6] pt-2 border-t border-white/10">
                Dublin · Cork · Galway · Limerick<br />Belfast · Remote Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/20 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} Parkbay Consulting. All rights reserved. Executive Coaching Ireland.
          </p>
          <p className="text-[12px] text-white/30 italic">Built for leaders.</p>
        </div>
      </div>
    </footer>
  );
}
