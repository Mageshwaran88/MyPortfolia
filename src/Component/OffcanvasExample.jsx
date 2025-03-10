import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skill from './Skill';
import Services from './services';
import "../Edit/E.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faConciergeBell, faUser, faProjectDiagram, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CgMenuLeftAlt } from "react-icons/cg";
import profile from "../assets/8126866b-feaa-45b8-af44-1ecaf379ee33.jpg"

function OffcanvasExample() {
  const [activeLink, setActiveLink] = useState('#home');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [padding, setPadding] = useState("80px 0px 60px 0px");

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth < 768) {
        // Small devices
        setPadding("25px 0px 10px 0px");
      } else {
        // Medium and larger devices
        setPadding("80px 0px 0px 0px");
      }
    };

    // Initial padding check
    updatePadding();

    // Add resize event listener
    window.addEventListener("resize", updatePadding);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", updatePadding);
  }, []);
  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          background: "linear-gradient(to right, #ffffff, rgb(197, 245, 255))",
          padding: "8px",
          position: "sticky",
          top: "0px",
          zIndex: "10",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Container>
          {/* Navbar Brand with Animation */}
          <Navbar.Brand href="#home" className="fs-2 animate-rotateAndColor">
            Pers<span className="text-info fs-1">o</span>nal
          </Navbar.Brand>

          {/* Toggle Icon for Small Screens */}
          <div
            className="d-lg-none d-block"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <CgMenuLeftAlt size={30} className="text-dark" />
          </div>

          {/* Offcanvas Menu for Small Screens */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleClose}
            className="offcanvas-animation"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand href="#home" className="fs-2 animate-rotateAndColor fw-bold">
                Pers<span className="text-info fs-1">o</span>nal
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>

            {/* Profile Icon in Offcanvas */}
            <div className="d-flex justify-content-center d-lg-none my-3">
              <i
                className="bi bi-person-circle animate-rotateAndColor"
                style={{
                  fontSize: "120px",
                  color: "rgb(47 47 47)",
                  transition: "transform 0.3s ease-in-out"
                }}
              ></i>
            </div>

            {/* Offcanvas Body with Links */}
            <Offcanvas.Body>
  <Nav className="justify-content-center flex-grow-1 pe-3">
    {[
      { href: "#home", icon: faHome, label: "Home" },
      { href: "#services", icon: faConciergeBell, label: "Services" },
      { href: "#about", icon: faUser, label: "About" },
      { href: "#project", icon: faProjectDiagram, label: "Project" },
      { href: "#skill", icon: faCogs, label: "Skill" },
      { href: "#contact", icon: faEnvelope, label: "Contact" }
    ].map(({ href, icon, label }) => (
      <Nav.Link
        key={href}
        href={href}
        className={`nav-link px-md-2 mx-md-4 ${activeLink === href ? 'active' : ''}`}
        style={{
          fontWeight: activeLink === href ? 'bold' : 'normal',
          padding: '0.6rem 0',
        }}
        onClick={() => {
          handleSetActive(href);
          handleClose();
        }}
      >
        <FontAwesomeIcon icon={icon} className="me-2 d-md-none" /> {label}
        {/* Animated underline element */}
        <span className="underline"></span>
        <hr className="d-md-none" />
      </Nav.Link>
    ))}
  </Nav>
</Offcanvas.Body>


          </Navbar.Offcanvas>
        </Container>
      </Navbar>


      <section id="home" className="section" style={{ padding }}>
        <Container>
          <Home />
        </Container>
      </section>

      <section id="about" className="section" style={{ padding }}>
        <Container>
          {/* <h1>About Section</h1>
          <p>This is the about section content.</p> */}
          <About />
        </Container>
      </section>

      <section id="project" style={{ padding }}>
        <Container>
          <Projects />
        </Container>
      </section>


      <section id="skill" className="section" style={{ padding }}>
        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Skill />
        </Container>
      </section>
      <section id="services" className="section" style={{ padding }}>
        <Container>
          <Services />
        </Container>
      </section>
      <section id="contact" className="section" style={{ padding }}>

        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Contact />
        </Container>
      </section>

      <section id="contact" style={{ padding: "0", backgroundColor: "rgb(170 241 255)" }}>
        <Container style={{ backgroundColor: "rgb(170 241 255)", padding: "50px 0", justifyContent: "center", display: "flex" }}>
          <div className='text-center'>
            <h1>Portfolio</h1>
            <hr />
            <div className="d-flex justify-content-center mb-0">
              <ul className="list-unstyled d-flex gap-3">
                <li className="social-icon bg-white rounded-circle shadow d-flex justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/mageshwaran88" target='blank' className="text-info">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="social-icon bg-white rounded-circle shadow d-flex justify-content-center align-items-center">
                <a href="https://www.instagram.com/magesh__official__/" target='blank' className="text-info">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="social-icon bg-white rounded-circle shadow d-flex justify-content-center align-items-center">
                <a href="https://web.whatsapp.com/" target='blank' className="text-info">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li className="social-icon bg-white rounded-circle shadow d-flex justify-content-center align-items-center">
                <a href="https://github.com/Mageshwaran88/" target='blank' className="text-info">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>


            <div className="d-flex justify-content-center mb-3 flex-wrap">
              <Nav.Link href="#home" className='px-3 text-muted' style={{ fontWeight: "500" }} id='nav-link'>Home</Nav.Link>
              <Nav.Link href="#about" className='px-3 text-muted' style={{ fontWeight: "500" }} id='nav-link'>About</Nav.Link>
              <Nav.Link href="#project" className='px-3 text-muted' style={{ fontWeight: "500" }} id='nav-link'>Project</Nav.Link>
              <Nav.Link href="#skill" className='px-3 text-muted' style={{ fontWeight: "500" }} id='nav-link'>Skill</Nav.Link>
              <Nav.Link href="#contact" className='px-3 text-muted' style={{ fontWeight: "500" }} id='nav-link'>Contact</Nav.Link>
            </div>
            <p className='mt-2 d-flex justify-content-center align-items-center'><i style={{ fontSize: "14px" }} className="bi bi-c-circle text-info  bg-white  px-1 rounded-circle"></i>opyright.com</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OffcanvasExample;
