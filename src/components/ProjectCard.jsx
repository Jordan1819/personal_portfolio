{/* ProjectCard.jsx */}

import '../../styles/projectcard.css';

export default function ProjectCard({ 
    image,
    imageAlt,
    title,
    children,
    className,
    link,
    linkDescription }) {
    return (
        <div className={`project-card ${className || ''}`}>
            {image && (
                <div className="project-card-image">
                    <img src={image} alt={imageAlt} />
                </div>
            )}
            <h3 className="project-card-title">{title}</h3>
            <div className="project-card-content">
                {children}
                {link && (
                    <a 
                        href={link}
                        className="project-card-link"
                        target="_blank"
                        rel="noopener norefferer"
                    >
                        {linkDescription}
                    </a>
                )}
            </div>
        </div>
    );
}