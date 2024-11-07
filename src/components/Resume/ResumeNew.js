import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import  resumeImage from '../../Assets/cv.png'

// Path to the image version of your resume

const resumeLink = "https://docs.google.com/document/d/1-2n5QlUfo-2oegLijD8pqjPuvUMPSWY2cwk91ntec_I/edit?usp=sharing"; // Update with your PDF link for download

function ResumeCard() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Card style={{  }} className="text-center cvimg">
          <Card.Img variant="top" src={resumeImage} alt="Resume" />
          <Card.Body>
            <Button
              variant="primary"
              href={resumeLink}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ResumeCard;
