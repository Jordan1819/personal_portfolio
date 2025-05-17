export default function Navbar() {
    return (
      <nav>
        <div class="nav-right">
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
        <a href="#">✎ Blog</a>
        </div>
      </nav>
    );
  }
  