
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
        <p>Welcome to my professional landing page!</p>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Joe's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
