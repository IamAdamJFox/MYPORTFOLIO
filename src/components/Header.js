//imports
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Style/Header.css";
import img from "../images/froog.png";

// Header component
function Header() {
  return (
    <>
      <Container fluid className="bg-primary">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
              <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Image src={img} rounded fluid className="abt-image" />
              <Link
                to="/MYPORTFOLIO-portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Adam J Fox
              </Link>
              <Image src={img} rounded fluid className="abt-image" />
              </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;