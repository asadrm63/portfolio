
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./Assets/home-main.svg";
import Particle from "./components/Particle";
import Type from "./Type";
import  "./style.css";
import Projects from './components/Projects/Projects';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     <NavBar />
     {/* <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Asadur Rahman</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container> */}
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
