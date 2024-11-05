import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Combined imports
import Particle from "../Particle"; // Keeping Particle as is since it's from another component
import laptopImg from "../../Assets/about.png"; // Image used in the about section

// Icons for Techstack and Toolstack
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiGithub,
  DiHtml5,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiFirebase,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* AboutCard content */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1>Hello EveryOne</h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I am <span className="purple">Kundai Muzhona</span> from{" "}
                    <span className="purple">Harare, Zimbabwe.</span>
                    <br />
                    I am a Frontend Developer with hands-on experience in
                    crafting user-friendly web applications using JavaScript,
                    HTML, CSS, SCSS, Bootstrap, React, and Tailwind. I have
                    strong skills in clear communication, collaborative
                    teamwork, and innovative problem-solving. I am committed to
                    leveraging these strengths to advance company objectives
                    and deliver high-quality, scalable, and efficient solutions
                    that enhance user experience.
                  </p>
                  <p style={{ color: "rgb(155 126 172)" }}>
                    "Strive to build things that make a difference!"{" "}
                  </p>
                  <footer className="blockquote-footer">Kundai</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Techstack section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio />
          </Col>
        </Row>

        {/* Toolstack section */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
