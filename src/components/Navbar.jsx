{/* Navbar.jsx */}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>

      {/* Hamburger Menu */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Full nav menu */}
      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
      <Link to="/" onClick={() => setMenuOpen(false)}><span>⌂ Home</span></Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)}><span>🖳 Projects</span></Link>
      <Link to="/resume" onClick={() => setMenuOpen(false)}><span>▤ Resume</span></Link>
      <a
        href="https://github.com/jordan1819"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link githubLink"
      >
        <span className="githubLinkContent">
          <span className="githubIconWrapper">
            <img src="../githubIcon.png" alt="GitHub" className="githubIcon githubIcon--white" />
            <img src="../githubIconGray.png" alt="GitHub Dark" className="githubIcon githubIcon--dark" />
          </span>
          GitHub
        </span>
      </a>
      <Link to="/contact" onClick={() => setMenuOpen(false)}><span>✉ Contact</span></Link>
      </div>

    </nav>
  );
}
