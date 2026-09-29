export const profile = {
  name: 'Firaol Kefeni',
  firstName: 'Firaol',
  lastName: 'Kefeni',
  title: 'Full-stack developer',
  github: 'https://github.com/Firakef1',
  linkedin: 'https://www.linkedin.com/in/firaol-kefeni-649a3b364',
  leetcode: 'https://leetcode.com/u/firakef/',
  codeforces: 'https://codeforces.com/profile/firakef',
  avatar: '/avatar-hero.jpg',
  lead: 'Full-stack since 2023 — frontend apps, backend APIs, and systems that ship.',
  about: [
    'Self-taught full-stack developer and competitive programmer. Frontend at A2SV.',
    'Frontend Team Head on SRA Hub during my A2SV internship. Also build Python backends with FastAPI, Django, and Flask.',
  ],
}

export const projects = [
  {
    title: 'Book Reader',
    description: 'Expo reader with custom fonts and local file import.',
    tags: ['TypeScript', 'Expo', 'React Native'],
    href: 'https://github.com/Firakef1/Book-Reader',
  },
  {
    title: 'Dama Game',
    description: 'Ethiopian Dama — TypeScript UI, Python game engine.',
    tags: ['TypeScript', 'Python'],
    href: 'https://github.com/Firakef1/Dama-game',
  },
  {
    title: 'Huffman Compressor',
    description: 'Lossless C++ compression with bit packing and a custom header.',
    tags: ['C++', 'Algorithms'],
    href: 'https://github.com/Firakef1/file-_compressor',
  },
  {
    title: 'Settle',
    description: 'Team repo setup, workflows, and branch-protection tooling.',
    tags: ['Shell', 'DevOps'],
    href: 'https://github.com/Firakef1/settle',
  },
]

export const otherProjects = [
  {
    title: 'Job Listing App',
    href: 'https://github.com/Firakef1/job-listing-app',
  },
  {
    title: 'Load Balancer',
    href: 'https://github.com/Firakef1/Load-Balancer',
  },
  {
    title: 'FastAPI Todo API',
    href: 'https://github.com/Firakef1/FastAP_-todo_app_backend',
  },
  {
    title: 'Notebook',
    href: 'https://github.com/Firakef1/Notebook',
  },
  {
    title: 'React Todo List',
    href: 'https://github.com/Firakef1/react_todo_list',
  },
]

const icon = (slug: string, style = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${style}.svg`

export const skillGroups = [
  {
    label: 'Backend',
    skills: [
      { name: 'Python', icon: icon('python') },
      { name: 'FastAPI', icon: icon('fastapi') },
      { name: 'Django', icon: icon('django', 'plain') },
      { name: 'Flask', icon: icon('flask') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'PostgreSQL', icon: icon('postgresql') },
      { name: 'MongoDB', icon: icon('mongodb') },
      { name: 'Redis', icon: icon('redis') },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'TypeScript', icon: icon('typescript') },
      { name: 'JavaScript', icon: icon('javascript') },
      { name: 'React', icon: icon('react') },
      { name: 'Next.js', icon: icon('nextjs') },
      { name: 'Expo', icon: icon('expo') },
      { name: 'Tailwind', icon: icon('tailwindcss') },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'C++', icon: icon('cplusplus') },
      { name: 'Docker', icon: icon('docker') },
      { name: 'Git', icon: icon('git') },
      { name: 'Linux', icon: icon('linux') },
    ],
  },
]

export const experience = [
  {
    year: '2025 — Now',
    title: 'A2SV',
    role: 'Frontend Developer',
    body: 'Frontend craft, mentorship, and product work.',
  },
  {
    year: 'A2SV internship',
    title: 'SRA Hub',
    role: 'Frontend Team Head',
    body: 'Led the frontend team building SRA Hub — UI architecture, delivery, and team coordination.',
  },
  {
    year: '2023 — Now',
    title: 'Full-stack',
    role: 'Self-taught',
    body: 'Apps, APIs, databases, and systems end to end.',
  },
  {
    year: 'Ongoing',
    title: 'Competitive Programming',
    role: 'CSEC · LeetCode · A2SV',
    body: 'Daily DSA to keep fundamentals sharp.',
  },
]
