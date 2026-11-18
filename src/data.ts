export const profile = {
  name: 'Firaol Kefeni',
  firstName: 'Firaol',
  lastName: 'Kefeni',
  title: 'Full-stack developer',
  // Set this to show the contact form; without it the section shows links only.
  email: '',
  github: 'https://github.com/Firakef1',
  linkedin: 'https://www.linkedin.com/in/firaol-kefeni-649a3b364',
  leetcode: 'https://leetcode.com/u/firakef/',
  codeforces: 'https://codeforces.com/profile/firakef',
  avatar: '/avatar-hero.jpg',
  status: 'Open to internships & collaborations',
  lead: 'I build complete products: the database and API, the web and mobile apps, and the server they run on.',
  about: [
    'Self-taught full-stack developer and competitive programmer. I head the Competitive Programming Division at CSEC ASTU, and I am an A2SV trainee.',
    'I built and shipped the Afri Herbal ERP, which a herbal products company runs its daily sales, stock and production on. It has a Django API, a Next.js web app and a Flutter app for staff, and I deploy and run it on a Linux server myself.',
    'During my A2SV internship I was Frontend Team Head on SraHub, a job board for Ethiopian job seekers. As division head I run training for our members, and I build the tools we use to track their progress.',
  ],
}

export const stats = [
  { value: '300+', label: 'DSA problems solved' },
  { value: '1', label: 'ERP in production' },
  { value: '5', label: 'apps live on the web' },
]

export type Project = {
  title: string
  kind: 'Production' | 'Team' | 'Personal'
  description: string
  tags: string[]
  code?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Afri Herbal ERP',
    kind: 'Production',
    description:
      'ERP for a herbal products company: sales and approvals, stock requests, production runs, cashier and salesman workflows, SMS alerts, and a mobile app for field staff.',
    tags: ['Django', 'Next.js', 'Flutter', 'PostgreSQL', 'Docker'],
    live: 'https://afri-herbal.com',
  },
  {
    title: 'SraHub',
    kind: 'Team',
    description:
      'Job board for Ethiopian job seekers and employers. I led the frontend team; the stack is a Go REST API, a Next.js web app on Cloudflare, and a Flutter app.',
    tags: ['Next.js', 'Go', 'Flutter', 'PostgreSQL'],
    live: 'https://srahub-web.firaolkef.workers.dev/',
  },
  {
    title: 'CP Tracker',
    kind: 'Production',
    description:
      'Tracker I built for the CSEC ASTU Competitive Programming Division, which I lead. It pulls solves from Codeforces and LeetCode automatically and scores consistency, streaks and contest attendance.',
    tags: ['FastAPI', 'PostgreSQL', 'Next.js', 'Docker'],
    live: 'https://cp-tracker-puce.vercel.app',
  },
  {
    title: 'Dama Game',
    kind: 'Personal',
    description:
      'Real-time online multiplayer Dama, the traditional Ethiopian board game. Moves sync over WebSockets and the server validates every move.',
    tags: ['FastAPI', 'WebSockets', 'TypeScript'],
    code: 'https://github.com/Firakef1/Dama-game',
    live: 'https://dama-game-chi.vercel.app',
  },
  {
    title: 'BookReader',
    kind: 'Personal',
    description:
      'Local-first mobile reader for PDF, EPUB and TXT. It reopens on the right page, and keeps highlights, themes and reading stats on the device, with no account needed.',
    tags: ['Expo', 'React Native', 'TypeScript'],
    code: 'https://github.com/Firakef1/Book-Reader',
  },
  {
    title: 'Notebook',
    kind: 'Personal',
    description:
      'Backend for chatting with your own documents: upload, ingestion, vector search and retrieval-augmented answers, behind auth.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'RAG'],
    code: 'https://github.com/Firakef1/Notebook',
  },
]

