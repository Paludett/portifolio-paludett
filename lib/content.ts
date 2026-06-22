export type Lang = "pt" | "en";

export type Localized = Record<Lang, string>;

export interface SkillCategory {
  label: Localized;
  description: Localized;
  signal: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  type: Localized;
  status: Localized;
  description: Localized;
  impact: Localized;
  metrics: string[];
  tech: string[];
  links?: { label: Localized; href: string }[];
  href?: string;
}

export interface Experience {
  role: Localized;
  org: Localized;
  kind: Localized;
  period: Localized;
  location: string;
  bullets: Localized[];
}

export interface Education {
  course: Localized;
  org: string;
  period: string;
}

export interface NavLink {
  href: string;
  label: Localized;
}

export interface Content {
  nav: {
    wordmark: string;
    links: NavLink[];
  };
  hero: {
    meta: string[];
    role: Localized;
    firstName: string;
    lastName: string;
    about: Localized;
    stats: { value: string; label: Localized }[];
    panel: {
      path: string;
      command: string;
      lines: Localized[];
    };
    status: {
      fields: { label: Localized; value: Localized }[];
      cta: Localized;
    };
  };
  sections: {
    skills: Localized;
    work: Localized;
    journey: Localized;
    contact: Localized;
  };
  sectionLabels: {
    skills: Localized;
    work: Localized;
    journey: Localized;
    contact: Localized;
  };
  ui: {
    details: Localized;
    demo: Localized;
    stack: Localized;
  };
  skills: SkillCategory[];
  projects: Project[];
  allProjectsCta: Localized;
  experiences: Experience[];
  education: { title: Localized; data: Education };
  educationLabel: Localized;
  contact: {
    intro: Localized;
    email: string;
    github: string;
    linkedin: string;
  };
  projectsPage: {
    back: Localized;
    title: Localized;
    intro: Localized;
    moreCard: {
      label: Localized;
      title: Localized;
      cta: Localized;
      href: string;
    };
  };
  footer: {
    copyright: string;
    top: Localized;
  };
}

