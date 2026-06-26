import '../../styles/resume.css';

const resumeHighlights = [
    'Software Engineering graduate with a 3.86 GPA',
    'Hands-on experience with JavaScript, Python, SQL, REST APIs, and Docker',
    'Strong technical writing, collaboration, and problem-solving habits',
];

export default function Resume() {
    return (
        <main className="resume-page">
            <section className="resume-hero">
                <p className="eyebrow">Resume</p>
                <h1>Clear background, practical skills, and steady momentum.</h1>
                <p>
                    My resume summarizes the coursework, tools, and project experience I'm bringing into junior software
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
