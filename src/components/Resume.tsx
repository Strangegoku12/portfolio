import { Laptop,BookMarked } from "lucide-react";


import './resume.css'
function Resume() {
  return (
    <>
      <article className="resume ml-6" data-page="resume">

        <header>
          <h2 className="text-white text-2xl font-semibold mb-3 article-title">Resume</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <BookMarked color="yellow" />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">City Montessori School (10th)</h4>

              <span>20016 — 2018</span>

              <p className="timeline-text">
                Completed with 85%, with a strong foundation in Physics, Chemistry, and Mathematics.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">City Montessori School (12th)</h4>

              <span>2018 — 2020</span>

              <p className="timeline-text">
                Completed with 82%, with a strong foundation in Physics, Chemistry, and Mathematics.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Kiet Group Of Institutions (B.Tech)</h4>

              <span>2020 — 2024</span>

              <p className="timeline-text">
                B.Tech in Computer Science – Graduated with a 7.7 CGPA, gaining strong knowledge in software development, data structures, databases, and modern computing technologies.
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
            <Laptop color="yellow"/>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Progressive Infotech Pvt Ltd.</h4>

              <span>2025 — Present</span>

              <p className="timeline-text">
                Led development of responsive, user-friendly interfaces using Angular, HTML, and CSS; optimized performance,
                ensured cross-browser compatibility, and troubleshot technical issues. Refactored 32 static tables into a dynamic
                reusable component, reducing load time by 60%.– Collaborated with cross-functional teams to integrate frontend with backend systems, boosting productivity;
                mentored junior developers, conducted code reviews, and promoted best practices to foster continuous learning
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">CodeMaya</h4>

              <span>2024 — 2025</span>

              <p className="timeline-text">
                Led frontend development for loan and sales platforms (Tradeline, Provarity) using Angular and ReactJS, delivering responsive, high-performance dashboards that improved UI/UX and digitized business workflows. Built scalable backend services with NestJS, PostgreSQL, JWT, and WebSocket, integrating APIs such as ChatGPT and Zoom while mentoring team members and promoting frontend best practices.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Techmihir Naik.in</h4>

              <span>2023 — 2023</span>

              <p className="timeline-text">
                 Aresponsive frontend for Postica using Angular, CSS3, and modern UI libraries, enabling seamless travel bookings
across devices. Redesigned and optimized responsive web UI for a seamless customer experience across all screen sizes
              </p>

            </li>

          </ol>

        </section>

        <section className="skill">

          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Web design</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '80%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">React</h5>
                <data value="70">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '70%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Angular</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '90%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Nodejs</h5>
                <data value="50">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '80%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">ExpressJs</h5>
                <data value="50">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '80%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">MongoDB</h5>
                <data value="50">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '70%' }}></div>
              </div>

            </li>

             <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">SQL</h5>
                <data value="50">85%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '85%' }}></div>
              </div>

            </li>

             <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Postgres</h5>
                <data value="50">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '70%' }}></div>
              </div>

            </li>

             <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Git</h5>
                <data value="50">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '90%' }}></div>
              </div>

            </li>

             <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Docker</h5>
                <data value="50">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '70%' }}></div>
              </div>

            </li>

             <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">AWS(EC2)</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '50%' }}></div>
              </div>

            </li>

          </ul>

        </section>

      </article>
    </>
  )
}

export default Resume