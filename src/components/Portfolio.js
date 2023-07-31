import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
import Blog from "../images/Blog.png"
import Note from "../images/Note.png"
import Quiz from "../images/Quiz.png"
import Weather from "../images/Weather.png"
import Quote from "../images/Quote.png"
import Trade from "../images/Trade.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <Container>
        <Row>
        {[
            {
              title: "Quote of Thrones",
              description: "Group Project made to give you daily Game of Thrones quotes",
              imgSrc: Quote,
              deployedLink:
                "https://thecolorhieu.github.io/Quotes-of-Thrones/",
              githubLink:
                "https://github.com/TheColorHieu/Quotes-of-Thrones",
            },
            {
              title: "Trade Hub",
              description: "In Development Commerce site where you can post/buy items from your local area",
              imgSrc: Trade,
              deployedLink:
                "https://tradehub.herokuapp.com/",
              githubLink:
                "https://github.com/jonathanjjolsen/TradeHub",
            },
            {
              title: "Adam J Fox Tech Blog",
              description: "CMS-Style Blog",
              imgSrc: Blog,
              deployedLink:
                "https://ajftechblog-7dca103e82cb.herokuapp.com/",
              githubLink:
                "https://github.com/IamAdamJFox/14-my-tech-blog",
            },
            {
              title: "Note Taker",
              description: "Built with Express.js",
              imgSrc: Note,
              deployedLink:
                "https://module11notetakeradamf-25ccb2d6a7e6.herokuapp.com/",
              githubLink:
                "https://github.com/IamAdamJFox/11-note-taker",
            },
            {
              title: "Let Learn Some Java",
              description: "Simple API built with html and css",
              imgSrc: Quiz,
              deployedLink:
                "https://iamadamjfox.github.io/4th-challenge/",
              githubLink:
                "https://github.com/IamAdamJFox/4th-challenge",
            },
            {
              title: "Weekly Weather Report",
              description: "Server side api for looking up local weather",
              imgSrc: Weather,
              deployedLink:
                "https://iamadamjfox.github.io/6th-weather-app/",
              githubLink:
                "https://github.com/IamAdamJFox/6th-weather-app",
            }
            ].map((project, index) => (
              // Div container for each project
              <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                 <Project
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                />
              </div>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
