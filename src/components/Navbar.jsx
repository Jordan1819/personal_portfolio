import { useState } from 'react';
import '../index.css'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Full nav menu */}
      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
      <a href="index.html">⌂ Home</a>
      <a href="#">🖳 Projects</a>
      <a href="#">▤ Resume</a>
      <a href="https://github.com/jordan1819" target="_blank" rel="noopener noreferrer" className="nav-link githubLink">
        <span className="githubIconWrapper">
          <img src="../githubIcon.png" alt="GitHub" className="githubIcon githubIcon--white" />
          <img src="../githubIconGray.png" alt="GitHub Dark" className="githubIcon githubIcon--dark" />
        </span> 
        <span className="githubText">GitHub</span>
      </a>
      <a href="#">✉ Contact</a>
      {/* <a href="#">✎ Blog</a> */}
      </div>

    </nav>
  );
}
