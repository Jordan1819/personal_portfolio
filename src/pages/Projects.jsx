import '../../styles/projects.css';
import pokeballImg from '../../images/pokeball.png';
import portfolioOne from '../../images/Portfolio1.png';
import portfolioTwo from '../../images/Portfolio2.png';

const featuredProject = {
    title: 'Random Pokemon Team Generator',
    description:
        'A responsive web application that generates random Pokemon teams using live data from the PokeAPI. The project focuses on API integration, dynamic rendering, and approachable UI interactions.',
    image: pokeballImg,
    imageAlt: 'A Pokeball illustration for the Pokemon team generator project.',
    link: 'https://jordan1819.github.io/Pokemon-Team-Generator-Web-App.io/',
    tech: ['JavaScript', 'HTML', 'CSS', 'PokeAPI', 'Responsive UI'],
};

const upcomingProjects = [
    {
        title: 'Activity Tracker API',
        description: 'A custom REST API for logging activities, managing users, and eventually surfacing habit metrics.',
        status: 'In progress',
    },
    {
        title: 'Portfolio Iteration',
        description: 'A living portfolio site for presenting projects, technical growth, and professional materials.',
        status: 'Active',
    },
];

export default function Projects() {
    return (
        <main className="projects-page">
            <section className="projects-hero">
                <p className="eyebrow">Selected Work</p>
                <h1>Projects with clear goals, practical constraints, and room to grow.</h1>
                <p>
                    This page will expand as I publish more work. For now, it highlights a completed web app and a few
                    active areas where I'm continuing to build.
                </p>
            </section>

            <section className="featured-project">
                <div className="project-visual">
                    <img src={featuredProject.image} alt={featuredProject.imageAlt} />
                </div>

                <div className="project-details">
                    <p className="eyebrow">Featured Project</p>
                    <h2>{featuredProject.title}</h2>
                    <p>{featuredProject.description}</p>

                    <div className="tech-stack" aria-label="Project technologies">
                        {featuredProject.tech.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>

                    <a
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-action"
                    >
                        Launch Project
                    </a>
                </div>
            </section>

            <section className="project-gallery" aria-label="Portfolio screenshots">
                <img src={portfolioOne} alt="Portfolio project screenshot." />
                <img src={portfolioTwo} alt="Portfolio project screenshot variation." />
            </section>

            <section className="upcoming-section">
                <div className="section-heading">
                    <p className="eyebrow">Next Up</p>
                    <h2>More project writeups are on the way.</h2>
                </div>

                <div className="upcoming-grid">
                    {upcomingProjects.map((project) => (
                        <article className="upcoming-card" key={project.title}>
                            <span>{project.status}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
