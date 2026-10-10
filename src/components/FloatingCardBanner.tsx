import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';

export interface BannerCard {
  id: string;
  badge: string;
  badgeType?: 'live' | 'active' | 'verified';
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  metricValue?: string;
  metricLabel?: string;
  actionText?: string;
  actionLink?: string;
}

// ─── Cards Data per Page ──────────────────────────────────────────────────────
const BANNER_DATA: Record<string, BannerCard[]> = {
  'corporate-companies': [
    {
      id: 'corp-1',
      badge: '',
      image: '/images/banner/banner-corporate.jpg',
      imageAlt: 'Indian corporate campus emergency response team drill with floor safety marshals',
      eyebrow: 'WORKPLACE SAFETY & EVACUATION DRILL',
      title: 'Coordinated Campus Emergency & Evacuation Mesh',
      description: 'Empower trained floor marshals and medical ERT teams with instant silent alerts, real-time muster roll headcount, and synchronized hospital EMS dispatch during critical facility incidents.',
    },
    {
      id: 'corp-2',
      badge: 'HOSPITAL LINKED',
      badgeType: 'live',
      image: '/images/banner/banner-ambulance.jpg',
      imageAlt: 'Advanced life support ambulance team with stretcher ready for immediate transit',
      eyebrow: 'DEDICATED EMS INTEGRATION',
      title: 'Direct Tertiary Hospital & Ambulance Routing',
      description: 'Pre-designated trauma hospital routing with continuous vitals telemetry transmission and pre-arrival notification for severe industrial or office medical emergencies.',
    },
    {
      id: 'corp-3',
      badge: 'TRAFFIC PRIORITY',
      badgeType: 'active',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'Traffic command center coordinating transit corridor for emergency vehicles',
      eyebrow: 'PRIORITY ARTERIAL PASSAGE',
      title: 'Emergency Corridor Support for Critical Evacuations',
      description: 'Automated transit route telemetry shared directly with city traffic police control nodes to expedite medical transfers through congested metro arteries.',
    },
  ],

  'smart-cities': [
    {
      id: 'sc-1',
      badge: 'CITY COMMAND',
      badgeType: 'live',
      image: '/images/banner/banner-smartcities.jpg',
      imageAlt: 'Indian city intersection with emergency vehicles and smart city transit infrastructure',
      eyebrow: 'METROPOLITAN INCIDENT FABRIC',
      title: 'Unified Smart City Emergency Command Mesh',
      description: 'Unified emergency platform connecting 112/108 response centers, municipal transit systems, traffic police junctions, and civil defense forces into one synchronized command layer.',
      metricValue: '0-Lag',
      metricLabel: 'Tri-Service Sync',
      actionText: 'Explore Architecture',
      actionLink: '#solutions',
    },
    {
      id: 'sc-2',
      badge: 'GREEN CORRIDOR ACTIVE',
      badgeType: 'live',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'City traffic control room monitoring and synchronizing green corridors',
      eyebrow: 'ADAPTIVE TRAFFIC MANAGEMENT',
      title: 'Automated Dynamic Green Corridor Preemption',
      description: 'Real-time synchronization between moving emergency vehicles and ITMS traffic light networks to create obstacle-free arterial channels across congested junctions.',
    },
    {
      id: 'sc-3',
      badge: 'ACTIVE PATROL',
      badgeType: 'active',
      image: '/images/banner/banner-police.jpg',
      imageAlt: 'Indian police PCR patrol unit and emergency services coordinating on scene',
      eyebrow: 'FIELD FLEET TELEMATICS',
      title: 'Real-Time Citywide Fleet Telemetry & CAD',
      description: 'Full situational awareness across municipal ambulances, PCR patrol vans, fire response units, and emergency operations center video walls.',
    },
  ],

  'government-agencies': [
    {
      id: 'gov-1',
      badge: 'NATIONAL PLATFORM',
      badgeType: 'verified',
      image: '/images/banner/banner-government.jpg',
      imageAlt: 'Government emergency command and control center video wall with operators and police',
      eyebrow: 'INTER-AGENCY COMMAND & CONTROL',
      title: 'Statewide Emergency Operations Command Center',
      description: 'Unified multi-agency dashboard offering real-time situational awareness, inter-district resource allocation, and automated escalation protocols across state and district authorities.',
      metricValue: '100%',
      metricLabel: 'Inter-Agency Interoperability',
      actionText: 'Review Command Stack',
      actionLink: '#solutions',
    },
    {
      id: 'gov-2',
      badge: 'HEALTHCARE NETWORK',
      badgeType: 'live',
      image: '/images/banner/banner-ambulance.jpg',
      imageAlt: 'Force Traveller 108 ambulance with paramedics attending to medical emergency',
      eyebrow: 'DISTRICT HEALTH PREPAREDNESS',
      title: 'Statewide Emergency Bed & ICU Capacity Grid',
      description: 'Live integration with government and district tertiary hospitals for transparent casualty reception, trauma bay readiness, and emergency patient transfers.',
      metricValue: '24/7',
      metricLabel: 'Live Hospital Bed Grid',
      actionText: 'Explore Health Mesh',
      actionLink: '/ambulance-providers',
    },
    {
      id: 'gov-3',
      badge: 'CRITICAL RESPONSE',
      badgeType: 'active',
      image: '/images/banner/banner-police.jpg',
      imageAlt: 'Police patrol units and disaster response coordination on Indian roads',
      eyebrow: 'LAW ENFORCEMENT & PUBLIC ORDER',
      title: 'Unified Multi-Disciplinary Field Coordination',
      description: 'Synchronize state police units, municipal fire services, and ambulance providers on a single cryptographically secure communication network during mass incidents.',
      metricValue: '99.98%',
      metricLabel: 'Operational Uptime',
      actionText: 'View Protocols',
      actionLink: '/police-departments',
    },
  ],

  'ambulance-providers': [
    {
      id: 'amb-1',
      badge: 'LIVE CAD DISPATCH',
      badgeType: 'live',
      image: '/images/banner/banner-ambulance.jpg',
      imageAlt: 'Indian ambulance paramedic team operating high-tech medical transfer unit',
      eyebrow: 'INTELLIGENT FLEET CAD',
      title: 'AI-Powered Computer-Aided Ambulance Dispatch',
      description: 'Nearest available unit selection using predictive congestion algorithms, turn-by-turn route telemetry, and driver mobile console integration for minimum response times.',
      metricValue: '< 45s',
      metricLabel: 'Average Dispatch Latency',
      actionText: 'Explore CAD Suite',
      actionLink: '#solutions',
    },
    {
      id: 'amb-2',
      badge: 'GREEN CORRIDOR ACTIVE',
      badgeType: 'live',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'Traffic control center managing green wave corridor for ambulance transit',
      eyebrow: 'SIGNAL CLEARANCE',
      title: 'Automated Green Corridor Signal Clearance',
      description: 'Coordinate automatically with city traffic control centers to secure continuous green waves for high-acuity cardiac and trauma patient transport.',
    },
    {
      id: 'amb-3',
      badge: 'HOSPITAL HANDSHAKE',
      badgeType: 'verified',
      image: '/images/banner/banner-government.jpg',
      imageAlt: 'Emergency department operations console monitoring incoming ambulance vitals',
      eyebrow: 'PRE-HOSPITAL CARE',
      title: 'Digital Patient Handover & Tele-Triage',
      description: 'Transmit 12-lead ECG, live vitals, and patient assessments directly from the ambulance cabin to receiving ER trauma bays prior to physical arrival.',
      metricValue: '0-Delay',
      metricLabel: 'ER Trauma Handshake',
      actionText: 'Learn Handshake',
      actionLink: '#solutions',
    },
  ],

  'traffic-management': [
    {
      id: 'traf-1',
      badge: 'CORRIDOR INTELLIGENCE',
      badgeType: 'live',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'Female Indian traffic officer monitoring CCTV multi-screen console in control room',
      eyebrow: 'ADAPTIVE TRAFFIC MANAGEMENT (ITMS)',
      title: 'Dynamic Green Wave Corridor Automation',
      description: 'Intelligent signal timings triggered ahead of arriving emergency vehicles, minimizing braking, intersection bottlenecks, and cross-traffic hazards.',
      metricValue: '100%',
      metricLabel: 'Signal Preemption Accuracy',
      actionText: 'Explore ITMS Mesh',
      actionLink: '#solutions',
    },
    {
      id: 'traf-2',
      badge: 'CITYWIDE SURVEILLANCE',
      badgeType: 'active',
      image: '/images/banner/banner-smartcities.jpg',
      imageAlt: 'Smart city arterial intersection with automated surveillance and traffic nodes',
      eyebrow: 'METROPOLITAN SURVEILLANCE',
      title: 'Cross-Junction CCTV & Vehicle Path Tracking',
      description: 'Continuous monitoring along the emergency transit route with dynamic variable messaging signs (VMS) warning civilian motorists in advance.',
      metricValue: 'Real-time',
      metricLabel: 'VMS Motorist Alerts',
      actionText: 'View System Specs',
      actionLink: '/smart-cities',
    },
    {
      id: 'traf-3',
      badge: 'POLICE LIAISON',
      badgeType: 'active',
      image: '/images/banner/banner-police.jpg',
      imageAlt: 'Traffic police officers and emergency vehicles coordinating junction clearance',
      eyebrow: 'TACTICAL CLEARANCE',
      title: 'Traffic Police Pilot & Escort Synchronization',
      description: 'Direct coordination channel with field traffic officers to assist clearance at choke points and heavy Indian urban traffic bottlenecks.',
      metricValue: '< 60s',
      metricLabel: 'Manual Over-Ride Alert',
      actionText: 'View Escort Flow',
      actionLink: '/police-departments',
    },
  ],

  'police-departments': [
    {
      id: 'pol-1',
      badge: 'ACTIVE PATROL',
      badgeType: 'live',
      image: '/images/banner/banner-police.jpg',
      imageAlt: 'Indian police Mahindra Bolero patrol unit coordinating with ambulance on Indian road',
      eyebrow: 'DIAL 112 & PCR OPERATIONS',
      title: 'Unified Patrol Van Telematics & Incident CAD',
      description: 'Real-time GPS positioning, digital beat assignment, and automated nearest-patrol dispatching for critical law enforcement emergencies.',
      metricValue: '< 3 min',
      metricLabel: 'Nearest Patrol Dispatch',
      actionText: 'Explore Police Grid',
      actionLink: '#solutions',
    },
    {
      id: 'pol-2',
      badge: 'TAC-OPS COMMAND',
      badgeType: 'verified',
      image: '/images/banner/banner-government.jpg',
      imageAlt: 'Joint emergency operations command center with law enforcement personnel',
      eyebrow: 'UNIFIED EMERGENCY CONTROL',
      title: 'Synchronized Inter-Agency Emergency Mesh',
      description: 'Direct data sharing with fire brigade stations, municipal ambulances, and state disaster response forces (SDRF) during major public incidents.',
      metricValue: 'Tri-Service',
      metricLabel: 'Incident Command Desk',
      actionText: 'Review Tri-Service CAD',
      actionLink: '/government-agencies',
    },
    {
      id: 'pol-3',
      badge: 'GREEN CORRIDOR ACTIVE',
      badgeType: 'live',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'Traffic control room coordinating emergency perimeter route',
      eyebrow: 'ESCORT & ROUTE CLEARANCE',
      title: 'VIP & Critical Patient Escort Clearance',
      description: 'Coordinate perimeter lockdowns and high-speed green corridors with city traffic headquarters with millisecond telemetry accuracy.',
      metricValue: 'Millisecond',
      metricLabel: 'Signal Preemption Sync',
      actionText: 'View Route Security',
      actionLink: '/traffic-management',
    },
  ],

  // ─── Default / Home Page Curated Highlights ────────────────────────────────
  default: [
    {
      id: 'home-1',
      badge: 'CAD ACTIVE',
      badgeType: 'live',
      image: '/images/banner/banner-ambulance.jpg',
      imageAlt: 'Force Traveller 108 ambulance with paramedics attending in Indian street environment',
      eyebrow: 'INTELLIGENT MEDICAL DISPATCH',
      title: 'Sub-Second Emergency Ambulance Dispatch & Routing',
      description: 'AI-assisted Computer-Aided Dispatch synchronizing nearest ambulance units, traffic green corridors, and receiving hospital trauma teams in one unified operational flow.',
      metricValue: '< 45s',
      metricLabel: 'Dispatch Time',
      actionText: 'Explore CAD Suite',
      actionLink: '/ambulance-providers',
    },
    {
      id: 'home-2',
      badge: 'INTER-AGENCY MESH',
      badgeType: 'verified',
      image: '/images/banner/banner-government.jpg',
      imageAlt: 'Indian police and municipal disaster response officers collaborating on mobile dispatch',
      eyebrow: 'MULTI-AGENCY COORDINATION',
      title: 'Synchronized Police, Fire & Medical Response Mesh',
      description: 'Shared situational awareness protocol connecting dial 112/108 call-intake nodes, city traffic operations, and healthcare casualty wards on a single telemetry fabric.',
      metricValue: '100%',
      metricLabel: 'Tri-Service Sync',
      actionText: 'Explore Platform',
      actionLink: '/government-agencies',
    },
    {
      id: 'home-3',
      badge: 'GREEN CORRIDOR ACTIVE',
      badgeType: 'live',
      image: '/images/banner/banner-traffic.jpg',
      imageAlt: 'Traffic control room with officer managing live emergency corridor on CCTV screens',
      eyebrow: 'TRAFFIC PREEMPTION INTELLIGENCE',
      title: 'Automated Dynamic Green Wave Corridors',
      description: 'Synchronize signal timings across 45+ city intersections ahead of moving emergency vehicles, clearing paths and reducing transit time by up to 35%.',
      metricValue: '35%',
      metricLabel: 'Faster Response Transit',
      actionText: 'Traffic Solutions',
      actionLink: '/traffic-management',
    },
    {
      id: 'home-4',
      badge: '',
      image: '/images/banner/banner-corporate.jpg',
      imageAlt: 'Indian corporate campus emergency response drill with safety marshals and personnel',
      eyebrow: 'WORKPLACE SAFETY SHIELD',
      title: 'Comprehensive Corporate Incident Protection',
      description: 'Protect thousands of employees across multi-building campuses with instant silent panic alerts, floor marshal coordination, and direct EMS dispatch.',
    },
  ],
};

