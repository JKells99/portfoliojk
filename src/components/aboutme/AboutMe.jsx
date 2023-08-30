import React from "react";
import CustomCarousel from "../imagecarousel/CustomCarousel";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="d-flex flex-sm-row justify-content-center align-items-center pt-5 mt-5">
      <div className="d-flex flex-md-row flex-column align-items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            className="img-fluid p-5"
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/221852688_10157732688340728_2945249185064982377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tlbB7EFYv68AX_s_kj8&_nc_ht=scontent-lga3-1.xx&oh=00_AfCci2ZBkezqRW1I7wXYTGU7mTO89X9nmcoOFeOoAPrdZw&oe=64F4FA10"
            alt="First slide"
            style={{
                maxHeight:'800px',
                maxWidth:'600px',
                borderRadius:'80px',
                border:'1px solid black'
              
             
            }}
          />
        </motion.div>
        <div className="p-5" style={{ fontSize: "24px" }}>
          <h1 className="display-1 text-center">About Me</h1>
          <p>
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
