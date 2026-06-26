import '../../styles/resume.css';

const resumeHighlights = [
    'Contract frontend developer with production React experience, responsive UI implementation, and CI/CD-aware debugging.',
    'Professional AI software engineering contractor experienced in repository-level debugging, validated fixes, prompt engineering optimization, and fail-to-pass regression tests.',
    'Full-stack project background across Python, Quart, OpenAI API, PHP, JavaScript, SQL, Docker, AWS, and GitHub Actions.',
    'Software Engineering graduate with a 3.86 GPA, Magna Cum Laude honors, and focused coursework in secure systems, OOP, web development, databases, DSA, and architecture.',
];

export default function Resume() {
    return (
        <main className="resume-page">
            <section className="resume-hero">
                <p className="eyebrow">Resume</p>
                <h1>Clear background, practical skills, and steady momentum.</h1>
                <p>
                    My resume summarizes the coursework, projects, and professional experience I'm bringing to
                    engineering roles.
                </p>

                <div className="resume-actions">
                    <a
                        href="/personal_portfolio/Jordan_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-action"
                    >
                        View Resume
                    </a>
                    <a
                        href="/personal_portfolio/Jordan_CV.pdf"
                        download
                        className="secondary-action"
                    >
                        Download PDF
                    </a>
                </div>
            </section>

            <section className="resume-content">
                <article className="resume-panel">
                    <p className="eyebrow">Highlights</p>
                    <ul>
                        {resumeHighlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                </article>

                <article className="resume-panel contrast-panel">
                    <p className="eyebrow">Looking For</p>
                    <h2>Junior SWE roles where I can contribute, learn quickly, and grow with a team.</h2>
                    <p>
                        I am especially interested in teams that value curiosity, initiative, maintainable code, and
                        clear communication.
                    </p>
                    <a href="mailto:jtw18199@gmail.com" className="inline-link">Start a conversation</a>
                </article>
            </section>
        </main>
    );
}
