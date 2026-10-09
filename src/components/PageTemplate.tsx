import React, { useState } from 'react';
import { Link } from 'react-router';
import type { PageData } from '../data/pageData';
import { useInView } from '../hooks/useInView';
import FloatingCardBanner from './FloatingCardBanner';

// ─── Icon set ────────────────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  navigation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  'message-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'bar-chart': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

// ─── Title renderer (multi-line + highlight) ──────────────────────────────────
function renderTitle(lines: string[], highlight: string) {
  return lines.map((line, lineIdx) => {
    if (!highlight || !line.includes(highlight)) {
      return (
        <React.Fragment key={lineIdx}>
          {lineIdx > 0 && <br />}
          {line}
        </React.Fragment>
      );
    }
    const parts = line.split(highlight);
    return (
      <React.Fragment key={lineIdx}>
        {lineIdx > 0 && <br />}
        {parts[0]}
        <span className="text-brand-red">{highlight}</span>
        {parts[1]}
      </React.Fragment>
    );
  });
}

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-border-default">
      <path d="M3 9h12M10 4l5 5-5 5" />
    </svg>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ hero }: { hero: PageData['hero'] }) {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-navy-deep overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt=""
          className="w-full h-full object-cover animate-hero-image"
          loading="eager"
        />
        {/* Gradient overlay: dark left → fade right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(7,22,43,0.94) 0%, rgba(7,22,43,0.82) 35%, rgba(7,22,43,0.55) 60%, rgba(7,22,43,0.15) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 max-w-[640px]">
            {/* Eyebrow */}
            <div className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white/60 mb-5 animate-hero-eyebrow">
              {hero.eyebrow}
            </div>

            {/* Title */}
            <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold text-white leading-[1.08] tracking-tight mb-6 animate-hero-heading">
              {renderTitle(hero.titleLines, hero.highlight)}
            </h1>

            {/* Description */}
            <p className="text-[17px] lg:text-[18px] text-white/75 leading-relaxed mb-8 max-w-[520px] animate-hero-desc">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8 animate-hero-btn">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-brand-red text-white text-[14px] font-semibold rounded-[4px] hover:bg-[#CC1218] btn-smooth"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-white/40 text-white text-[14px] font-semibold rounded-[4px] hover:bg-white/10 btn-outline-smooth"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 animate-hero-tags">
              {hero.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  {i > 0 && (
                    <span className="text-white/25 text-[13px] hidden sm:inline">|</span>
                  )}
                  <a href="#" className="text-[13px] text-white/55 hover:text-white/80 transition-colors">
                    {tag}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Metric & Action Card */}
          {hero.heroCard && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] bg-slate-900/80 backdrop-blur-md rounded-[12px] border border-white/15 p-6 sm:p-7 shadow-2xl animate-hero-card">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/90">
                      {hero.heroCard.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-white/50 uppercase">
                    LIVE RESPONSE
                  </span>
                </div>

                {/* Metric Display */}
                <div className="bg-slate-950/70 rounded-[10px] border border-white/10 p-5 mb-5">
                  <div className="text-[38px] sm:text-[44px] font-extrabold text-white tracking-tight leading-none mb-2">
                    {hero.heroCard.metricValue}
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase text-white/85">
                    {hero.heroCard.metricLabel}
                  </div>
                </div>

                {/* Card Description */}
                <p className="text-[13.5px] sm:text-[14px] text-white/75 leading-relaxed mb-6">
                  {hero.heroCard.description}
                </p>

                {/* Red CTA Button with Arrow */}
                <a
                  href={hero.heroCard.actionLink || '#solutions'}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-brand-red text-white text-[14px] font-semibold rounded-[6px] hover:bg-[#CC1218] transition-all duration-200 shadow-md group"
                >
                  <span>{hero.heroCard.actionText}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Challenge card ───────────────────────────────────────────────────────────
// ─── Challenge card (Staggered on-scroll reveal + hover interaction) ──────────
function ChallengeCard({
  image,
  title,
  description,
  delayIndex = 0,
  isVisible = true,
}: {
  image: string;
  title: string;
  description: string;
  delayIndex?: number;
  isVisible?: boolean;
}) {
  return (
    <div
      className={`card-entry w-full h-full flex flex-col ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(delayIndex % 6) * 75}ms` }}
    >
      <div className="card-hover-box group rounded-[8px] overflow-hidden h-full flex flex-col bg-white border border-border-default shadow-xs select-none">
        <div className="relative aspect-[16/10] bg-surface-light overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover card-zoom-img"
            loading="lazy"
          />
        </div>
        {/* Subtle accent hairline */}
        <div className="w-full h-[2px] bg-border-light overflow-hidden">
          <div
            className={`h-full bg-brand-red transition-all duration-500 ease-out ${
              isVisible ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: `${(delayIndex % 6) * 75 + 150}ms` }}
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-[15px] font-semibold text-content-primary mb-2 leading-snug">{title}</h3>
          <p className="text-[13px] text-content-secondary leading-[1.6] flex-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Feature card (Staggered on-scroll reveal + hover interaction) ────────────
function FeatureCard({
  image,
  title,
  description,
  delayIndex = 0,
  isVisible = true,
}: {
  image: string;
  title: string;
  description: string;
  delayIndex?: number;
  isVisible?: boolean;
}) {
  return (
    <div
      className={`card-entry w-full h-full flex flex-col ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(delayIndex % 6) * 75}ms` }}
    >
      <div className="card-hover-box group rounded-[8px] overflow-hidden h-full flex flex-col bg-white border border-border-default shadow-xs select-none">
        <div className="relative aspect-[16/10] bg-surface-light overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover card-zoom-img"
            loading="lazy"
          />
        </div>
        {/* Solution Accent Line */}
        <div className="w-full h-[2px] bg-border-light overflow-hidden">
          <div
            className={`h-full bg-blue-accent transition-all duration-500 ease-out ${
              isVisible ? 'w-full' : 'w-0'
            }`}
            style={{ transitionDelay: `${(delayIndex % 6) * 75 + 150}ms` }}
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-[15px] font-semibold text-content-primary mb-2 leading-snug">{title}</h3>
          <p className="text-[13px] text-content-secondary leading-[1.6] flex-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({
  eyebrow,
  heading,
  description,
  isVisible = true,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  isVisible?: boolean;
}) {
  return (
    <div>
      <div className={`section-eyebrow-reveal ${isVisible ? 'is-visible' : ''} text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-3`}>
        {eyebrow}
      </div>
      <h2 className={`section-heading-reveal ${isVisible ? 'is-visible' : ''} text-[26px] lg:text-[30px] font-bold text-content-primary leading-snug mb-4`}>
        {heading}
      </h2>
      <p className={`section-desc-reveal ${isVisible ? 'is-visible' : ''} text-[14px] lg:text-[15px] text-content-secondary leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}

// ─── Benefit item ─────────────────────────────────────────────────────────────
function BenefitItem({
  iconName,
  title,
  description,
  delayIndex = 0,
  isVisible = true,
}: {
  iconName: string;
  title: string;
  description: string;
  delayIndex?: number;
  isVisible?: boolean;
}) {
  const isEmergency = ['zap', 'shield'].includes(iconName);
  return (
    <div
      className={`card-entry w-full h-full flex flex-col ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(delayIndex % 6) * 75}ms` }}
    >
      <div className="card-hover-box group flex flex-col gap-3.5 p-6 rounded-[8px] h-full w-full bg-white border border-border-default shadow-xs select-none">
        <div
          className={`w-11 h-11 flex items-center justify-center rounded-[6px] icon-hover-box flex-shrink-0 ${
            isEmergency ? 'bg-red-pale text-brand-red' : 'bg-surface-light text-blue-accent'
          }`}
        >
          <div className="w-5 h-5">{ICONS[iconName] ?? ICONS.clock}</div>
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-[15px] font-semibold text-content-primary mb-1.5 leading-snug">{title}</h3>
          <p className="text-[13px] text-content-secondary leading-[1.65] flex-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Ecosystem step ───────────────────────────────────────────────────────────
function EcosystemStep({
  step,
  index,
  total,
  isVisible = true,
}: {
  step: { image: string; title: string; description: string; alt?: string };
  index: number;
  total: number;
  isVisible?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 flex-shrink-0 step-entry ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      {/* Step content */}
      <div className="group flex flex-col items-center text-center w-[130px] sm:w-[150px]">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-border-default bg-surface-light mb-3 flex-shrink-0 step-photo-hover shadow-xs">
          <img
            src={step.image}
            alt={step.alt || step.title}
            className="w-full h-full object-cover card-zoom-img"
            loading="lazy"
          />
        </div>
        <div className="text-[13px] font-semibold text-content-primary mb-1 leading-snug">
          {step.title}
        </div>
        <div className="text-[12px] text-content-secondary leading-snug">
          {step.description}
        </div>
      </div>

      {/* Arrow between steps */}
      {index < total - 1 && (
        <div
          className={`flex items-center mt-8 flex-shrink-0 text-border-default step-arrow-entry ${
            isVisible ? 'is-visible' : ''
          }`}
          style={{ transitionDelay: `${index * 140 + 70}ms` }}
        >
          <ArrowRight />
        </div>
      )}
    </div>
  );
}

// ─── Section 01: Challenge ────────────────────────────────────────────────────
function ChallengeSection({ data }: { data: PageData['challenge'] }) {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-24 border-t border-border-default overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          <div className={`section-reveal ${inView ? 'is-visible' : ''}`}>
            <SectionHeader
              eyebrow="The Challenge"
              heading={data.heading}
              description={data.description}
              isVisible={inView}
            />
          </div>

          {/* Responsive Card Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.cards.map((card, idx) => (
              <ChallengeCard
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                delayIndex={idx}
                isVisible={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 02: How EMSTRAP Helps ───────────────────────────────────────────
function HowHelpsSection({ data }: { data: PageData['howHelps'] }) {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  return (
    <section ref={ref} className="bg-surface-light py-20 lg:py-24 border-t border-border-default overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          <div className={`section-reveal ${inView ? 'is-visible' : ''}`}>
            <SectionHeader
              eyebrow="How EMSTRAP Helps"
              heading={data.heading}
              description={data.description}
              isVisible={inView}
            />
          </div>

          {/* Responsive Card Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.cards.map((card, idx) => (
              <FeatureCard
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                delayIndex={idx}
                isVisible={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 03: Key Benefits ─────────────────────────────────────────────────
function BenefitsSection({ data }: { data: PageData['benefits'] }) {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-24 border-t border-border-default overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 mb-12">
          <div className={`section-reveal ${inView ? 'is-visible' : ''}`}>
            <SectionHeader
              eyebrow="Key Benefits"
              heading={data.heading}
              description={data.description}
              isVisible={inView}
            />
          </div>
          {/* Top right: decorative rule aligned cleanly */}
          <div className="hidden lg:flex items-start pt-2">
            <div className="w-full h-px bg-border-default mt-2" />
          </div>
        </div>

        {/* Responsive Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <BenefitItem
              key={item.title}
              iconName={item.iconName}
              title={item.title}
              description={item.description}
              delayIndex={idx}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 04: Ecosystem ────────────────────────────────────────────────────
function EcosystemSection({ data }: { data: PageData['ecosystem'] }) {
  const [ref, inView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  return (
    <section ref={ref} className="bg-surface-light py-20 lg:py-24 border-t border-border-default">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <div className={`section-eyebrow-reveal ${inView ? 'is-visible' : ''} text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-3`}>
            Connected Ecosystem
          </div>
          <h2 className={`section-heading-reveal ${inView ? 'is-visible' : ''} text-[26px] lg:text-[30px] font-bold text-content-primary leading-snug`}>
            {data.heading}
            {data.subheading && (
              <>
                <br />
                <span className="text-content-secondary font-normal">{data.subheading}</span>
              </>
            )}
          </h2>
        </div>

        {/* Steps - horizontally scrollable on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-max">
            {data.steps.map((step, i) => (
              <EcosystemStep
                key={step.title}
                step={step}
                index={i}
                total={data.steps.length}
                isVisible={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page CTA Banner ─────────────────────────────────────────────────────────
function CtaBanner() {
  const [ref, inView] = useInView({ threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  return (
    <section ref={ref} className="bg-navy-deep py-14 lg:py-16 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className={`glass-panel-dark p-8 sm:p-10 lg:p-12 rounded-[16px] border border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 section-reveal ${inView ? 'is-visible' : ''}`}>
          <div>
            <h2 className="text-[24px] lg:text-[28px] font-bold text-white mb-2">
              Ready to improve your emergency response operations?
            </h2>
            <p className="text-[15px] text-white/70">
              Speak with an EMSTRAP specialist to understand how the platform fits your needs.
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
  );
}

// ─── Page Template ────────────────────────────────────────────────────────────
export default function PageTemplate({ data }: { data: PageData }) {
  return (
    <>
      <Hero hero={data.hero} />
      <ChallengeSection data={data.challenge} />
      <FloatingCardBanner
        pageSlug={data.slug}
        showBadge={true}
        showMetrics={true}
        showAction={true}
      />
      <HowHelpsSection data={data.howHelps} />
      <BenefitsSection data={data.benefits} />
      <EcosystemSection data={data.ecosystem} />
      <CtaBanner />
    </>
  );
}
