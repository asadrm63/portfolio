import React, { useState } from 'react';
import {Link} from "react-scroll"
import logo from './logo.png';
// import {AiOutlineMenu, AiOutlineMenuUnfold} from "react-icons/ai";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Logo from "../../logo.png";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

export default function NavBar(){
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex">
              <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link as={Link} to="landingPage" onClick={() => updateExpanded(false)}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                  </Nav.Link>
                </Nav.Item>
    
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="about"
                    onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                  </Nav.Link>
                </Nav.Item>
    

    
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="projects"
                    onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>
    
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="resume"
                    onClick={() => updateExpanded(false)}
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
                </Nav.Item>
    
    
    
                <Nav.Item className="fork-btn">
                  <Button
                    href="https://github.com/asadrm63/Portfolio"
                    target="_blank"
                    className="fork-btn-inner"
                  >
                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                    <AiFillStar style={{ fontSize: "1.1em" }} />
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  


//     const [hover, setHover] = useState(false);
// const [click, setClick] = useState(false);

//   return (
//     <>
//     <nav className='navBar'>
//   <Link className='navLogo navBarLi' to='landingPage' smooth={true}>
//         <img className='logo' src={logo}></img>
//       </Link>
//       <div className='navBarText'>
//         <ul>
//           <Link className="navBarLi" to='landingPage' smooth={true}>
//             Landing Page
//           </Link>
//           <Link className="navBarLi" to='about' smooth={true}>
//             About
//           </Link>
//           <Link className="navBarLi" to='portfolio' smooth={true}>
//             Portfolio
//           </Link>
//           <Link className="navBarLi" to='priorExperience' smooth={true}>
//             Prior Experience
//           </Link>
//           <Link className="navBarLi" to='contact' smooth={true}>
//             Contact
//           </Link>
//           <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
//   Resume
// </a>
//         </ul>

//       </div>
//   <div 
//       className='navHamburger' 
//       onMouseEnter={() => setHover(true)} 
//       onMouseLeave={() => setHover(false)} 
//       onClick={() => setClick(!click)}>
//       {/* {!hover && !click ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />} */}
//     </div>
//   </nav>
//   {click ? <ul className='hamburgerText'>
//     <Link className='navBarLi' onClick={() => setClick(!click)} to='landingPage' smooth={true}>
//       Landing Page
//     </Link>
//     <Link className='navBarLi' onClick={() => setClick(!click)} to='about' smooth={true}>
//       About
//     </Link>
//     <Link className='navBarLi' onClick={() => setClick(!click)} to='portfolio' smooth={true}>
//     Portfolio
// </Link>
//     <Link className='navBarLi' onClick={() => setClick(!click)} to='priorExperience' smooth={true}> 
//       Prior Experience
//     </Link>
//     <Link className='navBarLi' onClick={() => setClick(!click)} to='contact' smooth={true}>
//       Contact
//     </Link>
//     <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
//       Resume
//     </a>
//   </ul> : null}
//   </>
//   )
}