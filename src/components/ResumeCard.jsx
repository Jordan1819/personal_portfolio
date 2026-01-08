{/* ResumeCard.jsx */}

import '../../styles/resumecard.css';

export default function ResumeCard({ title, children, className }) {
    return (
        <div className={`resume-card ${className || ''}`}>
        <h3 className="resume-card-title">{title}</h3>
            <div className="resume-card-content">
                {children}
            </div>
        </div>
    );
}