import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
