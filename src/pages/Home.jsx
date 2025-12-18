/* Home page structure:
    <Hero>
        Name and Title
        One Liner Summary
        Call to Action Buttons (view resume, view projects)
    <About Me>
        Paragraph or two - keep it professional
        University and degree focus
        Career goals/ what I'm passionate about
        Standout achievements/ interests
    <Skills & Total Experience>
        bulleted list of skills/ tech stack
        Programming languages
        frameworks (react, android/kotlin, flask)
        tools (git, docker, linux)
    <Featured Projects/ Project Preview>
        
    <Resume Callout>
        Call to action to view resume
*/

{/* Home.jsx */}

import HomeCard from '../components/HomeCard';

export default function Home() {
    return (
        <div>
            <main>
                <div className="home-card-container">
                    <HomeCard
                        title="About Me"
                        description="This is some description"
                        link=""
                    />
                
                </div>
            </main>
        </div>
    );
}