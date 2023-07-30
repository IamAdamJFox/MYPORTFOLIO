import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Style/Footer.css";

const SocialIcon = ({ name, url, icon, color }) => (
  <div className="social-icon d-flex flex-column align-items-center mx-md-2 transparent-bg">
    <a href={url} className={`icon ${name}`} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} bounce className="footer-icon-size" style={{ color }} />
    </a>
    <a href={url} target="_blank" rel="noreferrer">
      <span className="d-inline-block mx-1 name">{name}</span>
    </a>
  </div>
);

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/IamAdamJFox",
      icon: faGithub,
      color: "#5DE512",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adam-fox-656317253/",
      icon: faLinkedin,
      color: "#2EACE8",
    },
  ];

  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map((social) => (
            <SocialIcon key={social.name} {...social} />
          ))}
        </section>
        <section className="form-footer">
          <h5 className="designer-text">Designed with ⏳ by Adam J Fox</h5>
          <p>
            <h6 className="copyright-text">&copy; {new Date().getFullYear()} All rights reserved.</h6>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;