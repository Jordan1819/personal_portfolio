{/* Resume.jsx */}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResumeCard from '../components/ResumeCard';
import  '../../styles/resume.css';


export default function Resume() {
    const [animate, setAnimate] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Trigger animation whenever this page is navigated to
        if (location.pathname === '/resume') {
        setAnimate(false);        // reset animation
        const timer = setTimeout(() => {
            setAnimate(true);       // trigger animation after short delay
        }, 50);

        return () => clearTimeout(timer); // cleanup timer
        }
    }, [location]); // run whenever location changes

    return (
        <div className="resume-card-container">
            <ResumeCard 
                title="Resume"
                className={animate ? 'slide-up' : ''}
            >
                <p>View or download my resume below:</p>
                <a
                    href="/personal_portfolio/Jordan_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-card-link"
                >
                    View Resume
                </a>
                <a
                    href="/personal_portfolio/Jordan_CV.pdf"
                    download
                    className="resume-card-link"
                >
                    Download Resume
                </a>
            </ResumeCard>  
        </div>  
    );
}