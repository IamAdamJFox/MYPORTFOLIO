import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/froog.png";
import "../Style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Adam J Fox
                </Card.Title>
                <Card.Text>
                Adam J Fox, a 28 year old from Scottsdale, Arizona Graduated from Arizona State University 
                Full Stack Program in 2023. Having developed himself through a multitude of fields, including
                the study of law, the study of the arts, and as a engineer in the Arizona National Guard. Having found a 
                field that challenges him intellectually and excites his creative passion, Adam will continue to develop his 
                progamming skills. 
                </Card.Text>
                <Card.Text>
               Adam has developed himself on a few simple truths, do what is needed, you dont have forever, and find your happiness.
               The effort to push himself to develop as a individual has made Adam into a asset for any team or origanization. Adam
               has discovered a want, hes wants more from life, more from himself, and wants to do the work to achieve all this more.
               He is excited for what the future holds, for he explore the horizon of oppurtunities that continue to appear before him.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;