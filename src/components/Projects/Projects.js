import React from "react";
import { Container, Card, Button } from "react-bootstrap"; 
import Particle from "../Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css"; 
import tig from "../../Assets/Projects/tig.png";
import nyama from "../../Assets/Projects/nyamatusi.png";
import port from "../../Assets/Projects/stylish.png";
import daas from "../../Assets/Projects/daas.png";
import free from "../../Assets/Projects/freefall.png";
import mobi from "../../Assets/Projects/mobi kitchen.png";
import van from "../../Assets/vanlife.png"
import nowalls from "../../Assets/nowalls.png"
import resell from "../../Assets/resell.png"
import cater from "../../Assets/cater.png"
import bakers from "../../Assets/Projects/bakers.png"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, split into categories: Web Development and UX/UI Design.
        </p>

        {/* Web Development Projects Carousel */}
        <h2 className="project-category-heading">Web Development</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        <div>
            <ProjectCard
              imgPath={van}
              isBlog={false}
              title="VAN-LIFE"
              ghLink="https://github.com/kundi04"
              demoLink="https://van-life-car-rental.web.app"
            />
          </div>


          <div>
            <ProjectCard
              imgPath={bakers}
              isBlog={false}
              title="BAKER'S INN"
              ghLink="https://github.com/kundi04"
              demoLink="https://bakers-inn-co.web.app"
            />
          </div>

          <div>
            <ProjectCard
              imgPath={resell}
              isBlog={false}
              title="RESELL-ME"
              ghLink="https://github.com/kundi04"
              demoLink="https://resell-me.web.app"
            />
          </div>

          <div>
            <ProjectCard
              imgPath={cater}
              isBlog={false}
              title="CATERSERV"
              ghLink="https://github.com/kundi04"
              demoLink="https://caterservco.netlify.app"
            />
          </div>



          <div>
            <ProjectCard
              imgPath={tig}
              isBlog={false}
              title="TIGZOZO"
              ghLink="https://github.com/kundi04"
              demoLink="https://tigzozophotography.netlify.app"
            />
          </div>
          <div>
            <ProjectCard
              imgPath={nyama}
              isBlog={false}
              title="NYAMATUSI"
              ghLink="https://github.com/kundi04"
              demoLink=""
            />
          </div>
          <div>
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="STYLISH-PORTFOLIO"
              ghLink="https://github.com/kundi04"
              demoLink="https://muzstylishportfolio.netlify.app"
            />
          </div>
        </Carousel>

        {/* UX/UI Design Projects Carousel */}
        <h2 className="project-category-heading">UX/UI DESIGN</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          <div>
            <ProjectCard
              imgPath={daas}
              isBlog={false}
              title="DAAS"
              ghLink="https://github.com/kundi04"
              demoLink="https://www.figma.com/design/9yp9lUUh5Zimps8crsWINN/DAAS-WEBSITE?node-id=0-1&t=fNR4WxUKRVXT5B3r-1"
            />
          </div>
          <div>
            <ProjectCard
              imgPath={free}
              isBlog={false}
              title="FREEFALL"
              ghLink="https://www.figma.com/design/0D5OBiEC1R9gpK2fOqiIHK/freefall?node-id=0-1&t=fxBFlnxZNGOpEJV0-1"
            />
          </div>
          <div>
            <ProjectCard
              imgPath={mobi}
              isBlog={false}
              title="MOBI-KITCHEN"
              ghLink="https://www.figma.com/design/c79npNBOxWaQGXaNeN4nRk/MOBI-KITCHEN?node-id=0-1&t=SbW9OB3tGqINO1aS-1"
            />
          </div>
        </Carousel>

      </Container>
    </Container>
  );
}

export default Projects;
 