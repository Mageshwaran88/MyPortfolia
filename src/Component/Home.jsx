import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import paner from "../assets/Pasted image-ND94dH5D.png"
import "../Edit/E.css";


// Import the PDF file
import resumePDF from '../assets/Mageshwaran.pdf'; // Adjust the path according to where you placed the PDF
import Aos from 'aos';
import "aos/dist/aos.css"
import HireMeModal from './HireMeModal';




const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="" style={{ padding: "100px 0px" }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} sm={12} className="text-md-left mb-4 mb-md-0" data-aos="fade-up">
            <div>
              <span className='text-info animate-fadeIn'>Hi there!</span>
              <div className='fs-1'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: "I'm Mageshwaran"
                  }}
                />
              </div>
              <h4 className='animate-fadeIn text-info my-1' style={{ fontWeight: "900", fontSize: "27px" }}>Front-End Developer & Designer...</h4>
              <div className='mt-4 animate-rotateWave'>
              <div className="d-flex justify-content-start mb-0">
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
              </div>
              <a
                href={resumePDF} // Link to the imported PDF file
                download="Mageshwaran.pdf" // Specify the file name for download
                className="btn btn-info text-white shadow mt-3 px-3 py-1" // Bootstrap button classes
                style={{
                  borderRadius: "4px",
                  display: "inline-block",
                  textAlign: "center",
                  textDecoration: "none"
                }}
              >
                Download CV
              </a>

            </div>
          </Col>

          <Col md={6} sm={12} className="text-center" data-aos="fade-down">
            <img className='img-fluid mt-3 animate-shake' src={paner} alt="Interview Illustration" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
