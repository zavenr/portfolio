import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1>Zaven R.</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main intro section */}
      <section className="intro">
        <h2>Hi, I'm Zaven</h2>
        <p>Computer Science Student</p>
        <p>I love building things with code and learning new technologies.</p>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h3>About Me</h3>
        <p>
          I'm a Computer Science student passionate about software development.
          I enjoy solving problems and creating useful applications.
        </p>

        <div className="skills">
          <h4>Skills I'm Learning</h4>
          <div className="skill-tags">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML/CSS</span>
            <span>Python</span>
            <span>Java</span>
            <span>Git</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h3>My Projects</h3>
        <div className="project-list">
          <div className="project">
            <h4>Portfolio Website</h4>
            <p>
              This responsive portfolio built with React to showcase my work.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/zavenr/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://zavenr.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="project">
            <h4>Coming Soon...</h4>
            <p>
              More projects will be added as I continue learning and building!
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h3>Get In Touch</h3>
        <p>Feel free to reach out if you'd like to connect!</p>
        <div className="contact-links">
          <a
            href="https://github.com/zavenr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:your.email@example.com">Email</a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Zaven R. Thanks for visiting!</p>
      </footer>
    </div>
  );
}
