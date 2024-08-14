
import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Joe's Digital Portfolio Hub</h1>
        <nav>
          <ul>
            <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://your-portfolio-website.com" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
   {/* Featured Projects Section */}
   <section>
          <h2>Featured Projects</h2>
          <div className="projects">
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1.</p>
              <a href="https://github.com/your-project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
              <a href="https://github.com/your-project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
            <div className="project">
              <h3>Project 3</h3>
              <p>Description of Project 3.</p>
              <a href="https://github.com/your-project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        </section>
      </main>


      {/* Footer */}
      <footer>
        <p>© 2024 Joe's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
