{/* Projects.jsx */}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import '../../styles/projects.css';
import pokeballImg from '../../images/pokeball.png';

export default function Projects() {
    const [animate, setAnimate] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Trigger animation whenever this page is navigated to
        if (location.pathname === '/projects') {
        setAnimate(false);        // reset animation
        const timer = setTimeout(() => {
            setAnimate(true);       // trigger animation after short delay
        }, 50);

        return () => clearTimeout(timer); // cleanup timer
        }
    }, [location]); // run whenever location changes
    return (
        <div className="project-card-container">
            <ProjectCard
                className={animate ? 'slide-up' : ''}
                image={pokeballImg}
                imageAlt="A simple piture of a pokeball from Pokemon"
                title="Random Pokemon Team Generator-Web App"
                link="https://jordan1819.github.io/Pokemon-Team-Generator-Web-App.io/"
                linkDescription="Check it out here!"
            >
            <p>This is a fun, responsive web application that randomly generates a Pokémon team for users. 
            The application was built using JavaScript, HTML, and CSS, and it leverages the PokeAPI to fetch 
            Pokémon data and generate teams.</p>
            </ProjectCard>
        </div>
    );
}