interface FloatingCardBannerProps {
  pageSlug?: string;
  cards?: BannerCard[];
  title?: string;
  eyebrow?: string;
  showEyebrowIcon?: boolean;
  showBadge?: boolean;
  showMetrics?: boolean;
  showAction?: boolean;
}

export default function FloatingCardBanner({
  pageSlug = 'default',
  cards: customCards,
  title = 'Live Emergency Operations in Action',
  eyebrow = 'CONNECTED EMERGENCY RESPONSE PLATFORM',
  showEyebrowIcon = false,
  showBadge = false,
  showMetrics = false,
  showAction = false,
}: FloatingCardBannerProps) {
  const cards = customCards ?? BANNER_DATA[pageSlug] ?? BANNER_DATA['default']!;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const activeCard = cards[currentIndex] ?? cards[0]!;

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused && cards.length > 1) {
      startTimer();
    }
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    resetTimer();
    setTimeout(() => setAnimating(false), 500);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    resetTimer();
    setTimeout(() => setAnimating(false), 500);
  };

  const handleGoTo = (index: number) => {
    if (animating || index === currentIndex) return;
    setAnimating(true);
    setCurrentIndex(index);
    resetTimer();
    setTimeout(() => setAnimating(false), 500);
  };

  // Auto-advance loop every 5.0s (5000ms), paused on hover
  useEffect(() => {
    if (isPaused || cards.length <= 1) return;
    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, cards.length]);

  return (
    <section
      className="relative py-16 lg:py-20 bg-white overflow-hidden border-t border-border-default"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="EMSTRAP Live Operations Showcase"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Banner Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-red mb-2.5">
              {showEyebrowIcon && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
              )}
              {eyebrow}
            </div>
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-content-primary tracking-tight leading-snug">
              {title}
            </h2>
          </div>

          {/* Controls: Prev / Next buttons & Progress Counter */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold text-content-secondary tracking-wider">
              <span className="text-content-primary font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              {' / '}
              {String(cards.length).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous operational showcase card"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-border-default text-content-primary hover:text-brand-red hover:border-brand-red shadow-xs transition-all duration-200 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 12L6 8L10 4" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next operational showcase card"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-border-default text-content-primary hover:text-brand-red hover:border-brand-red shadow-xs transition-all duration-200 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12L10 8L6 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ─── The Floating Card Container ─────────────────────── */}
        <div className="max-w-[1240px] mx-auto">
          <div className="banner-floating">
            <div className="bg-surface-light rounded-[20px] overflow-hidden border border-border-default shadow-md transition-all duration-500">
              <div
                key={activeCard.id}
                className="banner-card-slide-in grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[380px] lg:min-h-[420px]"
              >
                {/* Visual / Image Side */}
                <div className="relative lg:col-span-6 min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden bg-slate-100">
                  <img
                    src={activeCard.image}
                    alt={activeCard.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle right shadow on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/10 to-black/30 pointer-events-none" />

                  {/* Status Indicator Badge */}
                  {showBadge && activeCard.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-navy-deep/85 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.14em] text-white">
                          {activeCard.badge}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col ${
                    (showMetrics && activeCard.metricValue) || (showAction && activeCard.actionText)
                      ? 'justify-between'
                      : 'justify-center'
                  } bg-white border-t lg:border-t-0 lg:border-l border-border-default`}
                >
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-red mb-2">
                      {activeCard.eyebrow}
                    </div>
                    <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-content-primary tracking-tight leading-snug mb-4">
                      {activeCard.title}
                    </h3>
                    <p
                      className={`text-[14px] sm:text-[15px] text-content-secondary leading-relaxed ${
                        (showMetrics && activeCard.metricValue) || (showAction && activeCard.actionText)
                          ? 'mb-6'
                          : 'mb-0'
                      }`}
                    >
                      {activeCard.description}
                    </p>
                  </div>

                  {/* Metrics and Action Bar */}
                  {((showMetrics && activeCard.metricValue) || (showAction && activeCard.actionText)) && (
                    <div className="pt-6 border-t border-border-default flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Metric Card */}
                      {showMetrics && activeCard.metricValue && activeCard.metricLabel ? (
                        <div className="bg-surface-light px-4 py-2.5 rounded-[10px] border border-border-default shadow-xs inline-flex items-center gap-3">
                          <div className="text-[20px] font-extrabold text-content-primary tracking-tight">
                            {activeCard.metricValue}
                          </div>
                          <div className="h-6 w-px bg-border-default" />
                          <div className="text-[11px] font-medium uppercase tracking-wider text-content-secondary leading-tight">
                            {activeCard.metricLabel}
                          </div>
                        </div>
                      ) : (
                        <div />
                      )}

                      {/* Action link */}
                      {showAction && activeCard.actionText && activeCard.actionLink && (
                        <Link
                          to={activeCard.actionLink}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-red text-white text-[13px] font-semibold rounded-[4px] hover:bg-[#CC1218] btn-smooth whitespace-nowrap self-start sm:self-auto"
                        >
                          {activeCard.actionText}
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h8M7 3l4 4-4 4" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Side Navigation Arrow Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 text-content-primary hover:text-brand-red border border-border-default shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white hover:bg-slate-50 text-content-primary hover:text-brand-red border border-border-default shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ─── Dots / Bullet Indicator ────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleGoTo(idx)}
              aria-label={`Jump to slide ${idx + 1}: ${card.title}`}
              className={`cursor-pointer transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-8 h-2.5 bg-brand-red'
                  : 'w-2.5 h-2.5 bg-border-default hover:bg-content-secondary'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
