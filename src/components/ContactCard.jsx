{/* ContactCard.jsx */}

import '../../styles/contactcard.css';

export default function ContactCard({
    title,
    description,
    link,
    linkDescription
    }) {
    return (
        <div className="contact-card">
            <h3 className="contact-card-title">{title}</h3>
            <p>{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
            >
                {linkDescription}
            </a>
        </div>
    );
}