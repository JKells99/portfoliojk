import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

import Contact from "../contactform/Contact";
import { useState } from "react";




const Cta = () => {
    const [showContactForm, setShowContactForm] = useState(false);

   

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-5 " >
      <div className="headings p-5 ">
        <h1 className="display-1">Hello There,</h1>
        <h1 className="display-1">I'm Jordan Kelloway!</h1>
        <h2 className="display-2">
          I am a <span className="text-primary">Full Stack Developer</span>
        </h2>
        <div className="d-flex gap-5 pb-3 ">
          <a href="https://ca.linkedin.com/in/jordan-kelloway-940503243">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>

          <a href="https://twitter.com/Jkelloway2">
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
          </a>

          <a href="https://github.com/JKells99">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
        <Contact/>

        
       
        
      </div>

      <div className="p-3">
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
