import '../../styles/projects.css';
import ironlogImg from '../../images/ironlog.png';
import pokeballImg from '../../images/pokeball.png';

const featuredProjects = [
    {
        title: 'IronLog',
        label: 'Featured Project',
        description:
            'A minimalist full-stack workout tracker for resistance training. Users can log sessions with multiple exercises and sets, track total volume, review recent history, and visualize progress by exercise.',
        image: ironlogImg,
        imageAlt: 'IronLog workout tracker application preview.',
        imageClassName: 'project-image',
        link: 'https://iron-log-eta-gilt.vercel.app/auth',
        tech: ['React 18', 'Vite', 'React Router', 'Recharts', 'Supabase', 'PostgreSQL', 'Vercel'],
        details: [
            'Private user accounts with Supabase Auth and Row Level Security.',
            'Live session volume counter with exercise-name autocomplete.',
            'Dashboard aggregates volume across sessions and ranks exercises visually.',
        ],
    },
    {
        title: 'Random Pokemon Team Generator',
        label: 'Web App',
        description:
            'A responsive web application that generates random Pokemon teams using live data from the PokeAPI. The project focuses on API integration, dynamic rendering, and approachable UI interactions.',
        image: pokeballImg,
        imageAlt: 'A Pokeball illustration for the Pokemon team generator project.',
        imageClassName: 'project-image project-image-rounded',
        link: 'https://jordan1819.github.io/Pokemon-Team-Generator-Web-App.io/',
        tech: ['JavaScript', 'HTML', 'CSS', 'PokeAPI', 'Responsive UI'],
        details: [
            'Fetches live Pokemon data from an external API.',
            'Formats sselected fetched data to generate randomized teams through a simple browser-based interaction.',
            'Built with responsive frontend fundamentals and lightweight styling.',
        ],
    },
];

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
                    This page will expand as I publish more work. For now, it highlights some of my favorite projects, along with a few upcoming initiatives that are in progress or planned for the near future. My GitHub profile remains my full project portfolio.
                </p>
            </section>

            <section className="featured-projects" aria-label="Featured projects">
                {featuredProjects.map((project) => (
                    <article className="featured-project" key={project.title}>
                        <div className="project-visual">
                            <img src={project.image} alt={project.imageAlt} className={project.imageClassName} />
                        </div>

                        <div className="project-details">
                            <p className="eyebrow">{project.label}</p>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <ul className="project-highlights">
                                {project.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>

                            <div className="tech-stack" aria-label={`${project.title} technologies`}>
                                {project.tech.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-action"
                            >
                                Launch Project
                            </a>
                        </div>
                    </article>
                ))}
            </section>

            <section className="project-gallery" aria-label="Portfolio screenshots">

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
