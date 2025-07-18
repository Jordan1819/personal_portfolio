import Navbar from "../components/Navbar";

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
        Maybe
    <Resume Callout>
        Call to action to view resume
*/

export default function Home() {
    return (
        <div>
            <main>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <p>Explore some stuff?</p>
            </main>
        </div>
    );
}