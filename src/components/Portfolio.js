import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
// import projectsData from "../data/projectsData";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <Container>
        <Row>
          {/* {projectsData.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="my-2">
              <Project project={project} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
