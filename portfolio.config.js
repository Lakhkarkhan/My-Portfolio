/* Lakhkar Khan - Professional Portfolio Configuration */
window.PORTFOLIO = {
  name: 'Lakhkar Khan',
  firstName: 'LAKHKAR',
  role: 'Software Engineer & Full Stack Web Developer',
  intro: 'Software Engineering student at the Institute of Management Sciences (IMSciences) specializing in full-stack web platforms, practical cybersecurity, and custom digital solutions for schools and modern businesses.',
  location: 'Peshawar, Pakistan',
  email: 'khanlakhkar06@gmail.com',
  accent: '#ed2444',
  portrait: 'assets/portrait.jpg',
  alternatePortrait: '',
  links: {
    whatsapp: '',
    instagram: '',
    linkedin: '',
    github: 'https://github.com/Lakhkarkhan'
  },
  resume: '',
  about: 'I am a 5th-semester Software Engineering (BSSE) student at the Institute of Management Sciences (IMSciences). My technical foundation combines rigorous software engineering principles—system architecture, data structures, and database design—with hands-on web application security and penetration testing practices. In parallel with building engineering systems like search engines and proxy-resistant attendance frameworks, I help educational institutes, schools, and growing businesses establish high-performance, secure, and professional online web portals.',
  services: [
    {
      title: 'School Portals & Educational Websites',
      detail: 'Tailored, modern web platforms engineered specifically for schools, colleges, and academies. Includes online admission inquiries, academic notices, faculty showcases, and mobile-friendly parent access.'
    },
    {
      title: 'Business Digital Platforms',
      detail: 'Fast, conversion-focused websites for companies and local enterprises. Built with instant WhatsApp lead integration, local SEO architecture, modern UI/UX, and performance optimization.'
    },
    {
      title: 'Secure Full-Stack Web Systems',
      detail: 'Custom web applications and backend REST APIs engineered with strict security standards, role-based access control (RBAC), multi-factor authentication concepts, and protected databases.'
    },
    {
      title: 'Web Security & Vulnerability Auditing',
      detail: 'Assessment of web systems against OWASP Top 10 vulnerabilities, configuration auditing, secure authentication checks, and hardening recommendations.'
    }
  ],
  projects: [
    {
      title: 'Secure Attendance System',
      category: 'Cybersecurity & Web System',
      description: 'An advanced authentication and attendance platform engineered to eliminate student proxy attendance through verified multi-factor credentials and audit logs.',
      stack: ['Python', 'Web Security', 'Authentication', 'Full Stack', 'SQL'],
      features: [
        'Eliminates unauthorized student proxy attendance',
        'Secure multi-factor credential verification flow',
        'Real-time tamper-evident attendance audit logging',
        'Role-based administrative control panel'
      ],
      demo: '',
      github: 'https://github.com/Lakhkarkhan/secure-attendence-system',
      accent: '#38bdf8'
    },
    {
      title: 'Mini Search Engine',
      category: 'Software Engineering (BSSE)',
      description: 'A high-speed search and indexing system utilizing inverted index algorithms to crawl, tokenize, score, and query indexed documents.',
      stack: ['Python', 'JavaScript', 'HTML5/CSS3', 'Data Structures', 'Information Retrieval'],
      features: [
        'Efficient document tokenization and inverted indexing',
        'Fast multi-term query evaluation and relevance ranking',
        'Clean, interactive search interface with instant results'
      ],
      demo: '',
      github: 'https://github.com/Lakhkarkhan/mini-search-engine',
      accent: '#f59e0b'
    },
    {
      title: 'Library Management API',
      category: 'Backend Architecture & REST API',
      description: 'A modular RESTful microservice for cataloging, book issuance tracking, inventory reconciliation, and student patron management.',
      stack: ['Python', 'RESTful API', 'JSON', 'CRUD Design', 'Input Sanitization'],
      features: [
        'Automated book catalog and circulation status tracking',
        'Standardized REST endpoints with strict parameter validation',
        'Graceful error handling and comprehensive response schemas'
      ],
      demo: '',
      github: 'https://github.com/Lakhkarkhan/library-api',
      accent: '#6ee7b7'
    },
    {
      title: 'EduPortal — School Management & Web Suite',
      category: 'Education Solution · In Development',
      description: 'A comprehensive, cloud-ready web suite designed for educational institutions to display academic programs, accept digital admissions, and post notices.',
      stack: ['Full Stack Web', 'Responsive UI/UX', 'Online Admissions', 'RBAC'],
      features: [
        'Centralized announcements and academic calendar board',
        'Online student registration and admission inquiry forms',
        'Responsive mobile layout designed for parents and teachers',
        'Search engine optimized for local school discoverability'
      ],
      demo: '',
      github: '',
      accent: '#ec4899'
    },
    {
      title: 'EduFee — School Fee & Billing Portal',
      category: 'FinTech for Education · In Development',
      description: 'A secure financial record and fee tracking portal engineered for private schools to automate fee slip generation and monitor fee arrears.',
      stack: ['Python', 'SQL Database', 'Financial Reporting', 'Security'],
      features: [
        'Automated monthly fee slip & voucher generation',
        'Defaulter tracking and financial summary dashboard',
        'WhatsApp/SMS receipt notification trigger capability',
        'Multi-user accounting access with strict permission layers'
      ],
      demo: '',
      github: '',
      accent: '#10b981'
    },
    {
      title: 'CyberGuard — Web Vulnerability Scanner',
      category: 'Cybersecurity Tool · In Development',
      description: 'An automated security scanner that audits web applications against the OWASP Top 10 vulnerabilities, misconfigured HTTP headers, and insecure forms.',
      stack: ['Python', 'Cybersecurity', 'OWASP Top 10', 'Security Auditing'],
      features: [
        'Automated scan for XSS, SQLi, and open endpoint vulnerabilities',
        'Security header inspection (CSP, HSTS, X-Frame-Options)',
        'Actionable executive remediation reports'
      ],
      demo: '',
      github: '',
      accent: '#ef4444'
    },
    {
      title: 'BizLaunch — Business Website Engine',
      category: 'Commercial Solution · In Development',
      description: 'A turnkey online presence and customer conversion platform for commercial clients, medical clinics, and local professional services.',
      stack: ['HTML5', 'Modern CSS', 'JavaScript', 'Conversion Optimization', 'SEO'],
      features: [
        'Sub-second loading speed with modern semantic markup',
        'Direct WhatsApp consultation and ordering integration',
        'Local SEO metadata and schema markup for Google search'
      ],
      demo: '',
      github: '',
      accent: '#a855f7'
    },
    {
      title: 'NetShield — Log Monitor & Threat Detector',
      category: 'System Security & BSSE · In Development',
      description: 'A lightweight server monitor and event log analyzer for identifying suspicious authentication attempts, brute-force spikes, and unauthorized traffic.',
      stack: ['Python', 'Linux Server Admin', 'Network Security', 'Log Analysis'],
      features: [
        'Real-time brute force login detection and alerts',
        'Automated IP rate limiting and threshold defense',
        'Interactive log inspection dashboard'
      ],
      demo: '',
      github: '',
      accent: '#06b6d4'
    }
  ],
  skills: [
    'Python',
    'JavaScript (ES6+)',
    'HTML5 & Modern CSS',
    'Responsive Web Design',
    'RESTful API Engineering',
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms (DSA)',
    'Database Systems (SQL & Relational Design)',
    'Software Architecture & Agile Methodologies',
    'Cybersecurity Fundamentals',
    'Web Security (OWASP Top 10)',
    'Authentication & Access Control (RBAC)',
    'Network Security & Wireshark Analysis',
    'Linux System Administration & Shell',
    'Git & GitHub Version Control'
  ],
  journey: [
    {
      title: 'BSSE Foundations & Core Computing',
      period: 'Semesters 1 – 2',
      detail: 'Established core foundations in object-oriented programming, data structures, discrete mathematics, and computer system fundamentals at the Institute of Management Sciences.'
    },
    {
      title: 'Software Design & Practical Cybersecurity',
      period: 'Semesters 3 – 4',
      detail: 'Deepened software engineering practices covering database management systems, software requirement specifications, network protocols, and hands-on vulnerability analysis.'
    },
    {
      title: 'Full-Stack Architecture & System Engineering',
      period: 'Semester 5 (Current)',
      detail: 'Actively engineering practical systems—including custom search engines, REST APIs, and anti-proxy attendance platforms—while mastering web application security.'
    },
    {
      title: 'Digital Solutions for Schools & Enterprises',
      period: 'Active Client Solutions',
      detail: 'Designing and deploying high-performance, secure web portals and business websites for educational institutes and commercial clients in Pakistan.'
    }
  ],
  milestones: [
    {
      title: 'BS Software Engineering (BSSE) — Semester 5',
      organization: 'Institute of Management Sciences (IMSciences)',
      detail: 'Active student pursuing software engineering with focus on system architecture, database design, and cybersecurity applications.'
    },
    {
      title: 'School & Business Web Solutions Practice',
      organization: 'Digital Services & Engineering',
      detail: 'Building production-grade, secure, and mobile-optimized web portals for educational institutions and growing local businesses.'
    }
  ],
  education: [
    {
      school: 'Institute of Management Sciences (IMSciences)',
      degree: 'BS Software Engineering (BSSE) — 5th Semester',
      period: '2024 – Present'
    }
  ],
  credentials: []
};
