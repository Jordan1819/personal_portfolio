import { Link } from 'react-router-dom';
import '../../styles/home.css';
import profileImg from '../../images/meAndSandy.jpg';
import isuImg from '../../images/ISU.jpg';

const skillGroups = [
    {
        title: 'Languages',
        items: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C#', 'Java'],
    },
    {
        title: 'Tools & Platforms',
        items: ['Git', 'GitHub', 'Linux', 'AWS', 'Docker', 'REST APIs', 'VS Code'],
    },
    {
        title: 'Technical Focus',
        items: ['OOP', 'System integration', 'Network analysis', 'OS inspection', 'Applied mathematics'],
    },
];

export default function Home() {
    return (
        <main className="home-page">
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">Junior Software Engineer</p>
                    <h1>Hi, I'm Jordan Waite.</h1>
                    <p className="hero-summary">
                        I build practical, user-focused software while sharpening a broad foundation in full-stack development,
                        systems thinking, and collaborative engineering.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects" className="primary-action">View Projects</Link>
                        <a
                            href="/personal_portfolio/Jordan_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-action"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className="hero-portrait" aria-label="Jordan Waite">
                    <img src={profileImg} alt="Jordan Waite with his goldendoodle Sandy." />
                </div>
            </section>

            <section className="intro-grid" aria-label="Portfolio overview">
                <article className="intro-panel">
                    <span className="panel-label">About</span>
                    <h2>Curious, steady, and always building.</h2>
                    <p>
                        I'm focused on deepening my technical skills through practical experience and personal projects.
                        I enjoy complex problems, clear communication, and engineering decisions that serve real users.
                    </p>
                    <p>
                        Outside of code, I spend time with family, read epic fantasy novels, and challenge myself as an athlete.
                    </p>
                </article>

                <article className="intro-panel accent-panel">
                    <span className="panel-label">Current Focus</span>
                    <h2>Custom REST API</h2>
                    <p>
                        I'm building an activity tracker API from scratch, with user registration, activity logging, and
                        future metrics that help people understand their habits over time.
                    </p>
                    <a
                        href="https://github.com/Jordan1819/PersonalActivityTrackerAPI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                    >
                        Explore the repo
                    </a>
                </article>
            </section>

            <section className="skills-section">
                <div className="section-heading">
                    <p className="eyebrow">Technical Toolkit</p>
                    <h2>Skills shaped by coursework, projects, and hands-on practice.</h2>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <article className="skill-card" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="skill-list">
                                {group.items.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="education-section">
                <div className="education-image">
                    <img src={isuImg} alt="Idaho State University campus." />
                </div>

                <div className="education-copy">
                    <p className="eyebrow">Education</p>
                    <h2>B.S. in Software Engineering</h2>
                    <p className="education-school">Idaho State University</p>
                    <ul>
                        <li>GPA: 3.86</li>
                        <li>Magna Cum Laude graduate and Dean's List member</li>
                        <li>Recipient of the North Wind STEM Scholarship for academic excellence</li>
                        <li>Foundation in OOP, system integration, and pragmatic design</li>
                    </ul>
                    <a
                        href="https://www.isu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                    >
                        Visit ISU
                    </a>
                </div>
            </section>

            <section className="contact-section">
                <div>
                    <p className="eyebrow">Contact</p>
                    <h2>Open to junior software engineering opportunities.</h2>
                    <p>
                        Please feel free to reach out via LinkedIn or email. I'm always open to exploring new opportunities,
                        collaborations, and meaningful software projects.
                    </p>
                </div>
                <div className="contact-actions">
                    <a href="mailto:jtw18199@gmail.com" className="primary-action">Email Me</a>
                    <a
                        href="https://www.linkedin.com/in/jordan-waite-0a102739b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-action"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    );
}
