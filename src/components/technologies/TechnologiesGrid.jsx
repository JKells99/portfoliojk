import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faJava,
  faCss3Alt,
  faPython,
  faJs,
  faAws,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const TechnologiesGrid = () => {
  const rowStyle = {
    marginTop: "48px",
  };

  const colStyle = {
    textAlign: "center",
    fontSize: "5rem",
    background: "rgb(240,240,240)",
    border: "1px solid white",
    borderRadius: "80px",
  };
  return (
    <Container fluid className="p-5">
      <Row>
        {/* Left column for icons */}
        <Col xs={12} sm={12} md={4} lg={12} xl={12}>
          <h1 className="display-1 text-center pb-3">Technical Skills</h1>
          <Row className="text-primary d-flex justify-content-center">
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faReact} bounce />
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faHtml5} />
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faJava} />
            </Col>
          </Row>
          <Row className="text-primary d-flex justify-content-center">
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faPython} />
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faJs} />
            </Col>
          </Row>
          <Row className="text-primary d-flex justify-content-center">
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faAws}/>
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faGitAlt} />
            </Col>
            <Col style={colStyle}>
              <FontAwesomeIcon icon={faFigma} bounce />
            </Col>
          </Row>
        </Col>

        
        <Col xs={12} sm={12} md={4} lg={12} xl={12} className="  d-flex flex-column text-center align-items-center m-3 justify-content-center" style={{marginTop:'64px', lineHeight:'24px', padding:'5px'}}>
          <p  style={{ fontSize: "24px" }}>
            My techincial skills include React, HTML, CSS,Tailwind, Javascript for
            Front End.
            <p className="pb-2">
              {" "}
              My skills in Back End include Java (Springboot), Javascript(Node
              along with Express), and Python(Django).
            </p>{" "}
            <p className="p-3" >
              I have been exposed to both SQL and NoSQL Databases. Some include
              Mongo,Postgres, MySql. I have also completed 3 levels of AWS
              courses.They include AWS Cloud Foundations, AWS Cloud Developing,
              and AWS Soulitions Architect
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TechnologiesGrid;
