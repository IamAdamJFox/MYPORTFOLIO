import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import "../Style/Resume.css";
import resumeimg from "../images/comingsoon.jpg";

const Resume = () => {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={resumeimg} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li>
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li>
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                Material UI
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, MySQL
              </li>
              <li>
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku, Netlify
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Full Stack</h4>
              <h5>Arizona State Univeristy, 2023</h5>
              <p>
             </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              N/A
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">MongoDB</span>
              </li>
              <li>
                <span className="teal-color">Express</span>
              </li>
              <li>
                <span className="teal-color">React</span>
              </li>
              <li>
                <span className="teal-color">Node.js</span>
              </li>
              <li>SQL</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;