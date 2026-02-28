/**
 * @purpose Main portfolio page for John Angelo Cabalfin.
 * Sections: Header → Intro → About Me → Projects → Contact/Footer
 */

import Link from "next/link";
import Header from "./components/Header";

/* ─── Data ─────────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    title: "The Green Knight",
    tags: ["CSS3", "HTML5", "JavaScript"],
    description:
      "A fan tribute site for the 2021 Arthurian film. Built with vanilla HTML, CSS, and JavaScript, focusing on atmospheric design, responsive layout, and immersive storytelling through web design.",
    repo: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Campus Connect",
    tags: ["React", "Node.js", "PostgreSQL"],
    description:
      "A student portal that centralizes announcements, schedules, and academic resources for a university community, with role-based access for students and faculty.",
    repo: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Pawsafe Shelter",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    description:
      "A web platform for a local animal shelter that handles pet listings, adoption requests, and volunteer scheduling — built with a focus on clarity and accessibility.",
    repo: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Task Horizon",
    tags: ["React", "Firebase", "CSS3"],
    description:
      "A lightweight task management app with real-time sync, drag-and-drop prioritization, and a clean minimal interface designed around the concept of long-term focus.",
    repo: "#",
    live: "#",
  },
];

/* ─── Icons ─────────────────────────────────────────────── */

/** @purpose GitHub icon SVG */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/** @purpose LinkedIn icon SVG */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** @purpose External link arrow SVG */
function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="desktop">

      {/* ── Header ── */}
      <Header />

      {/* ── Intro ── */}
      <section className="intro-section">
        <div className="intro-text-container">
          <h1 className="intro-title">
            I design and develop reliable systems with a human-centered approach.
          </h1>
          <hr className="divider-line" />
          <p className="intro-description">
            I&rsquo;m a Computer Science graduate from Iloilo who enjoys building structured,
            maintainable systems that solve real-world problems. With a foundation in
            software development and a growing interest in UX, I focus on clarity,
            usability, and long-term thinking.
          </p>
        </div>
        <div className="intro-buttons">
          <a href="#projects" className="btn-primary">Projects</a>
          <Link href="/contact" className="btn-outline">Contact</Link>
        </div>
      </section>

      {/* ── About Me ── */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I&rsquo;m currently staying in Iloilo city with the dream of breaking into tech.
              I&rsquo;m drawn to building structured, reliable systems designed with long-term
              clarity in mind.
              <br /><br />
              Outside of tech, I volunteer at local animal shelters — an experience that
              has shaped my sense of responsibility and patience.
              <br /><br />
              I&rsquo;m also inspired by fantasy literature, where thoughtful world-building
              and strong systems bring stories to life.
              <br /><br />
              To me, good software — like good stories — is built with care and meant to endure.
            </p>
          </div>
          <div className="about-photo">
            <div className="about-photo-placeholder">Photo coming soon</div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <hr className="section-divider" />
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image-placeholder">Project screenshot</div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="project-links">
                    <a href={project.repo} className="btn-repo" target="_blank" rel="noopener noreferrer">
                      Github Repo <ArrowIcon />
                    </a>
                    <a href={project.live} className="btn-live" target="_blank" rel="noopener noreferrer">
                      Open Project <ArrowIcon />
                    </a>
                  </div>
                  <button className="btn-read-more">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Contact / Footer ── */}
      <footer className="contact-section">
        <div className="contact-info">
          <div className="contact-title-group">
            <h2 className="section-title">Let&rsquo;s Work Together</h2>
            <hr className="section-divider" />
          </div>
          <p className="contact-detail">Iloilo, Philippines</p>
          <a href="mailto:gelcabalfin@gmail.com" className="contact-detail">
            gelcabalfin@gmail.com
          </a>
        </div>
        <p className="contact-copyright">&copy; John Angelo Cabalfin 2026</p>
        <div className="social-links">
          <a
            href="https://github.com/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </footer>

    </div>
  );
}
