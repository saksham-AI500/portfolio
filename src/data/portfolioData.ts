import { Project, SkillCategory, Certification, EducationData, ContactInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Saksham Gupta',
  title: 'AI/ML Student & AI Engineer',
  tagline: 'AI Engineering · LLMs · Machine Learning · Cloud Systems',
  institution: 'Delhi Technical Campus · GGSIPU, New Delhi',
  shortBio: 'B.Tech student in Artificial Intelligence & Machine Learning. Focused on designing production-grade AI pipelines, LLM-powered autonomous workflows, time-series forecasting engines, and resilient cloud architectures.',
  currentFocus: 'Exploring agentic architectures, RAG optimization, and high-performance ML inference backends.',
};

export const EDUCATION_DATA: EducationData = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Artificial Intelligence & Machine Learning',
  institution: 'Delhi Technical Campus (Affiliated with GGSIPU)',
  location: 'New Delhi, India',
  timeline: '2024 – 2028',
  semesterInfo: '5th Semester · 3rd Year',
  coursework: [
    {
      code: 'CS-301',
      title: 'Data Structures & Algorithms',
      category: 'Core Computer Science',
    },
    {
      code: 'CS-304',
      title: 'Database Management Systems (DBMS)',
      category: 'Data Architecture',
    },
    {
      code: 'MA-202',
      title: 'Probability & Statistics',
      category: 'Mathematical Foundations',
    },
    {
      code: 'AI-302',
      title: 'Machine Learning Fundamentals',
      category: 'Core AI / ML',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ai-analytics-forecasting',
    title: 'AI Analytics & Forecasting Engine',
    category: 'AI / ML',
    summary: 'Production-oriented time-series forecasting backend with multi-model comparison and REST API.',
    description: 'A modular, high-throughput time-series forecasting platform comparing statistical and gradient-boosted models in real time. Features automated feature engineering, outlier detection, and REST endpoints for asynchronous predictions.',
    features: [
      'Multi-model automated benchmark comparing Prophet, ARIMA, and XGBoost',
      'High-performance asynchronous prediction pipelines via FastAPI',
      'Relational metric persistence & historical evaluation using PostgreSQL & SQLAlchemy',
      'Automated backtesting and rolling window error validation (MAPE / RMSE)',
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Prophet', 'ARIMA', 'XGBoost', 'SQLAlchemy'],
    githubUrl: 'https://github.com/saksham-AI500/portfolio',
    stats: 'Multi-model latency < 120ms',
    accent: '#38bdf8',
    icon: 'TrendingUp',
  },
  {
    id: 'questforge',
    title: 'QuestForge',
    category: 'Mobile',
    summary: 'Offline-first RPG-inspired productivity app with gamified task management.',
    description: 'A gamified task and habit management ecosystem built for seamless offline productivity. Integrates experience progression, stat mechanics, and resilient local persistence.',
    features: [
      'Fully offline-first mobile architecture with SQLite caching and persistent state',
      'Gamified quest generation with real-time level progression, stat scaling, and rewards',
      'Smooth responsive gestures and fluid mobile UI crafted with React Native and Expo',
      'Automated habit streak analytics and customizable recurring quest archetypes',
    ],
    technologies: ['React Native', 'Expo', 'SQLite', 'JavaScript'],
    githubUrl: 'https://github.com/saksham-AI500/portfolio',
    stats: '100% Offline Resilience',
    accent: '#818cf8',
    icon: 'Shield',
  },
  {
    id: 'ai-notes-automation',
    title: 'AI Notes Automation for Obsidian',
    category: 'AI Engineering',
    summary: 'Obsidian plugin integrating multiple LLM providers for automated note generation and organisation.',
    description: 'An advanced knowledge automation plugin for Obsidian that synthesizes unstructured thoughts into structured, cross-referenced Markdown notes using state-of-the-art LLMs.',
    features: [
      'Multi-provider LLM integration supporting Gemini, Anthropic, and OpenAI endpoints',
      'Automated contextual taxonomy, bidirectional link discovery, and smart tagging',
      'Token-conscious chunking with custom system prompts for technical documentation',
      'Local-first vault security ensuring user privacy and API key management',
    ],
    technologies: ['LLM APIs', 'NLP', 'JavaScript', 'Obsidian'],
    githubUrl: 'https://github.com/saksham-AI500/portfolio',
    stats: 'Zero-latency markdown sync',
    accent: '#34d399',
    icon: 'BrainCircuit',
  },
  {
    id: 'supply-chain-intelligence',
    title: 'Supply Chain Intelligence Platform',
    category: 'Backend',
    summary: 'Interactive analytics dashboard for supply chain optimisation and KPI tracking.',
    description: 'An enterprise-scale supply chain logistics tracker unifying distributed shipping data into real-time operational insights, bottleneck forecasts, and KPI metrics.',
    features: [
      'Automated ETL ingestion pipeline cleaning heterogeneous vendor shipments',
      'Predictive inventory stockout alarms utilizing statistical thresholding',
      'Relational data modeling optimized for multi-dimensional aggregation queries',
      'Interactive executive KPI views with dynamic filtering and supplier risk scoring',
    ],
    technologies: ['Python', 'Data Analytics', 'ETL', 'SQL', 'Visualisation'],
    githubUrl: 'https://github.com/saksham-AI500/portfolio',
    stats: 'Real-time vendor KPI tracking',
    accent: '#f59e0b',
    icon: 'PackageSearch',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Programming',
    description: 'Foundational languages for systems, algorithms, and data modeling',
    skills: [
      { name: 'Python', tag: 'Core AI/Backend', description: 'Scientific computing, backend APIs, data pipelines' },
      { name: 'SQL', tag: 'Database Queries', description: 'Relational data modeling, aggregations, indexing' },
      { name: 'JavaScript', tag: 'Modern Frontend', description: 'Interactive UIs, DOM runtime, Node.js scripts' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    description: 'Predictive modeling, deep learning, and statistical analysis',
    skills: [
      { name: 'Scikit-learn', tag: 'Classical ML', description: 'Classification, regression, and clustering' },
      { name: 'PyTorch', tag: 'Deep Learning', description: 'Neural network architecture design and tensors' },
      { name: 'NumPy', tag: 'Vector Computation', description: 'High-performance n-dimensional array operations' },
      { name: 'Pandas', tag: 'Data Wrangling', description: 'Dataframe transformations, cleaning, and time indexing' },
      { name: 'Prophet', tag: 'Time-Series', description: 'Additive forecasting and trend seasonality' },
      { name: 'XGBoost', tag: 'Gradient Boost', description: 'High-accuracy tabular ensemble modeling' },
      { name: 'NLP', tag: 'Language Processing', description: 'Text classification, embeddings, and tokenization' },
      { name: 'Time-Series', tag: 'Forecasting', description: 'Autoregressive models, ARIMA, and signal processing' },
    ],
  },
  {
    category: 'AI Engineering',
    description: 'LLM integrations, agentic workflows, and semantic search',
    skills: [
      { name: 'LLM APIs', tag: 'Generative AI', description: 'Function calling, structured output generation' },
      { name: 'RAG', tag: 'Knowledge Retrieval', description: 'Vector databases, dense retrieval, and chunking' },
      { name: 'AI Integration', tag: 'Production Pipelines', description: 'Connecting foundational models to existing backends' },
      { name: 'Prompt Engineering', tag: 'Instruction Tuning', description: 'Chain-of-thought, few-shot prompting, and guardrails' },
    ],
  },
  {
    category: 'Backend / Data',
    description: 'High-throughput APIs, database schemas, and data pipelines',
    skills: [
      { name: 'FastAPI', tag: 'Asynchronous Web', description: 'High-speed Python APIs with automatic OpenAPI docs' },
      { name: 'PostgreSQL', tag: 'Relational DB', description: 'ACID transactions, schema design, and query optimization' },
      { name: 'MySQL', tag: 'Relational DB', description: 'Structured relational storage and legacy interoperability' },
      { name: 'SQLAlchemy', tag: 'Python ORM', description: 'Object relational mapping and session management' },
      { name: 'REST APIs', tag: 'Architecture', description: 'Stateless endpoints, HTTP semantics, and security' },
      { name: 'ETL', tag: 'Data Pipelines', description: 'Extract, transform, and load workflows for heterogeneous data' },
    ],
  },
  {
    category: 'Cloud / DevOps',
    description: 'Containerization, cloud workloads, and version control',
    skills: [
      { name: 'Google Cloud', tag: 'Cloud Platform', description: 'Cloud Run, Compute Engine, BigQuery, and IAM' },
      { name: 'GKE', tag: 'Kubernetes', description: 'Google Kubernetes Engine container orchestration' },
      { name: 'Git', tag: 'Version Control', description: 'Branch management, git workflows, and bisect' },
      { name: 'GitHub', tag: 'CI/CD & Collaboration', description: 'Actions, repository workflows, and code review' },
    ],
  },
  {
    category: 'App Development',
    description: 'Cross-platform mobile and local persistence',
    skills: [
      { name: 'React Native', tag: 'Mobile Runtime', description: 'Native mobile components and cross-platform UI' },
      { name: 'Expo', tag: 'Mobile Tooling', description: 'Ecosystem runtime, rapid iteration, and EAS builds' },
      { name: 'SQLite', tag: 'Embedded DB', description: 'Lightweight client-side local transactional storage' },
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'github-foundations',
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    verificationStatus: 'Verified',
    issueYear: '2024',
    badge: 'Code2',
    description: 'Demonstrates foundational competency with Git version control, collaborative workflows, GitHub Actions, and repository security best practices.',
  },
  {
    id: 'oracle-cloud-ai',
    title: 'Oracle Cloud Infrastructure AI Foundation Associate',
    issuer: 'Oracle',
    verificationStatus: 'Verified',
    issueYear: '2024',
    badge: 'Layers',
    description: 'Validated understanding of AI concepts, Machine Learning workflows, Generative AI integration, and OCI AI cloud services architecture.',
  },
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials V1',
    issuer: 'Google',
    verificationStatus: 'Verified',
    issueYear: '2024',
    badge: 'Sparkles',
    description: 'Comprehensive certification covering foundational AI principles, ethical AI considerations, and real-world generative AI utilization.',
  },
  {
    id: 'google-prompting-essentials',
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    verificationStatus: 'Verified',
    issueYear: '2024',
    badge: 'Terminal',
    description: 'Specialized credential validating systematic prompt architecture, few-shot guidance, chain-of-thought methodologies, and context evaluation.',
  },
];

export const CONTACT_DATA: ContactInfo = {
  tagline: 'Open to internships, research collaborations, and interesting AI/ML projects.',
  email: 'misakshamgupta@gmail.com',
  phone: '+91 98711 00000',
  github: 'https://github.com/saksham-AI500',
  linkedin: 'https://linkedin.com/in/saksham-gupta-ai',
  resumeUrl: '#resume',
  location: 'New Delhi, India',
};
