import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoSrc from '../assets/logo.svg';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      } border-b border-[#E5E0D8]`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex-shrink-0" aria-label="Parkbay Consulting — Home">
            <img src={logoSrc} alt="Parkbay Consulting" className="h-[77px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`relative text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 pb-1 ${
                  isActive(to)
                    ? 'text-navy after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-gold'
                    : 'text-slate hover:text-navy'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/book" className="btn-gold-outline text-[13px]">
              <span>Book a Call</span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E5E0D8] ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-[13px] font-medium tracking-[0.08em] uppercase py-3 border-b border-[#E5E0D8] ${
                isActive(to) ? 'text-gold' : 'text-navy'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/book" className="btn-gold mt-3 text-center text-[13px]">
            <span>Book a Call</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