export const otherProjects = [
  {
    title: 'Load Balancer',
    description: 'Round-robin reverse proxy that finds containers through the Docker socket.',
    href: 'https://github.com/Firakef1/Load-Balancer',
  },
  {
    title: 'Huffman Compressor',
    description: 'Lossless C++ file compression with bit-level I/O.',
    href: 'https://github.com/Firakef1/file-_compressor',
  },
  {
    title: 'Settle',
    description: 'Team project: staff payout requests with receipts and OCR.',
    href: 'https://github.com/Firakef1/settle',
  },
  {
    title: 'Lijgo',
    description: 'Website for a school transport app with live routes.',
    href: 'https://lijgo-alpha.vercel.app',
  },
  {
    title: 'CSEC ASTU Scoreboard',
    description: "Members' scoreboard platform for CSEC ASTU.",
    href: 'https://github.com/CSEC-ASTU/CSEC-ASTU-members-scoreboard-platform',
  },
  {
    title: 'A2SV Solutions',
    description: '306 LeetCode problems in Python and Java.',
    href: 'https://github.com/Firakef1/A2SV_Solved_Questions',
  },
]

const icon = (slug: string, style = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${style}.svg`

export type Skill = { name: string; icon?: string }

export const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', icon: icon('python') },
      { name: 'TypeScript', icon: icon('typescript') },
      { name: 'JavaScript', icon: icon('javascript') },
      { name: 'Go', icon: icon('go', 'original-wordmark') },
      { name: 'Java', icon: icon('java') },
      { name: 'C++', icon: icon('cplusplus') },
      { name: 'Dart', icon: icon('dart') },
      { name: 'SQL', icon: icon('postgresql') },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Django', icon: icon('django', 'plain') },
      { name: 'FastAPI', icon: icon('fastapi') },
      { name: 'Flask', icon: icon('flask') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'Express', icon: icon('express') },
      { name: 'WebSockets' },
      { name: 'REST APIs' },
      { name: 'OAuth & JWT' },
    ],
  },
  {
    label: 'Frontend & mobile',
    skills: [
      { name: 'React', icon: icon('react') },
      { name: 'Next.js', icon: icon('nextjs', 'plain') },
      { name: 'Vite', icon: icon('vitejs') },
      { name: 'Tailwind', icon: icon('tailwindcss') },
      { name: 'React Native', icon: icon('react') },
      { name: 'Expo', icon: icon('expo') },
      { name: 'Flutter', icon: icon('flutter') },
    ],
  },
  {
    label: 'Data & DevOps',
    skills: [
      { name: 'PostgreSQL', icon: icon('postgresql') },
      { name: 'SQLAlchemy', icon: icon('sqlalchemy') },
      { name: 'MongoDB', icon: icon('mongodb') },
      { name: 'Redis', icon: icon('redis') },
      { name: 'Docker', icon: icon('docker') },
      { name: 'GitHub Actions', icon: icon('githubactions') },
      { name: 'Linux', icon: icon('linux') },
      { name: 'Git', icon: icon('git') },
      { name: 'Vercel', icon: icon('vercel') },
      { name: 'Cloudflare', icon: icon('cloudflare') },
    ],
  },
]

export const experience = [
  {
    year: '2026 — Now',
    title: 'Afri Herbal',
    role: 'Full-stack Developer',
    body: 'Built and shipped the company ERP: Django + Django Ninja API, Next.js web app and Flutter staff app. I also deploy and run it on a Linux server with Docker, Caddy and on-server backups.',
  },
  {
    year: '2025 — Now',
    title: 'A2SV',
    role: 'Frontend Developer',
    body: 'Frontend craft, mentorship and product work, with intensive DSA training alongside.',
  },
  {
    year: 'A2SV internship',
    title: 'SraHub',
    role: 'Frontend Team Head',
    body: 'Led the frontend team building SraHub: UI architecture, delivery and team coordination.',
  },
  {
    year: 'Ongoing',
    title: 'CSEC ASTU',
    role: 'Head, Competitive Programming Division',
    body: 'I lead the division: training sessions, problem sheets, contests and keeping members on track. I built CP Tracker and a question-of-the-day Telegram bot so practice is tracked automatically.',
  },
  {
    year: '2023 — Now',
    title: 'Full-stack',
    role: 'Self-taught',
    body: 'Apps, APIs, databases and systems end to end.',
  },
]
