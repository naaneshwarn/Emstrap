import { Link } from 'react-router';
import { useInView } from '../hooks/useInView';
import FloatingCardBanner from '../components/FloatingCardBanner';

const audiences = [
  {
    path: '/corporate-companies',
    eyebrow: 'For Corporate Companies',
    title: 'EMSTRAP Shield',
    description: 'Protect employees with integrated emergency response, medical assistance, fire safety and safety management.',
    image: '/images/home-corporate.jpg',
    tag: 'Employee Safety',
  },
  {
    path: '/smart-cities',
    eyebrow: 'For Smart Cities',
    title: 'City Emergency Infrastructure',
    description: 'Connect citizens, ambulances, hospitals, police and traffic management into a unified city-level response ecosystem.',
    image: '/images/home-smart-cities.jpg',
    tag: 'Urban Response',
  },
  {
    path: '/government-agencies',
    eyebrow: 'For Government Agencies',
    title: 'Public Safety Platform',
    description: 'Coordinate emergency response across government departments, services and regions from a single unified platform.',
    image: '/images/home-government.jpg',
    tag: 'Government',
  },
  {
    path: '/ambulance-providers',
    eyebrow: 'For Ambulance Providers',
    title: 'Intelligent Ambulance Operations',
    description: 'Intelligent dispatch, real-time fleet tracking, smart routing and connected hospital coordination for emergency medical services.',
    image: '/images/home-ambulance.jpg',
    tag: 'Medical Response',
  },
  {
    path: '/traffic-management',
    eyebrow: 'For Traffic Management',
    title: 'Emergency Corridor Intelligence',
    description: 'Live emergency vehicle tracking, route intelligence and green corridor support to clear the way for emergency response.',
    image: '/images/home-traffic.jpg',
    tag: 'Traffic Control',
  },
  {
    path: '/police-departments',
    eyebrow: 'For Police Departments',
    title: 'Connected Policing',
    description: 'Real-time incident alerts, location intelligence and multi-agency coordination for police departments and emergency response teams.',
    image: '/images/home-police.jpg',
    tag: 'Public Safety',
  },
];

export default function Home() {
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.15 });
  const [platformRef, platformInView] = useInView({ threshold: 0.15 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.15 });

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[560px] lg:min-h-[620px] flex items-center bg-navy-deep overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/home-hero.jpg"
            alt="AIIMS Hospital Emergency Medical Services - Ministry of Health and Family Welfare"
            className="w-full h-full object-cover object-right animate-hero-image"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(7,22,43,0.96) 0%, rgba(7,22,43,0.88) 40%, rgba(7,22,43,0.6) 70%, rgba(7,22,43,0.2) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 mb-5 animate-hero-eyebrow">
              <span className="w-1 h-4 bg-brand-red inline-block" />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/60">
                Emergency Response Infrastructure
              </span>
            </div>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight mb-6 animate-hero-heading">
              Connected Emergency Response for the Modern World.
            </h1>
            <p className="text-[17px] lg:text-[18px] text-white/70 leading-relaxed mb-8 max-w-[520px] animate-hero-desc">
              EMSTRAP is an integrated platform connecting organisations, cities and emergency services — from corporate safety to smart city infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 animate-hero-btn">
              <a
                href="#solutions"
                className="inline-flex items-center px-6 py-3 bg-brand-red text-white text-[14px] font-semibold rounded-[4px] hover:bg-[#CC1218] btn-smooth"
              >
                Explore Solutions
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white/35 text-white text-[14px] font-semibold rounded-[4px] hover:bg-white/10 btn-outline-smooth"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        id="solutions"
        ref={solutionsRef}
        className="bg-white py-20 lg:py-24 border-t border-border-default"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section header */}
          <div className="mb-12">
            <div className={`section-eyebrow-reveal ${solutionsInView ? 'is-visible' : ''} text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-3`}>
              Who We Serve
            </div>
            <h2 className={`section-heading-reveal ${solutionsInView ? 'is-visible' : ''} text-[28px] lg:text-[34px] font-bold text-content-primary leading-snug max-w-[540px]`}>
              Emergency response solutions for every stakeholder in the safety chain.
            </h2>
          </div>

          {/* Audience cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, idx) => (
              <div
                key={audience.path}
                className={`card-entry ${solutionsInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <Link
                  to={audience.path}
                  className="card-hover-box glass-card-interactive group rounded-[8px] overflow-hidden flex flex-col h-full"
                >
                  <div className="aspect-[16/10] bg-surface-light overflow-hidden">
                    <img
                      src={audience.image}
                      alt={audience.title}
                      className="w-full h-full object-cover card-zoom-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-content-secondary mb-2">
                      {audience.eyebrow}
                    </div>
                    <h3 className="text-[16px] font-bold text-content-primary mb-2 leading-snug">
                      {audience.title}
                    </h3>
                    <p className="text-[13px] text-content-secondary leading-[1.6] mb-4 flex-1">
                      {audience.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-blue-accent group-hover:gap-2.5 transition-all">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                        <path d="M2 7h10M8 3l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Card Banner Showcase */}
      <FloatingCardBanner
        pageSlug="default"
        title="EMSTRAP Multi-Agency Operations in Action"
        eyebrow="CONNECTED EMERGENCY ECOSYSTEM"
      />

      {/* Platform overview strip */}
      <section ref={platformRef} className="bg-surface-light py-14 border-t border-border-default">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {[
              { label: 'Emergency Response', desc: 'Real-time SOS and incident management' },
              { label: 'Intelligent Dispatch', desc: 'Smart ambulance and fleet assignment' },
              { label: 'Live Tracking', desc: 'GPS visibility across all responders' },
              { label: 'Multi-Agency Coordination', desc: 'Connect all emergency stakeholders' },
              { label: 'Analytics & Reporting', desc: 'Data-driven operational improvement' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 card-entry ${platformInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red mb-1" />
                <div className="text-[14px] font-semibold text-content-primary leading-snug">{item.label}</div>
                <div className="text-[12px] text-content-secondary leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="bg-navy-deep py-14 lg:py-16 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className={`glass-panel-dark p-8 sm:p-10 lg:p-12 rounded-[16px] border border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 section-reveal ${ctaInView ? 'is-visible' : ''}`}>
            <div>
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white mb-2">
                Ready to build better emergency infrastructure?
              </h2>
              <p className="text-[15px] text-white/70">
                Talk to an EMSTRAP specialist about your organisation's specific requirements.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-brand-red text-white text-[14px] font-semibold rounded-[4px] hover:bg-[#CC1218] btn-smooth whitespace-nowrap"
              >
                Request a Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-white/25 text-white/80 text-[14px] font-semibold rounded-[4px] hover:bg-white/10 btn-outline-smooth whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
