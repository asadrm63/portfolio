import React from 'react'
import { Container } from 'react-bootstrap'
import calculator from './calculator.png';
import skigame from './SkiGame.png'
// import logo from './logo.png';

const Projects = () => {
  return (
    <div className='page' id='Projects'>
      <Container>
      Projects
      <Container>Calculator
      <a href="https://asadrm63.github.io/Calculator/">Calculator</a>
        <img src={calculator} width={350} height={550} alt="Calculator" />
      </Container>
      <Container>Ski Game
      <a href="https://asadrm63.github.io/game-project/">Ski Game</a>
      <img src={skigame} width={939} height={1167} alt="Calculator" />
      
      </Container>
      </Container>
    </div>
  )
}

export default Projects
