{/* HomeCard.jsx */}

import { Link } from 'react-router-dom';
import '../../styles/homecard.css';

export default function HomeCard({ 
    image,
    title,
    description,
    link,
    linkDescription,
    imageAlt,
    internal = false,
    children }) {
    return (
        <div className="home-card">
        {image && (
            <div className="home-card-image">
                <img src={image} alt={imageAlt} />
            </div>
        )}
            <h3 className="home-card-title">{title}</h3>
            {description && <p>{description}</p>}

            {children}
            
            {link && (
                internal ? (
                <Link to={link} className="home-card-link">
                    {linkDescription}
                </Link>
                ) : (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-card-link"
                >
                    {linkDescription}
                </a>
                )
            )}
        </div>
    );
}