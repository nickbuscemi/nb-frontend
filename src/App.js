import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { NavBar2 } from './components/NavBar2';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects2 } from './components/Projects2';
import { ProjectsAll }  from './components/ProjectsAll';
import { NavBarDesk } from './components/NavBarDesktop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function App() {

  const { width } = useWindowSize(); 
  const isDesktop = width >= 768;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <>
            {isDesktop ? <NavBarDesk /> : <NavBar />}
              <Banner />
              <Skills />
              <Projects2 />
              <Contact />
            </>
          } />
          <Route path="/projects-all" element={
            <>
            <NavBar2 />
            <ProjectsAll />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
