import React from "react";
import Container from '@mui/material/Container';
import jordank from '../../photos/jordank.jpg'; 

const AboutMe = () => {
  return (
    <Container maxWidth="xl" className="">

    <div className="d-flex flex-column align-items-center justify-content-center p-5">
      <img
        className="img-fluid"
        src={jordank}
        style={{
          width: "100%",
          maxWidth: "400px", 
          borderRadius: "100px",
          marginBottom: "24px",
          
        }}
      />
  
      <div className="text-center" style={{ fontSize: "24px", lineHeight: "24px" }}>
        <h1 className="display-1 pb-2">About Me</h1>
  
        <p className="pb-5">
          <b>I'm a Full Stack Developer</b>  with experience in React, NodeJs,
          Springboot, Python, Javascript, Typescript, Java, HTML, CSS, and a
          tiny amount of R. I've also worked extensively with AWS and
          Databases such as PostgreSQL, MYSQL, and MongoDB.
        </p>
  
        <p className="pb-5">
          In addition to my tech skills, I have experience with 3D printing{" "}
          <br />
          When I'm not coding, you might find me gaming, hanging out with my
          cat Puddin, playing the guitar, building a new computer, or driving
          around
          <br />
          and exploring new places!
        </p>
  
        <p className="pb-5">
          One big thing about me that I feel everyone should know is that. I
          am a chicken strip enthusiast. If a restaurant has them on the menu,
          that is most likely what I am getting... You can judge me
          appropriately
        </p>
  
        <p className="pb-5">
          I enjoy delivering <b>high quality </b>solutions that meet my clients'
          needs, and I'm always eager to learn about the latest technology
          trends and how I can apply them to my work. <br />
          <b>
            If you wanna chat, you can use the contact me form found above!{" "}
          </b>
        </p>
      </div>
    </div>
  </Container>
  );
};

export default AboutMe;
