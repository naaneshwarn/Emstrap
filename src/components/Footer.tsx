import { Link } from '@tanstack/react-router';

function EmstrapLogoWhite() {
  return (
    <Link to="/" className="inline-flex items-center bg-white px-3 py-1.5 rounded-[4px] shadow-xs hover:opacity-95 transition-opacity" aria-label="EMSTRAP">
      <img
        src="/assets/emstrap-logo.png"
        alt="EMSTRAP"
        className="h-8 md:h-9 w-auto object-contain"
      />
    </Link>
  );
}

const solutions = [
  { label: 'Corporate Safety', path: '/corporate-companies' },
  { label: 'Smart Cities', path: '/smart-cities' },
  { label: 'Government Agencies', path: '/government-agencies' },
  { label: 'Ambulance Providers', path: '/ambulance-providers' },
  { label: 'Traffic Management', path: '/traffic-management' },
  { label: 'Police Departments', path: '/police-departments' },
];

const platform = [
  'Emergency Response',
  'Incident Management',
  'Real-Time Tracking',
  'Dispatch',
  'Analytics',
];

const company = [
  'About',
  'Resources',
  'Contact',
  'Careers',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-[#1a2d4a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <EmstrapLogoWhite />
            <p className="mt-5 text-[13px] text-[#7A8FA8] leading-relaxed max-w-[280px]">
              EMSTRAP is an integrated emergency response and safety management platform connecting organisations, cities and emergency services into a unified operational ecosystem.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-[#1a2d4a] text-[#7A8FA8] hover:text-white hover:border-[#2d4a6a]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center border border-[#1a2d4a] text-[#7A8FA8] hover:text-white hover:border-[#2d4a6a]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#7A8FA8] mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link text-[13px] text-[#9AAEC4]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#7A8FA8] mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {platform.map(item => (
                <li key={item}>
                  <a href="#" className="footer-link text-[13px] text-[#9AAEC4]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#7A8FA8] mb-4">Company</h4>
            <ul className="space-y-2.5 mb-8">
              {company.map(item => (
                <li key={item}>
                  <a href="#" className="footer-link text-[13px] text-[#9AAEC4]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#7A8FA8] mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contact@emstrap.com" className="footer-link text-[13px] text-[#9AAEC4]">
                  contact@emstrap.com
                </a>
              </li>
              <li>
                <a href="tel:9880882476" className="footer-link text-[13px] text-[#9AAEC4]">
                  9880882476
                </a>
              </li>
              <li className="text-[13px] text-[#9AAEC4]">
                Emergency Operations Centre
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a2d4a] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5D7A94]">
            © 2026 EMSTRAP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="footer-link text-[12px] text-[#5D7A94]">
              Privacy Policy
            </a>
            <a href="#" className="footer-link text-[12px] text-[#5D7A94]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
