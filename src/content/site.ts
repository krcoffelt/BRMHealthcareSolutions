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

export type FacilityFeeItem = {
  service: string;
  estimatedHours: string;
  retainer: string;
};

export const siteContent = {
  companyName: "BRM Healthcare Solutions",
  tagline: "Respiratory Consulting, Agency Staffing, and Critical Care Credentialing",
  description:
    "Clinical staffing support, respiratory expertise, and credentialing guidance for healthcare professionals and the organizations that rely on them.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Me" },
    { href: "/book", label: "Book" },
  ] satisfies NavItem[],
  proofPoints: [
    "19 years of critical care expertise",
    "9+ years of healthcare leadership and management experience",
    "More than $112M in financial growth supported",
    "Retention rates above 95% with a 36% quality improvement lift",
  ],
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
      title: "Agency Staffing",
      description:
        "Agency staffing remains part of the BRM Healthcare Solutions service mix and can be discussed directly, even though this first version of the site is not focused on detailing staffing workflows.",
      whoItsFor:
        "Clinicians and facilities that want to discuss respiratory staffing availability at a high level.",
      outcomes: [
        "Agency staffing is listed as an available service line",
        "Specific staffing details can be covered in a direct conversation",
        "Current website emphasis stays on consulting and credentialing support",
      ],
    },
    {
      title: "Critical Care Credentialing",
      description:
        "Guidance for navigating credentialing requirements, readiness expectations, and the documentation needed to keep opportunities moving.",
      whoItsFor:
        "Clinicians preparing for credentialing and organizations needing reliable credentialing support.",
      outcomes: [
        "Reduced confusion around credentialing steps",
        "Better readiness for facility requirements",
        "Cleaner coordination across staffing and compliance needs",
      ],
    },
    {
      title: "Respiratory Consulting",
      description:
        "Consulting support for organizations that want stronger respiratory care operations, informed staffing decisions, and credible clinical guidance.",
      whoItsFor:
        "Healthcare leaders, clinics, and hospitals evaluating respiratory workflows, staffing models, or program support needs.",
      outcomes: [
        "Operational insight grounded in respiratory practice",
        "Clearer planning around staffing and care delivery",
        "A direct line to specialized respiratory expertise",
      ],
    },
  ] satisfies Service[],
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
      "Dustan Sprowl is a results-driven healthcare leader with over 9 years of management experience and 19 years of critical care expertise. His background spans respiratory therapy, sleep, neurology, pulmonary lab oversight, and multi-site service leadership, with a strong emphasis on evidence-based practice, interdisciplinary team development, and high-accountability clinical operations.",
    professionalSummary: [
      "Throughout his career, Dustan has focused on building gold-standard clinical protocols, standardizing operations, and improving both patient care and business performance. His leadership experience includes consolidating multi-site operations, optimizing staffing matrices, and supporting accreditation readiness across TJC, CMS, CLIA, and CAP environments.",
      "He has led teams through service line expansion, workflow redesign, billing compliance recovery, and competency-based education initiatives, while maintaining elite retention rates above 95% and helping drive more than $112 million in financial growth.",
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
      "Supported more than $112 million in financial growth while sustaining retention rates above 95% and improving quality metrics by 36%.",
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
    bookingTitle: "Schedule a 30-minute Google Meet",
    bookingHours: "Monday through Friday, 9:00 AM to 5:00 PM",
  },
};
