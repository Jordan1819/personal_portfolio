{/* HomeCard.jsx */}

import '../../styles/homecard.css';

export default function HomeCard({ title, description, link }) {
    return (
        <div className="home-card">
            <h3 className="home-card-title">{title}</h3>
            <p className="home-card-description">{description}</p>
            {link && (
                <a href={link} className="home-card-link">Learn More</a>
            )}
        </div>
    );
}