export const content: Content = {
  nav: {
    wordmark: "Lorenzo Paludett",
    links: [
      { href: "#trabalhos", label: { pt: "Projetos", en: "Projects" } },
      { href: "#habilidades", label: { pt: "Stack", en: "Stack" } },
      { href: "#trajetoria", label: { pt: "Experiência", en: "Experience" } },
      { href: "#contato", label: { pt: "Contato", en: "Contact" } },
    ],
  },
  hero: {
    meta: ["Python", "Django", "React Native", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    role: {
      pt: "Desenvolvedor Full Stack & Mobile",
      en: "Full Stack & Mobile Developer",
    },
    firstName: "Lorenzo",
    lastName: "Paludett",
    about: {
      pt: "Construo apps mobile, produtos web e integrações full stack. Saindo do papel até o deploy, CI/CD e publicação nas lojas.",
      en: "I build mobile apps, web products and full stack integrations. From concept to deploy, CI/CD and app store release.",
    },
    stats: [
      {
        value: "2",
        label: { pt: "apps publicados", en: "published apps" },
      },
      {
        value: "ETL",
        label: {
          pt: "TOTVS → PostgreSQL → Firestore",
          en: "TOTVS → PostgreSQL → Firestore",
        },
      },
      {
        value: "CI/CD",
        label: { pt: "GitHub Actions + Docker", en: "GitHub Actions + Docker" },
      },
    ],
    panel: {
      path: "~/portfolio",
      command: "npm run ship",
      lines: [
        {
          pt: "crio apps mobile + produtos web",
          en: "build mobile apps + web products",
        },
        {
          pt: "conecto APIs, dados, pipelines e CI/CD",
          en: "connect APIs, data pipelines, CI/CD",
        },
        {
          pt: "publico na App Store + Google Play",
          en: "release to App Store + Google Play",
        },
      ],
    },
    status: {
      fields: [
        {
          label: { pt: "Atuação", en: "Role" },
          value: {
            pt: "Mobile & Full Stack",
            en: "Mobile & Full Stack",
          },
        },
        {
          label: { pt: "Base", en: "Base" },
          value: { pt: "Rio Grande do Sul, BR", en: "Rio Grande do Sul, BR" },
        },
        {
          label: { pt: "Foco", en: "Focus" },
          value: {
            pt: "Python · React · Typescript",
            en: "Python · React · Typescript",
          },
        },
      ],
      cta: { pt: "Ver projetos", en: "See projects" },
    },
  },
  sections: {
    skills: { pt: "Stack que uso para entregar", en: "Stack I use to ship" },
    work: {
      pt: "Projetos em produção e estudo",
      en: "Production and study projects",
    },
    journey: { pt: "Experiência técnica", en: "Technical experience" },
    contact: { pt: "Vamos conversar", en: "Let's talk" },
  },
  sectionLabels: {
    skills: { pt: "Stack & Ferramentas", en: "Stack & Tools" },
    work: { pt: "Projetos", en: "Projects" },
    journey: { pt: "Experiência & Educação", en: "Experience & Education" },
    contact: { pt: "Disponível", en: "Available" },
  },
  ui: {
    details: { pt: "Detalhes", en: "Details" },
    demo: { pt: "Demo", en: "Demo" },
    stack: { pt: "stack", en: "stack" },
  },
  skills: [
    {
      label: { pt: "Mobile", en: "Mobile" },
      description: {
        pt: "Apps React Native com release real em iOS e Android.",
        en: "React Native apps with real iOS and Android release.",
      },
      signal: "SHIP",
      items: ["React Native", "App Store", "Google Play"],
    },
    {
      label: { pt: "Front-end", en: "Front-end" },
      description: {
        pt: "Interfaces rápidas, responsivas e componentizadas.",
        en: "Fast, responsive and componentized interfaces.",
      },
      signal: "UI",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    {
      label: { pt: "Back-end", en: "Back-end" },
      description: {
        pt: "APIs, autenticação, integrações e regras de negócio.",
        en: "APIs, authentication, integrations and business rules.",
      },
      signal: "API",
      items: ["Python", "Django", "FastAPI", "Go"],
    },
    {
      label: { pt: "Dados & Infra", en: "Data & Infra" },
      description: {
        pt: "Pipelines, banco de dados, Docker e automação de deploy.",
        en: "Pipelines, databases, Docker and deploy automation.",
      },
      signal: "OPS",
      items: ["PostgreSQL", "Firebase", "Firestore", "Docker", "GitHub Actions"],
    },
  ],
  projects: [
    {
      id: "appamf",
      name: "appAMF",
      year: "2025",
      type: { pt: "Mobile", en: "Mobile" },
      status: { pt: "Produção", en: "Production" },
      description: {
        pt: "App institucional da Fundação Antonio Meneghetti (iOS + Android). Pipeline ETL TOTVS → PostgreSQL → Firestore → React Native, com CI/CD via GitHub Actions e runner self-hosted.",
        en: "Institutional app for the Antonio Meneghetti Foundation (iOS + Android). ETL pipeline TOTVS → PostgreSQL → Firestore → React Native, with CI/CD via GitHub Actions and a self-hosted runner.",
      },
      impact: {
        pt: "Integração de dados acadêmicos, app mobile em produção e fluxo automatizado de entrega.",
        en: "Academic data integration, production mobile app and automated delivery flow.",
      },
      metrics: ["iOS + Android", "ETL pipeline", "Self-hosted runner"],
      tech: [
        "React Native",
        "TypeScript",
        "Django",
        "Firestore",
        "PostgreSQL",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      id: "ecopass",
      name: "EcoPass",
      year: "2026",
      type: { pt: "SaaS", en: "SaaS" },
      status: { pt: "Hackathon", en: "Hackathon" },
      description: {
        pt: "Plataforma B2B SaaS de conformidade EUDR para exportadores de soja brasileiros. Desenvolvida em 8h no hackathon Code Race 2026.",
        en: "B2B SaaS platform for EUDR compliance aimed at Brazilian soy exporters. Built in 8h at the Code Race 2026 hackathon.",
      },
      impact: {
        pt: "Validação rápida de produto B2B com mapas, dados geográficos e API em poucas horas.",
        en: "Fast B2B product validation with maps, geodata and API in a few hours.",
      },
      metrics: ["8h build", "B2B SaaS", "Geodata"],
      tech: ["FastAPI", "React", "PostGIS", "Python"],
    },
    {
      id: "bolaotpm",
      name: "BolãoTPM",
      year: "2026",
      type: { pt: "Web", en: "Web" },
      status: { pt: "Online", en: "Live" },
      description: {
        pt: "Site de bolão da Copa do Mundo 2026 com autenticação, placar em tempo real e ranking.",
        en: "2026 World Cup prediction pool site with authentication, live scores and ranking.",
      },
      impact: {
        pt: "Produto web com autenticação, estado em tempo real e ranking competitivo.",
        en: "Web product with authentication, realtime state and competitive ranking.",
      },
      metrics: ["Auth", "Realtime", "Ranking"],
      tech: ["Next.js", "Supabase", "TypeScript"],
      links: [{ label: { pt: "Demo", en: "Demo" }, href: "https://boltpm.vercel.app" }],
      href: "https://boltpm.vercel.app",
    },
  ],
  allProjectsCta: { pt: "Todos os projetos", en: "All projects" },
  experiences: [
    {
      role: { pt: "Desenvolvedor de Software", en: "Software Developer" },
      org: { pt: "TecnoAMF · AMF", en: "TecnoAMF · AMF" },
      kind: { pt: "Estágio", en: "Internship" },
      period: { pt: "Ago 2025 → Agora", en: "Aug 2025 → Now" },
      location: "Restinga Sêca, RS",
      bullets: [
        {
          pt: "Desenvolvimento mobile em time com React Native e TypeScript, publicando dois apps na App Store e Google Play.",
          en: "Team mobile development with React Native and TypeScript, publishing two apps on the App Store and Google Play.",
        },
        {
          pt: "Migração completa de um app culinário de Flutter para React Native, do levantamento de requisitos à publicação.",
          en: "Full migration of a cooking app from Flutter to React Native, from requirements gathering to release.",
        },
        {
          pt: "Finalização e lançamento do app institucional da faculdade, integrando APIs REST (Django) e dados no Firebase.",
          en: "Finishing and launching the college institutional app, integrating REST APIs (Django) and Firebase data.",
        },
      ],
    },
    {
      role: { pt: "Marketing", en: "Marketing" },
      org: {
        pt: "Fundação Antonio Meneghetti",
        en: "Antonio Meneghetti Foundation",
      },
      kind: { pt: "Estágio", en: "Internship" },
      period: { pt: "Mar 2025 → Ago 2025", en: "Mar 2025 → Aug 2025" },
      location: "S. J. do Polêsine, RS",
      bullets: [
        {
          pt: "Comunicação visual e produção de conteúdo para uma fundação de educação e cultura.",
          en: "Visual communication and content production for an education and culture foundation.",
        },
        {
          pt: "Materiais de web design e assets gráficos com Photoshop, apoiando a identidade visual.",
          en: "Web design materials and graphic assets with Photoshop, supporting visual identity.",
        },
        {
          pt: "Cobertura fotográfica de eventos e edição de vídeos com Adobe Premiere.",
          en: "Event photography coverage and video editing with Adobe Premiere.",
        },
      ],
    },
  ],
  education: {
    title: { pt: "Educação", en: "Education" },
    data: {
      course: {
        pt: "Bacharelado em Sistemas de Informação",
        en: "B.Sc. in Information Systems",
      },
      org: "Antonio Meneghetti Faculdade",
      period: "2025–2028",
    },
  },
  educationLabel: { pt: "Formação", en: "Education" },
  contact: {
    intro: {
      pt: "Aberto a projetos, trabalhos e colaborações. Vamos construir algo.",
      en: "Open to projects, jobs and collaborations. Let's build something.",
    },
    email: "lorenzopaludettbenedetti@gmail.com",
    github: "https://github.com/Paludett",
    linkedin: "https://www.linkedin.com/in/lorenzo-paludett/",
  },
  projectsPage: {
    back: { pt: "Voltar", en: "Back" },
    title: { pt: "Todos os projetos", en: "All projects" },
    intro: {
      pt: "Seleção de trabalhos em mobile, web e SaaS — do experimento de hackathon ao produto em produção.",
      en: "A selection of mobile, web and SaaS work — from hackathon experiments to production products.",
    },
    moreCard: {
      label: { pt: "Mais", en: "More" },
      title: {
        pt: "Mais no GitHub",
        en: "More on GitHub",
      },
      cta: { pt: "Ver perfil", en: "View profile" },
      href: "https://github.com/Paludett",
    },
  },
  footer: {
    copyright: "© 2026 — Lorenzo Paludett",
    top: { pt: "Topo ↑", en: "Top ↑" },
  },
};
