import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import {
  experience,
  otherProjects,
  profile,
  projects,
  skillGroups,
  stats,
  type Project,
} from './data'
import { handleAnchorClick, initSmoothScroll } from './scroll'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 })

  return (
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <motion.div className="nav-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={(e) => { handleAnchorClick(e); close() }}>
          Firaol.
        </a>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary">
          <a href="#work" onClick={(e) => { handleAnchorClick(e); close() }}>
            Work
          </a>
          <a href="#about" onClick={(e) => { handleAnchorClick(e); close() }}>
            About
          </a>
          <a href="#skills" onClick={(e) => { handleAnchorClick(e); close() }}>
            Skills
          </a>
          <a href="#experience" onClick={(e) => { handleAnchorClick(e); close() }}>
            Path
          </a>
          <a href="#contact" onClick={(e) => { handleAnchorClick(e); close() }}>
            Contact
          </a>
          <a
            className="nav-cta nav-desktop-cta"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-shell">
        <div className="hero-copy">
          <motion.h1
            className="hero-brand"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.firstName} {profile.lastName}
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            {profile.lead}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          >
            <a className="btn btn-primary" href="#work" onClick={handleAnchorClick}>
              View work
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={handleAnchorClick}>
              Contact
            </a>
          </motion.div>

          <motion.dl
            className="hero-stats"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hero-media"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <img
            src={profile.avatar}
            alt={`${profile.name}`}
            width={1875}
            height={2400}
          />
          <p className="hero-caption">Building since 2023</p>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primary = project.live ?? project.code

  return (
    <article className={`work-item${primary ? ' is-linked' : ''}`}>
      <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="work-main">
        <div className="work-title-row">
          <h3>
            {primary ? (
              <a className="work-stretch" href={primary} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className={`kind kind-${project.kind.toLowerCase()}`}>{project.kind}</span>
        </div>
        <p>{project.description}</p>
        <div className="work-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="work-links">
        {project.live && (
          <a className="work-link work-link-live" href={project.live} target="_blank" rel="noreferrer">
            Live
            <ArrowIcon />
          </a>
        )}
        {project.code && (
          <a className="work-link" href={project.code} target="_blank" rel="noreferrer">
            Code
            <ArrowIcon />
          </a>
        )}
        {!project.live && !project.code && <span className="work-private">Private repo</span>}
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="section-label">Work</p>
              <h2 className="section-title">Selected projects</h2>
            </div>
            <p className="section-aside">
              Things real people use, plus the side projects where I learn. More on{' '}
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="work-list">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="other-work">
            <p className="section-label">More builds</p>
            <ul className="other-grid">
              {otherProjects.map((item) => (
                <li key={item.title}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <span className="other-title">
                      {item.title}
                      <ArrowIcon />
                    </span>
                    <span className="other-desc">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-panel">
          <p className="section-label">About</p>
          <p className="about-quote">
            Curious builder who likes learning how things work, then shipping them.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="about-body">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="section-label">Toolkit</p>
              <h2 className="section-title">What I work with</h2>
            </div>
            <p className="section-aside">
              Everything here is something I&apos;ve shipped with, not just tried.
            </p>
          </div>
        </Reveal>

        <div className="skills-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="skills-group">
                <h3 className="skills-group-label">{group.label}</h3>
                <ul className="skills-chips">
                  {group.skills.map((skill) => (
                    <li className="skill-chip" key={skill.name}>
                      {skill.icon ? (
                        <img src={skill.icon} alt="" width={20} height={20} loading="lazy" />
                      ) : (
                        <span className="skill-dot" aria-hidden="true" />
                      )}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="section-label">Path</p>
              <h2 className="section-title">Experience &amp; growth</h2>
            </div>
          </div>
        </Reveal>

        <div className="exp-list">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="exp-item">
                <div className="exp-year">{item.year}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="role">{item.role}</p>
                  <p>{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-intro">
              <p className="section-label">Contact</p>
              <h2>Let&apos;s talk.</h2>
              <p>Open to internships, freelance builds and collaborations. If you need something built end to end, I&apos;d like to hear about it.</p>
              {profile.email && (
              <div className="contact-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  LeetCode
                </a>
                <a href={profile.codeforces} target="_blank" rel="noreferrer">
                  Codeforces
                </a>
              </div>
              )}
            </div>

            {profile.email ? (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    required
                  />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are you building?"
                  required
                />
              </label>
              <div className="form-footer">
                <button className="btn btn-primary" type="submit">
                  Send message
                  <ArrowIcon />
                </button>
                {status === 'sent' && (
                  <p className="form-note" role="status">
                    Opening your mail app…
                  </p>
                )}
              </div>
            </form>
            ) : (
              <div className="contact-cards">
                {[
                  { label: 'GitHub', href: profile.github, note: 'Code and projects' },
                  { label: 'LinkedIn', href: profile.linkedin, note: 'Message me here' },
                  { label: 'LeetCode', href: profile.leetcode, note: '300+ problems' },
                  { label: 'Codeforces', href: profile.codeforces, note: 'Contests' },
                ].map((link) => (
                  <a className="contact-card" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <small>{link.note}</small>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {' · '}
          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          {' · '}
          <a href={profile.codeforces} target="_blank" rel="noreferrer">
            Codeforces
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
