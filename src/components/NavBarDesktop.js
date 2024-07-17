import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import BUSCEMIflat from '../assets/img/BUSCEMIflat.svg';

export const NavBarDesk = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`desktop-navbar ${scrolled ? 'scrolled' : ''}`} expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={BUSCEMIflat} alt="Logo" width={200} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="desktop-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="desktop-navbar-nav" className="desktop-custom-navbar-collapse">
          <Nav className="desktop-me-auto desktop-navbar-nav">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active desktop-nav-link' : 'desktop-nav-link'} onClick={() => { onUpdateActiveLink('home'); setExpanded(false); }}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active desktop-nav-link' : 'desktop-nav-link'} onClick={() => { onUpdateActiveLink('skills'); setExpanded(false); }}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active desktop-nav-link' : 'desktop-nav-link'} onClick={() => { onUpdateActiveLink('projects'); setExpanded(false); }}>Projects</Nav.Link>
          </Nav>
          <span className="desktop-navbar-text d-flex align-items-center">
          <Nav.Link href="#connect" className="desktop-nav-link" onClick={() => { onUpdateActiveLink('connect'); setExpanded(false) }}>
              <button className="vvd connect-btn">
                <span>Let's Connect</span>
              </button>
            </Nav.Link>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicholas-buscemi-0023a9248/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/nickbuscemi"><img src={githubIcon} alt="" /></a>
              <a href="https://www.instagram.com/"><img src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
