
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
// import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./Assets/home-main.svg";
import Particle from "./components/Particle";
import Type from "./Type";
import  "./style.css";
import Projects from './components/Projects/Projects';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "bootstrap/dist/css/bootstrap.min.css";
// import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// //   Navigate
// // } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <NavBar />
      <div className='container'>
        <LandingPage />
        <About />
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
      <section>
     
    </section>
      <Footer />
    </div>
  );
}

export default App;
