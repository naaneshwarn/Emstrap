import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const serveLinks = [
  { label: 'Corporate Companies', path: '/corporate-companies' },
  { label: 'Smart Cities', path: '/smart-cities' },
  { label: 'Government Agencies', path: '/government-agencies' },
  { label: 'Ambulance Providers', path: '/ambulance-providers' },
  { label: 'Traffic Management', path: '/traffic-management' },
  { label: 'Police Departments', path: '/police-departments' },
];

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5l4 4 4-4" />
    </svg>
  );
}

function EmstrapLogo() {
  return (
    <Link to="/" className="flex items-center flex-shrink-0">
      <img
        src="/assets/emstrap-logo-transparent.png"
        alt="EMSTRAP Emergency Response"
        className="h-10 md:h-11 w-auto object-contain"
      />
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serveOpen, setServeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setServeOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServePage = serveLinks.some(l => l.path === pathname);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-default">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <EmstrapLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          <Link to="/" className="nav-link-item px-4 py-2 text-[14px] font-medium text-content-secondary hover:text-navy-deep">
            Products
          </Link>

          {/* Who We Serve dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServeOpen(!serveOpen)}
              className={`nav-link-item flex items-center gap-1 px-4 py-2 text-[14px] font-medium ${isServePage || serveOpen ? 'text-brand-red' : 'text-content-secondary hover:text-navy-deep'}`}
            >
              Who We Serve
              <span className={`transition-transform duration-200 ${serveOpen ? 'rotate-180' : ''}`}>
                <ChevronDown />
              </span>
            </button>
            {serveOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-border-default shadow-md rounded-[4px] py-1 z-50 animate-fade-in-up">
                {serveLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${pathname === link.path ? 'text-brand-red bg-red-pale' : 'text-content-secondary hover:text-navy-deep hover:bg-surface-light'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/" className="nav-link-item px-4 py-2 text-[14px] font-medium text-content-secondary hover:text-navy-deep">
            Resources
          </Link>
          <Link to="/" className="nav-link-item px-4 py-2 text-[14px] font-medium text-content-secondary hover:text-navy-deep">
            Company
          </Link>
          <Link to="/" className="nav-link-item px-4 py-2 text-[14px] font-medium text-content-secondary hover:text-navy-deep">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a href="#" className="px-4 py-2 text-[13px] font-semibold text-brand-red bg-red-pale border border-red-200 rounded-[4px] hover:bg-red-muted btn-smooth">
            Emergency
          </a>
          <a href="#" className="px-5 py-2 text-[13px] font-semibold text-white bg-brand-red rounded-[4px] hover:bg-[#CC1218] btn-smooth">
            Login
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <a href="#" className="px-3 py-1.5 text-[12px] font-semibold text-brand-red bg-red-pale border border-red-200 rounded-[4px] btn-smooth">
            Emergency
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-navy-deep transition-transform duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 4l14 14M18 4L4 18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M3 6h16M3 11h16M3 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t border-border-default bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          <Link to="/" className="py-2.5 text-[14px] font-medium text-content-secondary border-b border-border-light">Products</Link>
          <div>
            <div className="py-2.5 text-[14px] font-semibold text-content-primary border-b border-border-light">Who We Serve</div>
            {serveLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 pl-4 text-[13px] font-medium transition-colors border-b border-border-light last:border-0 ${pathname === link.path ? 'text-brand-red' : 'text-content-secondary'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/" className="py-2.5 text-[14px] font-medium text-content-secondary border-b border-border-light">Resources</Link>
          <Link to="/" className="py-2.5 text-[14px] font-medium text-content-secondary border-b border-border-light">Company</Link>
          <Link to="/" className="py-2.5 text-[14px] font-medium text-content-secondary">Contact</Link>
          <div className="pt-3">
            <a href="#" className="block w-full text-center py-2.5 text-[13px] font-semibold text-white bg-brand-red rounded-[4px] btn-smooth">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
