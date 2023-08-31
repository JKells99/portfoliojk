import React from "react";
import Container from '@mui/material/Container';

const AboutMe = () => {
  return (
    <Container maxWidth="xl" className="p-5">

   
      <div className="d-flex flex-xl-row flex-column align-items-center">
        <img
          className="img-fluid"
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/221852688_10157732688340728_2945249185064982377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tlbB7EFYv68AX_s_kj8&_nc_ht=scontent-lga3-1.xx&oh=00_AfCci2ZBkezqRW1I7wXYTGU7mTO89X9nmcoOFeOoAPrdZw&oe=64F4FA10"
          alt="First slide"
          style={{
            maxHeight: "800px",
            maxWidth: "400px",

            borderRadius: "80px",
            border: "1px solid black",
            marginBottom: "64px",
          }}
        />

        <div
          className="text-center flex-sm-column"
          style={{ fontSize: "22px" }}
        >
          <h1 className="display-1 text-center pb-2">About Me</h1>

          <p className="px-5 flex-xl-column">
            I'm a Full Stack Developer with experience in React, NodeJs,
            Springboot, Python, Javascript, Typescript, Java, HTML, CSS, and a
            tiny amount of R. I've also worked extensively with AWS and
            Databases such as PostgreSQL, MYSQL, and MongoDB.
          </p>

          <p className="pt-3 flex-sm-column">
            In addition to my tech skills, I have experience with 3D printing{" "}
            <br />
            When I'm not coding, you might find me gaming, hanging out with my
            cat Puddin, playing the guitar, building a new computer, or driving
            around
            <br />
            and exploring new places!
          </p>

          <p className="pt-3 flex-xl-column">
            One big thing about me that I feel everyone should know is that. I
            am a chicken strip enthusiast. If a restaurant has them on the menu,
            that is most likely what I am getting... You can judge me
            appropriately
          </p>

          <p className="pt-3 flex-xl-column">
            I enjoy delivering high-quality solutions that meet my clients'
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
