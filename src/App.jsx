import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [currentComponent, setCurrentComponent] = useState('aboutMe');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'aboutMe':
        return <AboutMe />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header />
      <nav>
        <button onClick={() => setCurrentComponent('aboutMe')}>About Me</button>
        <button onClick={() => setCurrentComponent('blog')}>Blog</button>
        <button onClick={() => setCurrentComponent('contact')}>Contact</button>
        <button onClick={() => setCurrentComponent('portfolio')}>
          Portfolio
        </button>
        <button onClick={() => setCurrentComponent('resume')}>Resume</button>
      </nav>
      <main>{renderComponent()}</main>
    </div>
  );
}

export default App;
