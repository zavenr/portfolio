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
      </section>

      {/* About */}
      <section id="about" className="about">
        <h3>About Me</h3>
        <p>
          I’m a Computer Science student at Metropolitan State University of
          Denver, graduating in May 2027. I’m passionate about computer science
          and the ways technology can be used to build tools that make a real
          impact. My background as a CNC Programmer/Machinist at Ouroboros Space
          and Defense strengthened my problem solving skills, attention to
          detail, and ability to work with complex systems skills I now apply to
          skills I now apply to building projects, learning new technologies and
          more. I’m eager to apply my skills, contribute to impactful projects,
          and continue growing in professional, real world settings
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
          {/*P1*/}
          <div className="project">
            <h4>Space Debris Risk Model</h4>
            <p>Simulate and visualize space debris close-approach events</p>
            <div className="project-links">
              <a
                href="https://github.com/zavenr/space-debris-risk-model"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://zavenr.github.io/space-debris-risk-model"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site, coming soon
              </a>
            </div>
          </div>

          {/*P2*/}
          <div className="project">
            <h4>Calorie Tracker</h4>
            <p>
              A full-stack fitness and nutrition app that lets users log food,
              monitor daily calories, and track macronutrient intake.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/zavenr/calorie-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://zavenr.github.io/calorie-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site, coming soon
              </a>
            </div>
          </div>

          {/*P3*/}
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

          {/*P4*/}
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
          <a href="mailto:zavenran@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/zavenranum"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Zaven R. Thanks for visiting!</p>
      </footer>
    </div>
  );
}
