{/* Home.jsx */}
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import  '../../styles/home.css';
import profileImg from '../../images/meAndSandy.jpg';
import isuImg from '../../images/ISU.jpg';

export default function Home() {
    const location = useLocation()
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (location.pathname === "/") {
            // reset animation
            setLoaded(false);

            // trigger animation after next tick
            const timer = setTimeout(() => setLoaded(true), 10);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);
    return (
        <div>
            <main className={`home ${loaded ? 'home-loaded' : ''}`}>
                <div className="home-card-container">
                    <HomeCard 
                            title="Hi, I'm Jordan"
                            image={profileImg}
                            imageAlt="Jordan and his cute goldendoodle dog Sandy."
                            link="/resume"
                            internal
                            linkDescription="Check out my resume"
                        >
                        <p>
                        Driven junior developer, lifelong learner, and problem solver.
                        </p> 
                        <p>
                        Passionate about building impactful, creative software solutions.
                        </p>
                    </HomeCard>

                    <HomeCard 
                            title="About Me"
                            link="/contact"
                            internal
                            linkDescription="Contact me"
                        >
                        <p>
                        I enjoy exploring and experimenting with new technologies. Building a well-rounded skillset and deep understanding as a developer is very important to me.
                        </p>
                        <p>
                        Right now, I'm focused on further developing my technical skills and deepening my knowledge through practical experience and personal projects.
                        </p>
                        <p>
                        Outside of work, I love spending time with my family, reading epic fantasy novels, and challenging myself as an athlete.
                        </p>
                        <p>
                        I've made it my life mission to <i>become the strongest version of myself</i> — as a professional, a friend, and someone who inspires others to do the same.
                        </p>
                    </HomeCard>

                    <HomeCard 
                            title="Education"
                            image={isuImg}
                            imageAlt="A beautiful photo of Idaho State University Campus."
                            link="https://www.isu.edu/"
                            linkDescription="Check out ISU"
                        >
                        <p>
                        <b>B.S. in Software Engineering - Idaho State University.</b>
                        </p>
                        <ul className="education-home-card-list">
                            <li>GPA: 3.88</li>
                            <li>Magna Cum Laude Graduate & Dean's List Member</li>
                            <li>Recipient of the North Wind STEM Scholarship for academic excellence</li>
                            <li>Foundation in OOP, system integration, and pragmatic design</li>
                        </ul>
                    </HomeCard>

                    <HomeCard 
                            title="Skills"
                            link="/projects"
                            internal
                            linkDescription="Check out some of my projects"
                        >
                        <ul className="skills-home-card-list">
                            <li><i>Languages:</i> Python, JavaScript, HTML, CSS, SQL, C#, Java</li>
                            <li><i>Tools:</i> Git, GitHub, Linux, AWS, Android Studio, Visual Studio Code, Visual Studio</li>
                            <li><i>Networking:</i> Analyzed network traffic by inspecting packet & protocol metadata.</li>
                            <li><i>Systems Programming:</i> Low-level memory and OS inspection, modification, and execution tracing.</li>
                            <li><i>Applied Mathematics:</i> Study in engineering physics, calculus, linear algebra, and statistics.</li>
                            <li><i>Professional Skills:</i> Excellent technical writing and collaborative communication skills.</li>
                        
                        </ul>
                    </HomeCard>

                </div>
            </main>
        </div>
    );
}