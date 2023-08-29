import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../contactform/Contact";
import React from "react";

const Cta = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-5 ">
      <div className="headings p-5 ">
        <h1 className="display-1">Hello There,</h1>
        <h1 className="display-1">I'm Jordan Kelloway!</h1>
        <h2 className="display-2">
          I am a <span className="text-primary">Full Stack Developer</span>
        </h2>
        <div className="d-flex gap-5 pb-4 ">
          <a href="https://ca.linkedin.com/in/jordan-kelloway-940503243">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>

          <a href="https://ca.linkedin.com/in/jordan-kelloway-940503243">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>

          <a href="https://ca.linkedin.com/in/jordan-kelloway-940503243">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>

          <a href="https://ca.linkedin.com/in/jordan-kelloway-940503243">
            <FontAwesomeIcon icon={faDiscord} size="3x"  />
          </a>
        </div>
        <Link className="bg-primary mt-5 text-white p-1 m-3 " to={{pathname: "/contact"}}> Contact Me</Link>

       
       
      </div>
      

      <div className="p-5">
        <img
          src="https://media.licdn.com/dms/image/C5603AQG0keqF_l5g6Q/profile-displayphoto-shrink_800_800/0/1656249794101?e=2147483647&v=beta&t=Xi-ZHaBhVnt6EiuYigFNJedwwA8d-r1ZMd6gupAG3Gk"
          alt="My Profile Pic"
          className="img-fluid rounded-circle "
       
        />
      </div>
    </div>
  );
};

export default Cta;
