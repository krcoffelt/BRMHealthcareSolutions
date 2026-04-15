export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  whoItsFor: string;
  outcomes: string[];
};

export type FeeScheduleItem = {
  service: string;
  price: string;
  retainer: string;
};

export type EducationCategory = {
  title: string;
  description: string;
  items: string[];
};

export type TrustMetric = {
  value: string;
  label: string;
};

export type FacilityFeeItem = {
  service: string;
  estimatedHours: string;
  retainer: string;
};

export const siteContent = {
  companyName: "BRM Healthcare Solutions",
  tagline: "Respiratory Consulting, Agency Staffing, and Critical Care Credentialing",
  description:
    "Experienced respiratory consulting, agency staffing, education, and critical care credentialing support for facilities that need stronger clinical and financial performance.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/education", label: "Education" },
    { href: "/about", label: "About Me" },
    { href: "/book", label: "Book" },
  ] satisfies NavItem[],
  hero: {
    title: "Elite Respiratory Leadership. Proven Results. No Overhead.",
    subheadline:
      "BRM Healthcare Solutions delivers experienced respiratory consulting, agency staffing, and critical care credentialing so your facility gets the expertise of a seasoned director without the full-time cost.",
    supportingLine:
      "Trusted by facilities across the region. 5 consecutive Joint Commission surveys. Zero deficiencies.",
  },
  valueProposition: {
    title: "Your Respiratory Department, Optimized.",
    paragraphs: [
      "We don't just consult. We replace the gap in your respiratory leadership with over 18 years of critical care expertise, a Gold Standard clinical framework, and a hands-on operational approach that drives measurable results from day one.",
      "Whether you need interim leadership, staff education, billing compliance, or a full department overhaul, BRM brings the experience your patients and your bottom line demand.",
    ],
  },
  roiSection: {
    title: "A Typical Return on Investment in 2-3 Months.",
    intro:
      "BRM has generated over $112 million in increased billing for healthcare facilities through:",
    items: [
      "Financial and charge analysis",
      "Throughput efficiency improvements",
      "Readmission rate reduction programs",
      "Billing compliance and documentation review",
    ],
    closing:
      "The annual cost of BRM's retainer pays for itself fast. Most facilities see full ROI within 60-90 days.",
  },
  proofPoints: [
    "18+ years of respiratory and critical care experience",
    "9+ years of healthcare leadership and management experience",
    "$112M in proven P&L improvement through operational and billing analysis",
    "5 successful Joint Commission surveys in a row with zero deficiencies noted",
  ],
  trustMetrics: [
    {
      value: "$112M+",
      label: "Proven increase in billing revenue",
    },
    {
      value: "5 in a row",
      label: "Joint Commission surveys with zero deficiencies",
    },
    {
      value: "18+ years",
      label: "Critical care and respiratory leadership experience",
    },
    {
      value: "2-3 months",
      label: "Typical ROI on annual retainer cost",
    },
    {
      value: "95%+",
      label: "Staff retention rates across managed departments",
    },
  ] satisfies TrustMetric[],
  audiencePaths: [
    {
      title: "For Clinicians and Candidates",
      description:
        "Support for respiratory professionals seeking credentialing guidance, respiratory leadership insight, and a direct path to the next conversation.",
    },
    {
      title: "For Facilities and Healthcare Leaders",
      description:
        "Operational consulting, workforce support, and critical care credentialing help for healthcare organizations that need dependable execution.",
    },
  ],
  services: [
    {
      title: "Respiratory Consulting & Operations",
      description:
        "From KPI tracking and protocol development to supply chain optimization and length-of-stay reduction, BRM manages the full operational picture of your respiratory services.",
      whoItsFor:
        "Facilities that need respiratory leadership, operational improvement, and performance oversight without hiring a full-time director.",
      outcomes: [
        "KPI tracking and protocol development",
        "Supply chain, throughput, and length-of-stay optimization",
        "Hands-on respiratory department operations support",
      ],
    },
    {
      title: "Interim & Agency Staffing",
      description:
        "Credentialed respiratory therapists are available across ICU, ER, PICU, and NICU settings with 24-hour lead time when available.",
      whoItsFor:
        "Facilities that need experienced respiratory coverage and staffing support that can contribute from the first shift.",
      outcomes: [
        "Experienced and vetted respiratory staffing support",
        "Coverage across ICU, ER, PICU, and NICU settings",
        "Flexible staffing discussion tied to facility needs",
      ],
    },
    {
      title: "Compliance & Accreditation Readiness",
      description:
        "BRM prepares your team for TJC, CMS, CAP, and CLIA reviews and stands with you through every survey.",
      whoItsFor:
        "Organizations that need stronger compliance, documentation discipline, and survey readiness.",
      outcomes: [
        "5 consecutive Joint Commission surveys with zero deficiencies",
        "Survey preparation and live support",
        "Billing, documentation, and operational review",
      ],
    },
    {
      title: "Staff Education & Credentialing",
      description:
        "BLS and ACLS instruction, tracheostomy training, oxygen therapy education, competency programs, and skills orientation delivered by a certified educator with nearly two decades in critical care.",
      whoItsFor:
        "Facilities that need stronger onboarding, competency support, and education resources for respiratory teams.",
      outcomes: [
        "BLS, ACLS, tracheostomy, and oxygen therapy education",
        "Competency programs and skills orientation",
        "Credentialing and readiness support",
      ],
    },
    {
      title: "Leadership Development",
      description:
        "BRM develops your next generation of respiratory leaders through structured orientation programs, charge analysis, and evidence-based management frameworks.",
      whoItsFor:
        "Organizations building sustainable leadership depth and stronger day-to-day respiratory management.",
      outcomes: [
        "Structured orientation programs",
        "Charge analysis and leadership frameworks",
        "Long-term team development and operational consistency",
      ],
    },
  ] satisfies Service[],
  education: {
    intro:
      "A dedicated education section for videos, clinical guidelines, templates, and operational resources.",
    categories: [
      {
        title: "Video Library",
        description:
          "Recorded education sessions, onboarding walkthroughs, equipment training, and respiratory refreshers.",
        items: [
          "Orientation and onboarding videos",
          "Equipment and workflow walkthroughs",
          "Leadership and staff development sessions",
        ],
      },
      {
        title: "Guidelines & Protocols",
        description:
          "Clinical guidelines, department standards, competency references, and survey-readiness materials.",
        items: [
          "Respiratory care guidelines",
          "Competency and policy references",
          "Compliance and accreditation support documents",
        ],
      },
      {
        title: "Templates & Tools",
        description:
          "Operational templates to support KPI tracking, education planning, orientation, and leadership development.",
        items: [
          "KPI and quality tracking templates",
          "Orientation and education tools",
          "Leadership development resources",
        ],
      },
    ] satisfies EducationCategory[],
  },
  aboutSection: {
    title: "The Experience Your Patients Deserve. The Efficiency Your Organization Requires.",
    paragraphs: [
      "BRM Healthcare Solutions was founded on a simple premise: respiratory leadership should not be a gap in your operations. With over 18 years of critical care experience spanning community hospitals, rehabilitation facilities, and major regional medical centers, BRM brings a track record that speaks for itself.",
      "We've helped facilities restore CMS billing compliance, build service lines from the ground up, and achieve elite accreditation standards. BRM brings the expertise of a full-time director at a fraction of the cost, with the flexibility your facility needs to grow.",
    ],
  },
  finalCta: {
    title: "Ready to Elevate Your Respiratory Program?",
    description:
      "Let's talk about what BRM can do for your facility. Whether you need a one-time consultation or a full annual partnership, we'll build a plan around your specific needs and budget.",
    buttonLabel: "Schedule Your Free Discovery Call",
    note: "All services available individually or as part of our annual retainer, starting at $7,500/year.",
  },
  feeSchedule: {
    note: "Individual professional service costs are collected upfront.",
    individualServices: [
      {
        service: "Agency Staffing (Any floors, ER, ICU, PICU, NICU) with 24-hour lead time when available",
        price: "$100/hr",
        retainer: "$80/hr",
      },
      {
        service: "BLS (Up to 6)",
        price: "$75/Trainee",
        retainer: "$75/Trainee",
      },
      {
        service: "ACLS (Up to 6)",
        price: "$200/Trainee",
        retainer: "$200/Trainee",
      },
      {
        service: "CEU Class",
        price: "1 hr",
        retainer: "$200/credit",
      },
      {
        service: "Equipment Orientation",
        price: "8 hrs",
        retainer: "Annual Class",
      },
      {
        service: "Tracheostomy Education",
        price: "4 hrs",
        retainer: "Annual Class",
      },
      {
        service: "Oxygen Therapy Education",
        price: "8 hrs",
        retainer: "Annual Class",
      },
      {
        service: "General Consultation (In person, 1-hour minimum billed)",
        price: "$200/hr",
        retainer: "$175/hr",
      },
      {
        service: "General Patient Consultation (Direct patient consultation via phone, email, or secure text)",
        price: "$50/pt",
        retainer: "$35/pt",
      },
    ] satisfies FeeScheduleItem[],
    facilityPrograms: [
      {
        service: "Respiratory Guideline Review",
        estimatedHours: "2 hrs",
        retainer: "Included",
      },
      {
        service: "Respiratory Guideline Creation",
        estimatedHours: "16 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Supply Review (Full assessment and recommendations)",
        estimatedHours: "24 hrs",
        retainer: "Included",
      },
      {
        service: "Quality, documentation, and billing compliance review (TJC, CAP, CMS, CLIA)",
        estimatedHours: "40 hrs",
        retainer: "Annual Review",
      },
      {
        service: "Onsite support for TJC, CLIA, CAP, State, CMS, or other entity",
        estimatedHours: "40 hrs",
        retainer: "One Annually Included",
      },
      {
        service: "Tracheostomy door tools, discharge packet, and quick references",
        estimatedHours: "1 hr",
        retainer: "$250 one time",
      },
      {
        service: "Skill Orientation (Intubation, Art line insertion, ABGs, ETC)",
        estimatedHours: "24 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Interim Leadership",
        estimatedHours: "160 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Leadership Development and Orientation",
        estimatedHours: "160 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Charge Analysis and recommendations (P&L opportunity)",
        estimatedHours: "40 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Throughput Effectiveness Strategy and Analysis",
        estimatedHours: "8 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Readmission Rate Reduction Strategies and Program",
        estimatedHours: "24 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Service Line Creation Strategy and Consultation",
        estimatedHours: "40 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Length of Stay Reduction Program",
        estimatedHours: "40 hrs",
        retainer: "$100/hr",
      },
      {
        service: "Competencies (Initial, semi-annual, annual)",
        estimatedHours: "8 hrs/Trainee",
        retainer: "Annual Competencies",
      },
      {
        service: "Oxygen Tank Storage Efficiency Program (Door tools, guideline, and quick references)",
        estimatedHours: "40 hrs",
        retainer: "Included",
      },
    ] satisfies FacilityFeeItem[],
    annualProfessionalServicesFee: "$7,500/Yr",
    bedRangeLabel: "0-50 Beds Fee Schedule",
  },
  founder: {
    name: "Dustan Sprowl",
    title: "Founder, MBHA, RRT",
    summary:
      "Dustan Sprowl is a results-driven healthcare leader with over 9 years of management experience and more than 18 years of respiratory and critical care expertise. His background spans respiratory therapy, sleep, neurology, pulmonary lab oversight, and multi-site service leadership.",
    professionalSummary: [
      "Throughout his career, Dustan has focused on building gold-standard clinical protocols, standardizing operations, and improving both patient care and business performance. His leadership experience includes consolidating multi-site operations, optimizing staffing matrices, and supporting accreditation readiness across TJC, CMS, CLIA, and CAP environments.",
      "He has led teams through service line expansion, workflow redesign, billing compliance recovery, throughput improvement, and readmission reduction initiatives, helping drive $112 million in proven P&L improvement through financial and billing analysis.",
    ],
    mission:
      "BRM Healthcare Solutions exists to give clinicians and healthcare organizations access to respiratory-focused leadership, operational discipline, and credentialing support grounded in real critical care experience. Clients can expect practical guidance, strong standards, and a partner who understands both bedside realities and executive accountability.",
    credentials: [
      "MBHA, Jack Welch Management Institute",
      "Bachelor of Science, University of Kansas Medical Center",
      "Bachelor of Statistics and Analytics, University of Kansas Medical Center",
      "Registered Respiratory Therapist (RRT)",
      "Licensed in Kansas, Missouri, Louisiana, and Colorado",
      "BLS and ACLS Instructor",
      "NRP",
      "PALS",
    ],
    highlights: [
      "Shared Director over Respiratory Therapy, Sleep, Neurology, and Pulmonary Lab operations across Overland Park Regional and Menorah Medical Center since April 2023.",
      "Led the consolidation of oversight operations across two major facilities to improve staffing matrix design, efficiency, and service alignment.",
      "Delivered $112 million in proven P&L improvement through financial analysis, throughput efficiency, readmission reduction, and billing analysis.",
      "Brought departments into billing and documentation compliance with CMS and Joint Commission standards across multiple facilities.",
      "Built operations guides, annual competency programs, and instructor-led training that improved onboarding, productivity, and clinical readiness.",
    ],
    expertise: [
      "Respiratory care operations",
      "Service line expansion and market growth",
      "Staffing matrix optimization",
      "Critical care credentialing",
      "Clinical leadership",
      "Lean healthcare and workflow redesign",
      "Compliance readiness",
      "TJC, CMS, CLIA, and CAP accreditation support",
      "BLS and ACLS education",
      "Process improvement",
    ],
  },
  contact: {
    email: "brmhealthcaresolutions@gmail.com",
    phone: "(555) 555-0199",
    linkedin: "https://www.linkedin.com/company/brm-healthcare-solutions",
    bookingTitle: "Schedule Your Free Discovery Call",
    bookingHours: "Monday through Friday, 9:00 AM to 5:00 PM",
  },
};
