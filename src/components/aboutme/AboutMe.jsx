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
            maxHeight: "600px",
            maxWidth: "300px",
            borderRadius: "80px",
            border: "1px solid black",
          }}
        />

        <div className="p-5 text-center" style={{ fontSize: "24px" }}>
          <h1 className="display-1 text-center pb-2">About Me</h1>
          <p className>
            I'm a Full Stack Developer with experience in React, JavaScript,
            Python, Java, Node.js, and Express. I've also worked extensively
            with AWS, PostgreSQL,MYSQL and MongoDB.
          </p>

          <p className="pt-3">
            In addition to my tech skills, I have experience with 3D printing. When I'm not
            coding, you might find me gaming,
            hanging out with my cat Puddin, playing the guitar, building a new computer,  or driving around and exploring new
            places!
          </p>

          <p className="pt-3">
           One big thing about me that I feel everyone should know is that. I am a chicken strip enthusiest. If a resturant has them on the menu that is most likley what I am getting... You can judge me appropriately 
          </p>

          <p className="pt-3">
            I enjoy delivering high-quality solutions that meet my clients need,
            and I'm always eager to learn about the latest technology trends and how I can apply them to my work. <br />{" "}
            <b>If you wanna chat you can use the contact me form found above! </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
