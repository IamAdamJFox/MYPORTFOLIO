//imports
import React from "react";
import { Container, Row} from "react-bootstrap";
import Project from "./Project";
import Blog from "../images/Work.png"
import Poke from "../images/Poke.png"
import Quiz from "../images/Quiz.png"
import Weather from "../images/Weather.png"
import Quote from "../images/Quote.png"
import Trade from "../images/Trade.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Portfolio.css";

// Portfolio component
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
              title: "Work Day Scheduler",
              description: "Web application to help you plan your work day",
              imgSrc: Work,
              deployedLink:
                "https://iamadamjfox.github.io/5th-challenge-day-js/",
              githubLink:
                "https://github.com/IamAdamJFox/5th-challenge-day-js",
            },
            {
              title: "Pokemon Not",
              description: "Simple Game built in React",
              imgSrc: Poke,
              deployedLink:
                "https://pokemon-not-bda447895737.herokuapp.com/",
              githubLink:
                "https://github.com/IamAdamJFox/Pokemon-not",
            },
            {
              title: "Lets Learn Some Java",
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
