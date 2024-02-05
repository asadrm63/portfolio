import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from './calculator.png';
import skigame from './SkiGame.png'
// import logo from './logo.png';

const Projects = () => {
  return (
    <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={skigame}
            isBlog={false}
            title="Ski Game"
            description='A  ski game  runner inspired by Ski Free with  2D gameplay..
            Created tracking of different objects using vanilla Javascript and advanced arithmetic creating interactive play
         Created swarm of enemies and in game polarity/gravity  using  vanilla Javascript and advanced arithmetic achieving  difficult and slightly unpredictable gameplay"'
            ghLink="https://github.com/asadrm63/game-project/"
            demoLink="https://asadrm63.github.io/game-project/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={calculator}
            isBlog={false}
            title="Calculator"
            description="My first project ever. A basic calculator designed to replicate the Iphone calculator app. Built wit JavaScript,HTML, and CSS."
            ghLink="https://github.com/asadrm63/Calculator"
            demoLink="https://asadrm63.github.io/Calculator/"
          />
        </Col>

  
      </Row>
    </Container>
  </Container>


    // <div className='page' id='Projects'>
    //   <Container>
    //   Projects
    //   <Container>Calculator
    //   <a href="https://asadrm63.github.io/Calculator/">Calculator</a>
    //     <img src={calculator} width={350} height={550} alt="Calculator" />
    //   </Container>
    //   <Container>Ski Game
    //   <a href="https://asadrm63.github.io/game-project/">Ski Game</a>
    //   <img src={skigame} width={939} height={1167} alt="Calculator" />
      
    //   </Container>
    //   </Container>
    // </div>
  )
}

export default Projects
