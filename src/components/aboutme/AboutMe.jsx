import React from "react";
import CustomCarousel from "../imagecarousel/CustomCarousel";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="d-flex flex-lg-row justify-content-center align-items-center pt-5 mt-5  m-3">
      <div className="d-flex flex-lg-row flex-column align-items-center">
          <img
            className="img-fluid"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/221852688_10157732688340728_2945249185064982377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tlbB7EFYv68AX_s_kj8&_nc_ht=scontent-lga3-1.xx&oh=00_AfCci2ZBkezqRW1I7wXYTGU7mTO89X9nmcoOFeOoAPrdZw&oe=64F4FA10"
            alt="First slide"
            style={{
                maxHeight:'600px',
                maxWidth:'300px',
                borderRadius:'80px',
                border:'1px solid black'
              
             
            }}
          />
        
        <div className="p-5 text-center" style={{ fontSize: "24px" }}>
          <h1 className="display-1 text-center pb-2">About Me</h1>
          <p className>
            I'm a Full Stack Developer with experience in React, JavaScript,
            Python, Java, Node.js, and Express. I've also worked with AWS,
            PostgreSQL, and MongoDB. In addition to my tech skills, I have
            experience with 3D printing. I enjoy delivering high-quality
            solutions that meet client needs, and I'm always eager to learn
            about the latest tech trends. When I'm not coding, you might find me
            tinkering with 3D printers, gaming, hanging out with my cat Puddin,
            or driving around and exploring new places!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
