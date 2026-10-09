export interface CardItem {
  image: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  iconName: string;
  title: string;
  description: string;
}

export interface EcosystemStep {
  image: string;
  title: string;
  description: string;
  alt?: string;
}

export interface HeroCardData {
  badge: string;
  metricValue: string;
  metricLabel: string;
  description: string;
  actionText: string;
  actionLink?: string;
}

export interface PageData {
  slug: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tags: string[];
    backgroundImage: string;
    heroCard?: HeroCardData;
  };
  challenge: {
    heading: string;
    description: string;
    cards: CardItem[];
  };
  howHelps: {
    heading: string;
    description: string;
    cards: CardItem[];
  };
  benefits: {
    heading: string;
    description: string;
    items: BenefitItem[];
  };
  ecosystem: {
    heading: string;
    subheading: string;
    steps: EcosystemStep[];
  };
}

export const pages: PageData[] = [
  // ─── PAGE 1: Corporate Companies ─────────────────────────────────────────────
  {
    slug: 'corporate-companies',
    hero: {
      eyebrow: 'FOR CORPORATE COMPANIES',
      titleLines: ['A Safer Workplace', 'Starts With Faster Response.'],
      highlight: 'Faster Response.',
      description: 'EMSTRAP Shield helps organisations protect employees through integrated emergency response, medical assistance, fire safety and safety management.',
      primaryCta: 'Explore EMSTRAP Shield',
      secondaryCta: 'Request a Corporate Demo',
      tags: ['Employee Safety', 'Emergency Response', 'Fire Safety', 'Safety Management'],
      backgroundImage: '/images/hero-corporate.jpg',
      heroCard: {
        badge: 'ENTERPRISE READY',
        metricValue: '< 90s',
        metricLabel: 'CAMPUS EMT MOBILIZATION',
        description: 'Instant floor marshal coordination and automated EMS dispatch across corporate campuses.',
        actionText: 'Corporate Shield',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Modern cities face complex emergency challenges.',
      description: 'From medical emergencies and fire incidents to complex multi-site evacuation, corporate safety demands a coordinated, technology-driven approach.',
      cards: [
        {
          image: '/images/cards/corp-workplace-emergency.jpg',
          title: 'Employee Emergencies',
          description: 'Unpredictable incidents involving staff require an immediate, coordinated response with no room for communication gaps.',
        },
        {
          image: '/images/cards/corp-medical-response.jpg',
          title: 'Medical Incidents',
          description: 'Medical emergencies in the workplace need fast action and seamless coordination with ambulance and hospital services.',
        },
        {
          image: '/images/cards/corp-fire-response.jpg',
          title: 'Fire Incidents',
          description: 'Fire events demand organized evacuation procedures and rapid coordination with fire services to minimize harm.',
        },
        {
          image: '/images/cards/corp-evacuation.jpg',
          title: 'Emergency Evacuation',
          description: 'Multi-floor, multi-site facilities require structured and well-practiced evacuation protocols that workers can execute under pressure.',
        },
        {
          image: '/images/cards/corp-safety-training.jpg',
          title: 'Safety Training Gaps',
          description: 'Inadequate emergency training leaves employees unprepared, reducing response effectiveness when it matters most.',
        },
        {
          image: '/images/cards/corp-incident-documentation.jpg',
          title: 'Incident Reporting',
          description: 'Manual or paper-based incident records create accountability gaps and hinder post-incident analysis and compliance.',
        },
      ],
    },
    howHelps: {
      heading: 'A complete platform for workplace safety and emergency response.',
      description: 'EMSTRAP Shield integrates every layer of corporate emergency preparedness — from daily safety management to live incident response.',
      cards: [
        {
          image: '/images/cards/corp-employee-sos.jpg',
          title: 'Employee SOS',
          description: 'One-touch emergency activation for employees to trigger immediate assistance with real-time location sharing.',
        },
        {
          image: '/images/cards/corp-medical-support.jpg',
          title: 'Medical Emergency Support',
          description: 'Connect employees directly to ambulance services with location data and priority routing to the nearest hospital.',
        },
        {
          image: '/images/cards/corp-fire-panel.jpg',
          title: 'Fire Safety Management',
          description: 'Integrated fire incident management with evacuation tracking, headcount tools and fire service coordination.',
        },
        {
          image: '/images/cards/corp-briefing.jpg',
          title: 'Employee Training',
          description: 'Digital safety training programs that ensure every employee is prepared and aware of emergency procedures.',
        },
        {
          image: '/images/cards/corp-mock-drill.jpg',
          title: 'Mock Drills',
          description: 'Schedule and run structured emergency simulations with automated tracking, real-time monitoring and drill reporting.',
        },
        {
          image: '/images/cards/corp-safety-dashboard.jpg',
          title: 'Safety Management',
          description: 'A centralized platform for safety policies, incident records, compliance documentation and operational dashboards.',
        },
      ],
    },
    benefits: {
      heading: 'Build a safer and more prepared organization.',
      description: 'EMSTRAP Shield delivers measurable improvements across every dimension of workplace safety and emergency readiness.',
      items: [
        { iconName: 'zap', title: 'Faster Emergency Response', description: 'Direct digital emergency activation reduces response times and closes critical gaps in coordination.' },
        { iconName: 'shield', title: 'Improved Employee Safety', description: 'Every employee has direct access to emergency assistance in critical moments, regardless of location.' },
        { iconName: 'check-circle', title: 'Better Preparedness', description: 'Regular digital drills and structured training build a safety-ready workforce across all sites.' },
        { iconName: 'layers', title: 'Centralized Safety Management', description: 'Manage all safety operations, documentation and compliance from one connected platform.' },
        { iconName: 'users', title: 'Improved Emergency Coordination', description: 'Connect internal safety teams with external ambulance and emergency services seamlessly.' },
        { iconName: 'eye', title: 'Better Incident Visibility', description: 'Real-time incident monitoring gives safety managers complete situational awareness across all locations.' },
      ],
    },
    ecosystem: {
      heading: 'From preparedness to response.',
      subheading: 'A connected safety cycle.',
      steps: [
        {
          image: '/images/ecosystem/eco-planning.jpg',
          title: 'Safety Planning',
          description: 'Policies, protocols and responsibilities defined.',
          alt: 'Workplace safety inspection and evacuation plan review by safety professionals',
        },
        {
          image: '/images/ecosystem/eco-training.jpg',
          title: 'Employee Training',
          description: 'Staff trained through digital programs.',
          alt: 'Employees attending a real workplace safety training session lecture',
        },
        {
          image: '/images/ecosystem/eco-drill.jpg',
          title: 'Mock Drills',
          description: 'Simulations test readiness and identify gaps.',
          alt: 'Person using fire extinguisher during emergency evacuation fire drill practice',
        },
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Emergency Trigger',
          description: 'SOS activated or automated alert fired.',
          alt: 'Person activating emergency alert on a smartphone with SOS alert',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Response & Assistance',
          description: 'Coordinated internal and external response.',
          alt: 'Emergency responders and trained first-aid medical personnel assisting patient',
        },
        {
          image: '/images/ecosystem/eco-analytics.jpg',
          title: 'Reporting & Improvement',
          description: 'Digital records enable continuous improvement.',
          alt: 'Safety officer reviewing incident reports and workplace safety analytics on computer',
        },
      ],
    },
  },

  // ─── PAGE 2: Smart Cities ─────────────────────────────────────────────────────
  {
    slug: 'smart-cities',
    hero: {
      eyebrow: 'FOR SMART CITIES',
      titleLines: ['Building the Emergency', 'Infrastructure of Smarter Cities.'],
      highlight: 'Smarter Cities.',
      description: 'EMSTRAP connects emergency stakeholders into a unified city-level response ecosystem — from citizens and ambulances to hospitals, police and traffic management.',
      primaryCta: 'Partner With EMSTRAP',
      secondaryCta: 'Request a Demo',
      tags: ['Citizens', 'Ambulances', 'Hospitals', 'Police', 'Traffic Management', 'Emergency Control Centres'],
      backgroundImage: '/images/hero-smart-cities.jpg',
      heroCard: {
        badge: 'CITY COMMAND',
        metricValue: '0-Lag',
        metricLabel: 'TRI-SERVICE SYNC',
        description: 'Synchronized CAD layer connecting municipal 112/108 centers, police patrols, and traffic corridors.',
        actionText: 'Smart Cities Command',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Modern cities face complex emergency challenges.',
      description: 'Urban emergency systems are fragmented, siloed and ill-equipped to handle the coordinated demands of a growing city.',
      cards: [
        {
          image: '/images/cards/smartcity-ops-centre.jpg',
          title: 'Disconnected Emergency Systems',
          description: 'Ambulances, police, hospitals and traffic management often operate in separate silos with no shared communication layer.',
        },
        {
          image: '/images/cards/smartcity-traffic-congestion.jpg',
          title: 'Traffic Congestion',
          description: 'Emergency vehicles lose critical minutes navigating congested urban traffic without coordinated route support.',
        },
        {
          image: '/images/cards/smartcity-ambulance-traffic.jpg',
          title: 'Ambulance Delays',
          description: 'Without intelligent dispatch and routing, ambulance response times are longer than operationally necessary.',
        },
        {
          image: '/images/cards/smartcity-radio-comms.jpg',
          title: 'Fragmented Communication',
          description: 'Emergency personnel across agencies lack a unified communication and information-sharing platform.',
        },
        {
          image: '/images/cards/smartcity-aerial-grid.jpg',
          title: 'Limited City-Wide Visibility',
          description: 'No single operational view exists to monitor all active emergency situations across the city in real time.',
        },
        {
          image: '/images/cards/smartcity-multi-agency.jpg',
          title: 'Multi-Agency Independence',
          description: 'Independent agency operations create coordination failures that reduce the effectiveness of emergency response.',
        },
      ],
    },
    howHelps: {
      heading: 'A unified city-level response ecosystem.',
      description: 'EMSTRAP integrates every city emergency stakeholder into one connected platform with shared visibility, communication and coordination.',
      cards: [
        {
          image: '/images/cards/smartcity-citizen-access.jpg',
          title: 'Citizen Emergency Access',
          description: 'Give citizens a direct channel to activate emergency assistance with real-time location and incident data.',
        },
        {
          image: '/images/cards/smartcity-ambulance-integration.jpg',
          title: 'Ambulance Integration',
          description: 'Connect ambulance dispatch and operations to city-wide emergency requests with intelligent assignment.',
        },
        {
          image: '/images/cards/smartcity-hospital-coordination.jpg',
          title: 'Hospital Coordination',
          description: 'Notify hospitals ahead of patient arrival to prepare receiving teams and optimize care pathways.',
        },
        {
          image: '/images/cards/smartcity-police-integration.jpg',
          title: 'Police Integration',
          description: 'Equip police departments with real-time incident alerts, location intelligence and responder coordination.',
        },
        {
          image: '/images/cards/smartcity-traffic-coordination.jpg',
          title: 'Traffic Coordination',
          description: 'Enable traffic management teams to support emergency vehicle movement through corridor coordination.',
        },
        {
          image: '/images/cards/smartcity-control-centre.jpg',
          title: 'Emergency Control Centres',
          description: 'Provide control rooms with a unified operational dashboard for city-wide emergency oversight.',
        },
      ],
    },
    benefits: {
      heading: 'Towards safer, more resilient and smarter cities.',
      description: 'EMSTRAP delivers the connected infrastructure that modern cities need to respond effectively to every emergency.',
      items: [
        { iconName: 'eye', title: 'Unified Emergency Visibility', description: 'A single operational view of all active city emergencies across agencies and locations.' },
        { iconName: 'users', title: 'Better Agency Coordination', description: 'All emergency agencies operating from shared information in a connected response ecosystem.' },
        { iconName: 'zap', title: 'Faster Information Sharing', description: 'Real-time alerts and data flow between all city emergency stakeholders without delay.' },
        { iconName: 'navigation', title: 'Improved Emergency Mobility', description: 'Coordinated traffic and route intelligence supports faster emergency vehicle movement.' },
        { iconName: 'cpu', title: 'Centralized Operational Intelligence', description: 'Analytics and monitoring tools give city administrators the data to improve emergency systems.' },
        { iconName: 'layers', title: 'Scalable Emergency Infrastructure', description: 'A platform that grows with the city — adding new agencies and districts without complexity.' },
      ],
    },
    ecosystem: {
      heading: 'From citizen to resolution.',
      subheading: 'A connected city emergency journey.',
      steps: [
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Citizen Request',
          description: 'Emergency activated by citizen.',
          alt: 'Citizen activating emergency trigger alert on smartphone',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Ambulance Dispatch',
          description: 'Nearest unit assigned and en route.',
          alt: 'Emergency ambulance dispatched with responders assisting patient',
        },
        {
          image: '/images/ecosystem/eco-police.jpg',
          title: 'Police Notified',
          description: 'Incident alert shared with police.',
          alt: 'Uniformed police officer dispatched to scene',
        },
        {
          image: '/images/ecosystem/eco-traffic.jpg',
          title: 'Traffic Coordinated',
          description: 'Route cleared for emergency passage.',
          alt: 'Traffic management control clearing route for emergency vehicles',
        },
        {
          image: '/images/ecosystem/eco-hospital.jpg',
          title: 'Hospital Prepared',
          description: 'Medical team notified in advance.',
          alt: 'Hospital emergency department preparing for patient arrival',
        },
        {
          image: '/images/ecosystem/eco-resolution.jpg',
          title: 'Incident Resolved',
          description: 'Full city response cycle complete.',
          alt: 'Incident successfully resolved and logged in city command system',
        },
      ],
    },
  },

  // ─── PAGE 3: Government Agencies ─────────────────────────────────────────────
  {
    slug: 'government-agencies',
    hero: {
      eyebrow: 'FOR GOVERNMENT AGENCIES',
      titleLines: ['Connected Emergency', 'Infrastructure for Public Safety.'],
      highlight: 'Public Safety.',
      description: 'EMSTRAP provides government agencies with the technology to coordinate emergency response across departments, services and regions from a single unified platform.',
      primaryCta: 'Partner With EMSTRAP',
      secondaryCta: 'Request a Demo',
      tags: ['Departments', 'Integrated Response', 'Public Safety', 'Scalable Infrastructure'],
      backgroundImage: '/images/hero-government.jpg',
      heroCard: {
        badge: 'GOV SECURE',
        metricValue: '< 3 min',
        metricLabel: 'INTER-AGENCY COORDINATION',
        description: 'Inter-agency command mesh connecting police, disaster response, and health administrations.',
        actionText: 'Government Mesh',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Government emergency systems involve multiple moving parts.',
      description: 'Coordinating a government emergency response across departments, geographies and agencies requires infrastructure that most agencies lack.',
      cards: [
        {
          image: '/images/cards/gov-admin-complex.jpg',
          title: 'Multiple Departments',
          description: 'Emergency management spans health, transport, public safety and infrastructure — each with separate systems and processes.',
        },
        {
          image: '/images/cards/gov-multi-emergency-services.jpg',
          title: 'Multiple Emergency Services',
          description: 'Police, ambulance, fire and civil defense operate independently with limited shared operational visibility.',
        },
        {
          image: '/images/cards/gov-datacenter-servers.jpg',
          title: 'Fragmented Systems',
          description: 'Legacy and disconnected information systems prevent real-time data sharing during active emergency events.',
        },
        {
          image: '/images/cards/gov-regional-gis.jpg',
          title: 'Large Geographic Areas',
          description: 'Covering wide territories with limited resources requires intelligent coordination tools that paper and radio cannot provide.',
        },
        {
          image: '/images/cards/gov-crisis-briefing.jpg',
          title: 'High Coordination Requirements',
          description: 'Complex multi-agency events demand structured command and communication frameworks to avoid response failures.',
        },
        {
          image: '/images/cards/gov-command-wall.jpg',
          title: 'Limited Centralized Visibility',
          description: 'Without a unified operational view, senior officials cannot effectively monitor and manage unfolding emergency situations.',
        },
      ],
    },
    howHelps: {
      heading: 'A unified platform for government emergency coordination.',
      description: 'EMSTRAP gives government agencies a centralized, technology-driven foundation for managing public emergency response at scale.',
      cards: [
        {
          image: '/images/cards/gov-unified-coordination.jpg',
          title: 'Unified Emergency Coordination',
          description: 'A single platform connecting all government emergency services with shared alerts, incidents and response tracking.',
        },
        {
          image: '/images/cards/gov-state-command-centre.jpg',
          title: 'Command Centre',
          description: 'A centralized operations dashboard for senior officials to monitor all active incidents and direct resources.',
        },
        {
          image: '/images/cards/gov-multi-agency-coordination.jpg',
          title: 'Multi-Agency Coordination',
          description: 'Connect police, ambulance, hospitals, traffic authorities and emergency services on one operational network.',
        },
        {
          image: '/images/cards/gov-analytics.jpg',
          title: 'Analytics & Reporting',
          description: 'Operational data and incident analytics to support evidence-based emergency management decisions.',
        },
        {
          image: '/images/cards/gov-cloud-infra.jpg',
          title: 'Scalable Infrastructure',
          description: 'Deploy across districts, regions or the entire national emergency management system with consistent architecture.',
        },
        {
          image: '/images/cards/gov-audit-records.jpg',
          title: 'Digital Incident Records',
          description: 'End-to-end digital records for every emergency event, supporting audit, compliance and post-incident review.',
        },
      ],
    },
    benefits: {
      heading: 'Strong public safety through better coordination.',
      description: 'EMSTRAP gives governments the operational foundation to protect citizens and manage emergencies with precision and accountability.',
      items: [
        { iconName: 'users', title: 'Better Public Emergency Coordination', description: 'All government emergency services connected and coordinating in real time from one platform.' },
        { iconName: 'eye', title: 'Centralized Operational Visibility', description: 'Senior officials and commanders have a live, unified view of all active emergency situations.' },
        { iconName: 'message-circle', title: 'Improved Inter-Agency Communication', description: 'Structured information flows eliminate the communication gaps that cause coordination failures.' },
        { iconName: 'database', title: 'Digital Emergency Records', description: 'Complete digital audit trail for every incident supports accountability and continuous improvement.' },
        { iconName: 'layers', title: 'Scalable Infrastructure', description: 'Platform scales from district-level deployment to national emergency management systems.' },
        { iconName: 'bar-chart', title: 'Data-Driven Emergency Management', description: 'Analytics and reporting tools help agencies improve performance and justify resource allocation.' },
      ],
    },
    ecosystem: {
      heading: 'Towards safer communities and stronger governance.',
      subheading: 'A coordinated public emergency lifecycle.',
      steps: [
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Incident Report',
          description: 'Public emergency reported.',
          alt: 'Emergency reported on mobile alert system',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Multi-Agency Response',
          description: 'All agencies simultaneously notified.',
          alt: 'Emergency responders deployed for coordinated assistance',
        },
        {
          image: '/images/ecosystem/eco-analytics.jpg',
          title: 'Real-Time Monitoring',
          description: 'Command centre tracks all responders.',
          alt: 'Command center safety officer monitoring emergency response and analytics',
        },
        {
          image: '/images/ecosystem/eco-police.jpg',
          title: 'On-Ground Action',
          description: 'Coordinated field response delivered.',
          alt: 'Police officers and field responders delivering on-ground action',
        },
        {
          image: '/images/ecosystem/eco-hospital.jpg',
          title: 'Incident Resolved',
          description: 'Emergency closed and recorded.',
          alt: 'Emergency medical care completed and case closed',
        },
        {
          image: '/images/ecosystem/eco-resolution.jpg',
          title: 'Safer Communities',
          description: 'Data drives future improvement.',
          alt: 'Incident data and reporting driving safer communities',
        },
      ],
    },
  },

  // ─── PAGE 4: Ambulance Providers ─────────────────────────────────────────────
  {
    slug: 'ambulance-providers',
    hero: {
      eyebrow: 'FOR AMBULANCE PROVIDERS',
      titleLines: ['Move Faster.', 'Respond Smarter.'],
      highlight: 'Respond Smarter.',
      description: 'EMSTRAP helps ambulance providers receive, manage, prioritize and respond to emergency requests through intelligent dispatch, real-time tracking and connected hospital coordination.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request a Demo',
      tags: ['Ambulance Providers', 'Hospitals', 'Healthcare Networks'],
      backgroundImage: '/images/hero-ambulance.jpg',
      heroCard: {
        badge: 'LIVE DISPATCH',
        metricValue: '< 6 min',
        metricLabel: 'DYNAMIC EMS ETA',
        description: 'Predictive computer-aided ambulance dispatch with turn-by-turn routing and ER hospital pre-alert.',
        actionText: 'Ambulance Fleet',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Ambulance operations face real-world challenges every day.',
      description: 'From manual dispatch and traffic delays to gaps in hospital communication, ambulance providers need smarter operational tools.',
      cards: [
        {
          image: '/images/cards/amb-call-taker.jpg',
          title: 'Manual Request Handling',
          description: 'Phone-based emergency intake creates delays and errors in capturing accurate incident information and location data.',
        },
        {
          image: '/images/cards/amb-gps-tracking.jpg',
          title: 'Ambulance Identification',
          description: 'Dispatchers struggle to identify the nearest available ambulance in real time without a live fleet visibility tool.',
        },
        {
          image: '/images/cards/amb-traffic-delays.jpg',
          title: 'Traffic-Related Delays',
          description: 'Ambulances lose critical minutes navigating urban congestion without intelligent route guidance and traffic coordination.',
        },
        {
          image: '/images/cards/amb-dispatch-console.jpg',
          title: 'Limited Operational Visibility',
          description: 'Managers have no real-time view of fleet status, active trips or driver availability across the operation.',
        },
        {
          image: '/images/cards/amb-paramedic-vitals.jpg',
          title: 'Hospital Communication Gaps',
          description: 'Hospitals receive little or no advance notice of incoming patients, reducing their ability to prepare receiving teams.',
        },
        {
          image: '/images/cards/amb-paper-logs.jpg',
          title: 'Limited Analytics',
          description: 'Without digital records and operational data, providers cannot measure performance or identify systemic inefficiencies.',
        },
      ],
    },
    howHelps: {
      heading: 'A connected platform for smarter ambulance operations.',
      description: 'EMSTRAP integrates every stage of the ambulance emergency lifecycle — from request intake to patient handover and post-incident reporting.',
      cards: [
        {
          image: '/images/cards/amb-cad-dispatch.jpg',
          title: 'Intelligent Emergency Dispatch',
          description: 'Automated emergency intake with smart assignment of the nearest available ambulance based on live fleet data.',
        },
        {
          image: '/images/cards/traffic-cctv-monitoring.jpg',
          title: 'Real-Time GPS Tracking',
          description: 'Live location monitoring of every ambulance in the fleet from a centralized dispatch dashboard.',
        },
        {
          image: '/images/cards/amb-navigation.jpg',
          title: 'Smart Routing',
          description: 'Route optimization and traffic coordination to minimize response times for every active emergency.',
        },
        {
          image: '/images/cards/amb-hospital-handover.jpg',
          title: 'Hospital Coordination',
          description: 'Automatic advance notifications to receiving hospitals with patient status and estimated arrival time.',
        },
        {
          image: '/images/cards/amb-driver-tablet.jpg',
          title: 'Driver Dashboard',
          description: 'Mobile-first driver interface with navigation, job status updates and direct communication tools.',
        },
        {
          image: '/images/cards/amb-analytics.jpg',
          title: 'Operational Analytics',
          description: 'Trip records, response time data and fleet utilization reports to support operational improvement.',
        },
      ],
    },
    benefits: {
      heading: 'Built for faster, more efficient emergency response.',
      description: 'EMSTRAP delivers improvements across every dimension of ambulance operations — from first call to final record.',
      items: [
        { iconName: 'zap', title: 'Faster Emergency Coordination', description: 'Automated dispatch and smart routing significantly reduce time from call to ambulance arrival.' },
        { iconName: 'truck', title: 'Better Ambulance Utilization', description: 'Live fleet visibility ensures optimal assignment and reduces idle time across operations.' },
        { iconName: 'eye', title: 'Real-Time Fleet Visibility', description: 'Managers have a complete live view of all ambulances, drivers and active emergencies.' },
        { iconName: 'message-circle', title: 'Improved Driver Communication', description: 'Structured digital communication replaces fragmented radio contact for all field personnel.' },
        { iconName: 'shield', title: 'Better Hospital Coordination', description: 'Advance patient notifications enable hospitals to prepare faster and deliver better care.' },
        { iconName: 'database', title: 'Digital Operational Records', description: 'Every trip, dispatch and incident is digitally recorded for compliance and operational review.' },
      ],
    },
    ecosystem: {
      heading: 'From request to hospital.',
      subheading: 'A unified ambulance journey.',
      steps: [
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Emergency Request',
          description: 'Incident reported and received.',
          alt: 'Emergency medical request activated on smartphone',
        },
        {
          image: '/images/ecosystem/eco-analytics.jpg',
          title: 'Dispatch & Assignment',
          description: 'Nearest ambulance assigned.',
          alt: 'Operations dispatcher assigning nearest ambulance at computer console',
        },
        {
          image: '/images/ecosystem/eco-traffic.jpg',
          title: 'En Route',
          description: 'Ambulance navigating to scene.',
          alt: 'Ambulance navigating traffic corridor toward emergency scene',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Patient Pickup',
          description: 'Patient assessed and secured.',
          alt: 'Paramedics and medical responders assisting patient on stretcher',
        },
        {
          image: '/images/ecosystem/eco-hospital.jpg',
          title: 'Hospital Coordination',
          description: 'Medical team pre-notified.',
          alt: 'Hospital trauma team pre-notified with vitals',
        },
        {
          image: '/images/ecosystem/eco-resolution.jpg',
          title: 'Patient Arrival',
          description: 'Handover completed, records filed.',
          alt: 'Patient arrival at emergency department and digital records filed',
        },
      ],
    },
  },

  // ─── PAGE 5: Traffic Management ───────────────────────────────────────────────
  {
    slug: 'traffic-management',
    hero: {
      eyebrow: 'FOR TRAFFIC MANAGEMENT',
      titleLines: ['Clear the Way for', 'Emergency Response.'],
      highlight: 'Emergency Response.',
      description: 'EMSTRAP enables traffic management teams to coordinate with emergency responders and support faster movement of emergency vehicles through live routing and corridor intelligence.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request a Demo',
      tags: ['Traffic Control Centers', 'Smart Cities', 'Emergency Responders', 'Connected Road Networks'],
      backgroundImage: '/images/hero-traffic.jpg',
      heroCard: {
        badge: 'GREEN CORRIDOR',
        metricValue: '42%',
        metricLabel: 'FASTER TRANSIT CLEARANCE',
        description: 'Automated green-wave signal preemption for emergency transit through dense urban intersections.',
        actionText: 'Traffic Solutions',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Traffic management faces real-world emergency challenges.',
      description: 'Without live awareness of emergency vehicle locations and coordinated route tools, traffic management cannot support emergency response effectively.',
      cards: [
        {
          image: '/images/cards/traffic-city-jam.jpg',
          title: 'Traffic Congestion',
          description: 'Dense urban traffic directly impacts emergency response times without proactive route management tools.',
        },
        {
          image: '/images/cards/traffic-emergency-intersection.jpg',
          title: 'Emergency Vehicles at Intersections',
          description: 'Ambulances and emergency vehicles lose critical time at signalized intersections without priority coordination.',
        },
        {
          image: '/images/cards/traffic-cctv-monitoring.jpg',
          title: 'No Real-Time Ambulance Visibility',
          description: 'Traffic operators have no live view of ambulance locations or active emergency routes in their control area.',
        },
        {
          image: '/images/cards/traffic-manual-radio.jpg',
          title: 'Manual Coordination',
          description: 'Coordination between traffic control and emergency responders relies on phone calls and radio with no shared data layer.',
        },
        {
          image: '/images/cards/traffic-route-awareness.jpg',
          title: 'Limited Emergency Route Awareness',
          description: 'Traffic controllers lack the tools to identify optimal emergency corridors and act on them proactively.',
        },
      ],
    },
    howHelps: {
      heading: 'A connected platform for smarter traffic management.',
      description: 'EMSTRAP gives traffic management teams the live data and coordination tools to actively support emergency vehicle movement.',
      cards: [
        {
          image: '/images/cards/traffic-telemetry.jpg',
          title: 'Emergency Vehicle Tracking',
          description: 'Live GPS tracking of all active emergency vehicles visible to traffic control centre operators.',
        },
        {
          image: '/images/cards/traffic-route-intelligence.jpg',
          title: 'Emergency Route Intelligence',
          description: 'Automated identification of optimal emergency vehicle routes based on live traffic conditions.',
        },
        {
          image: '/images/cards/traffic-corridor-coordination.jpg',
          title: 'Traffic Coordination',
          description: 'Structured tools for traffic operators to manage flows and support emergency response in real time.',
        },
        {
          image: '/images/cards/traffic-green-corridor.jpg',
          title: 'Green Corridor Support',
          description: 'Coordinate signal priority and corridor clearance to support unobstructed emergency vehicle movement.',
        },
        {
          image: '/images/cards/traffic-live-map.jpg',
          title: 'Live Emergency Map',
          description: 'A real-time operational map showing active incidents, emergency vehicles and route status for all operators.',
        },
      ],
    },
    benefits: {
      heading: 'Support faster and safer emergency movement.',
      description: 'EMSTRAP gives traffic management teams a meaningful role in the emergency response chain with tools built for their operational context.',
      items: [
        { iconName: 'eye', title: 'Better Emergency Route Visibility', description: 'Live view of all active emergency vehicles and optimal routes across the city road network.' },
        { iconName: 'zap', title: 'Faster Traffic Coordination', description: 'Digital tools replace radio-based coordination to support faster emergency vehicle passage.' },
        { iconName: 'navigation', title: 'Improved Emergency Vehicle Movement', description: 'Green corridors and signal coordination reduce obstruction for ambulances and emergency services.' },
        { iconName: 'cpu', title: 'Better Situational Awareness', description: 'Operators see a live, comprehensive view of all active emergency events on their network.' },
        { iconName: 'users', title: 'Improved Collaboration With Responders', description: 'A shared data layer connects traffic operators with ambulance, police and emergency services.' },
      ],
    },
    ecosystem: {
      heading: 'From emergency activation to destination.',
      subheading: 'A coordinated response journey.',
      steps: [
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Emergency Activated',
          description: 'Incident reported, dispatch triggered.',
          alt: 'Emergency alert activated triggering transit clearance',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Ambulance En Route',
          description: 'Unit assigned and moving.',
          alt: 'Ambulance unit en route to incident destination',
        },
        {
          image: '/images/ecosystem/eco-traffic.jpg',
          title: 'Traffic Coordination',
          description: 'Operator alerted, route identified.',
          alt: 'Traffic control room coordinating emergency route',
        },
        {
          image: '/images/ecosystem/eco-analytics.jpg',
          title: 'Green Corridor',
          description: 'Signal priority and clearance activated.',
          alt: 'Traffic controller activating green corridor signal priority',
        },
        {
          image: '/images/ecosystem/eco-police.jpg',
          title: 'Junction Clearance',
          description: 'Traffic personnel facilitate clear passage.',
          alt: 'Traffic officers clearing intersections for emergency passage',
        },
        {
          image: '/images/ecosystem/eco-resolution.jpg',
          title: 'Destination Reached',
          description: 'Ambulance arrives at scene or hospital.',
          alt: 'Emergency vehicle reaches hospital safely without delays',
        },
      ],
    },
  },

  // ─── PAGE 6: Police Departments ───────────────────────────────────────────────
  {
    slug: 'police-departments',
    hero: {
      eyebrow: 'FOR POLICE DEPARTMENTS',
      titleLines: ['Connect Every', 'Emergency Response Team.'],
      highlight: 'Emergency Response Team.',
      description: 'EMSTRAP helps police departments receive emergency information faster, understand incident locations and coordinate with ambulances, hospitals and other responders.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request a Demo',
      tags: ['Ambulance Services', 'Hospitals', 'Traffic Authorities', 'Emergency Control Rooms'],
      backgroundImage: '/images/hero-police.jpg',
      heroCard: {
        badge: 'POLICE DISPATCH',
        metricValue: '< 2 min',
        metricLabel: 'PCR UNIT MOBILIZATION',
        description: 'Instant incident alert routing to nearest patrol units and unified multi-responder map sync.',
        actionText: 'Police Command',
        actionLink: '#solutions',
      },
    },
    challenge: {
      heading: 'Police departments face critical operational challenges.',
      description: 'Delayed information, fragmented systems and limited coordination tools reduce police effectiveness in emergency response.',
      cards: [
        {
          image: '/images/cards/police-dispatch-intake.jpg',
          title: 'Delayed Incident Information',
          description: 'Officers and dispatch centres receive incident reports through fragmented channels with time-critical information often delayed.',
        },
        {
          image: '/images/cards/police-fragmented-screens.jpg',
          title: 'Fragmented Communication',
          description: 'Police, ambulance and hospital communication runs through separate systems with no unified information layer.',
        },
        {
          image: '/images/cards/police-realtime-visibility.jpg',
          title: 'Limited Real-Time Visibility',
          description: 'Without live tracking tools, police command centres cannot monitor officer positions and active incident status simultaneously.',
        },
        {
          image: '/images/cards/police-multi-responder.jpg',
          title: 'Multi-Responder Coordination',
          description: 'Coordinating police, ambulance and other services at the same incident requires structured tools that radio alone cannot provide.',
        },
        {
          image: '/images/cards/police-case-records.jpg',
          title: 'Manual Incident Records',
          description: 'Paper-based or disconnected record systems create compliance gaps and make post-incident review time-consuming.',
        },
        {
          image: '/images/cards/police-unified-info.jpg',
          title: 'Lack of Unified Emergency Information',
          description: 'Officers on the ground and commanders at HQ work from different, incomplete versions of the same incident picture.',
        },
      ],
    },
    howHelps: {
      heading: 'A connected platform for smarter policing.',
      description: 'EMSTRAP gives police departments the real-time information and coordination tools needed to respond faster and work effectively with other emergency services.',
      cards: [
        {
          image: '/images/cards/police-mobile-alert.jpg',
          title: 'Real-Time Incident Alerts',
          description: 'Instant digital alerts for new emergencies with location data, incident type and status updates in real time.',
        },
        {
          image: '/images/cards/police-gis-map.jpg',
          title: 'Location Intelligence',
          description: 'Live mapping of active incidents, officer positions and other emergency responders on a shared operational map.',
        },
        {
          image: '/images/cards/police-responder-coordination.jpg',
          title: 'Responder Coordination',
          description: 'Coordinate police response with ambulance, hospital and traffic management through one connected platform.',
        },
        {
          image: '/images/cards/gov-command-wall.jpg',
          title: 'Incident Monitoring',
          description: 'A live dashboard showing all active incidents, assigned resources and real-time status updates for command personnel.',
        },
        {
          image: '/images/cards/police-digital-records.jpg',
          title: 'Digital Incident Records',
          description: 'Complete digital documentation for every incident from first alert through to resolution and post-incident review.',
        },
      ],
    },
    benefits: {
      heading: 'Support safer cities through better coordination.',
      description: 'EMSTRAP equips police departments with the tools to respond faster, coordinate better and maintain complete operational awareness.',
      items: [
        { iconName: 'zap', title: 'Faster Incident Awareness', description: 'Real-time digital alerts ensure police receive incident information the moment it is reported.' },
        { iconName: 'users', title: 'Better Field Coordination', description: 'Officers and commanders work from the same live incident picture for more effective response.' },
        { iconName: 'message-circle', title: 'Improved Emergency Communication', description: 'Structured digital communication replaces fragmented radio contact across all active incidents.' },
        { iconName: 'eye', title: 'Better Situational Awareness', description: 'Live map views give commanders complete visibility of field operations during active emergencies.' },
        { iconName: 'layers', title: 'Centralized Incident Information', description: 'All incident data consolidated in one platform accessible to dispatch, field units and command.' },
        { iconName: 'database', title: 'Digital Response Records', description: 'Comprehensive digital records support compliance, audit and post-incident improvement reviews.' },
      ],
    },
    ecosystem: {
      heading: 'From incident to resolution.',
      subheading: 'All responders connected.',
      steps: [
        {
          image: '/images/ecosystem/eco-trigger.jpg',
          title: 'Incident Report',
          description: 'Emergency reported and logged.',
          alt: 'Emergency reported and logged into police dispatch system',
        },
        {
          image: '/images/ecosystem/eco-police.jpg',
          title: 'Police Department',
          description: 'Officers alerted and dispatched.',
          alt: 'Police officer alerted and dispatched to scene',
        },
        {
          image: '/images/ecosystem/eco-response.jpg',
          title: 'Ambulance Services',
          description: 'Medical response coordinated.',
          alt: 'Ambulance medical response coordinated simultaneously',
        },
        {
          image: '/images/ecosystem/eco-traffic.jpg',
          title: 'Traffic Authorities',
          description: 'Route support activated.',
          alt: 'Traffic authorities clearing route and securing perimeter',
        },
        {
          image: '/images/ecosystem/eco-hospital.jpg',
          title: 'Hospitals',
          description: 'Medical teams pre-notified.',
          alt: 'Hospital emergency teams pre-notified for incoming casualties',
        },
        {
          image: '/images/ecosystem/eco-resolution.jpg',
          title: 'Incident Resolution',
          description: 'All responders stand down, records filed.',
          alt: 'Incident resolved with comprehensive digital records filed',
        },
      ],
    },
  },
];

export function getPageData(slug: string): PageData | undefined {
  return pages.find(p => p.slug === slug);
}
