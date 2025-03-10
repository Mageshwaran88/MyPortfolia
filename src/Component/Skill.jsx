import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Edit/E.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import imgjs from "../assets/download.png"
import { FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import icons
import { SiPostgresql, SiNextdotjs } from 'react-icons/si'; // MongoDB and MySQL icons
// import { Card, Col } from 'react-bootstrap'

const Skill = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container className="my-5">
      <Row className="animate-fadeIn">
        <Col>
          <h3 style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            color: "#003366",
            letterSpacing: "1.5px",
            animation: "fadeInDown 1s ease-in-out"
          }} className='text-center animate-rotateAndColor'>Skills</h3>
          {/* <hr /> */}
        </Col>
      </Row>
      <Row className="animate-fadeIn my-5">
        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="flip-left" className="coll py-2 shadow card-hover-effect" id="">
            <Card.Body style={{ minHeight: "0px" }}>
              <FaHtml5 size={50} className="mb-3" color="#E34F26" />
              <FaCss3Alt size={50} className="mb-3" color="#1572B6" />
              <Card.Title>HTML & CSS</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="flip-left" className='coll py-2 shadow card-hover-effect'>
            <Card.Body style={{ minHeight: "0px" }}>
              {/* <FaJs size={50} className="mb-3" color="#fffff" /> */}
              <img src={imgjs} width={100} alt="" />
              <Card.Title>JavaScript</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="flip-right" style={{ border: "none" }} className='py-2 shadow card-hover-effect'>
            <Card.Body style={{ minHeight: "0px" }}>
              <FaReact size={50} className="mb-3" color="#61DAFB" />
              <Card.Title>React</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="zoom-out-up" style={{ border: "none" }} className="py-2 shadow card-hover-effect">
            <Card.Body style={{ minHeight: "0px" }}>
              <SiNextdotjs size={50} className="mb-3" color="black" />
              <Card.Title>Next.js</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Skilled in Next.js for building server-side rendered (SSR) and static web applications, optimizing performance and SEO.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="zoom-in-up" style={{ border: "none" }} className="py-2 shadow card-hover-effect">
            <Card.Body style={{ minHeight: "0px" }}>
              <FaNodeJs size={50} className="mb-3" color="#68A063" />
              <Card.Title>Node.js</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Expertise in building scalable server-side applications using Node.js, with a focus on efficient APIs and asynchronous programming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} sm={12} xs={12} className="mb-4">
          <Card data-aos="zoom-out-up" style={{ border: "none" }} className="py-2 shadow card-hover-effect">
            <Card.Body style={{ minHeight: "0px" }}>
              <SiPostgresql size={50} className="mb-3" color="#336791" />
              <Card.Title>PostgreSQL</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Experienced in PostgreSQL, specializing in database optimization, indexing, and writing complex SQL queries for efficient data management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skill;
