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
                            link="/Jordan_CV.pdf"       
                            linkDescription="Check out my resume"
                        >
                        <p>
                        Driven junior developer, lifelong learner, and problem solver. I enjoy tackling complex problems, learning new technologies, and applying engineering principles to deliver practical, user-focused solutions.
                        </p> 

                    </HomeCard>

                    <HomeCard 
                            title="About Me"                        >
                        <p>
                        I'm focused on further developing my technical skills and deepening my knowledge through practical experience and personal projects. Building a well-rounded skillset and deep understanding as a developer is very important to me.
                        </p>
                        <p>
                        Outside of work, I love spending time with my family, reading epic fantasy novels, and challenging myself as an athlete.
                        </p>
                        <p>
                        Personal growth is a core part of my life — professionally, as a collaborator, and as someone who strives to inspire those around me to learn and grow. I thrive in environments that value curiosity, initiative, and collaboration.
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
                        <b>B.S. in Software Engineering - Idaho State University</b>
                        </p>
                        <ul className="education-home-card-list">
                            <li>GPA: 3.86</li>
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
                            <li><i>Tools:</i> Git, GitHub, Linux, AWS, Android Studio, Visual Studio Code, XAMPP, REST APIs, Visual Studio</li>
                            <li><i>Networking:</i> Analyzed network traffic by inspecting packet & protocol metadata.</li>
                            <li><i>Systems Programming:</i> Low-level memory and OS inspection, modification, and execution tracing.</li>
                            <li><i>Applied Mathematics:</i> Study in engineering physics, calculus, linear algebra, and statistics.</li>
                            <li><i>Professional Skills:</i> Excellent technical writing and collaborative communication skills.</li>
                        
                        </ul>
                    </HomeCard>

                    <HomeCard
                            title="Contact Me"
                            link="https://www.linkedin.com/in/jordan-waite-0a102739b/"
                            linkDescription="LinkedIn"
                    >
                    <p>Please feel free to reach out and connect with me via LinkedIn or email. I'm always open to exploring new opportunities and projects!</p>
                    <p><b>Email:</b> jtw18199@gmail.com</p>
                    
                    </HomeCard>

                </div>
            </main>
        </div>
    );
}