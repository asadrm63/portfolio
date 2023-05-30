import React from 'react'
// import { Container } from 'react-bootstrap'
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className='"about-section"' id='about'>
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
      <h1>About</h1>
         <p className='purple'>
         Hello there! <br></br>

I'm thrilled to share a little bit about myself. My name is Asad, and I am an aspiring web developer based in the vibrant city of New York. Together with my loving wife and adorable son, I find inspiration and motivation to pursue my passion for web development.
<br></br>
<br></br>
Ever since I laid my hands on my first computer, I've been captivated by the endless possibilities of the digital world. As I delved deeper into the intricacies of web development, I discovered a profound interest in creating immersive and user-friendly online experiences.
<br></br>
<br></br>
Driven by my determination to master the craft, I've embarked on a journey to learn various programming languages, frameworks, and design principles. From HTML, CSS, and JavaScript to libraries like React and backend technologies like Node.js, I'm constantly expanding my skill set to stay ahead in this fast-paced industry.
<br></br>
<br></br>
Living in the bustling metropolis of New York City fuels my creativity and exposes me to a diverse range of cultures and perspectives. I find inspiration in the city's energy and use it to infuse uniqueness into my projects.
<br></br>
<br></br>
Beyond my technical pursuits, my family plays an integral role in my life. The support and love from my wife and son keep me grounded and remind me of the importance of work-life balance. Together, we enjoy exploring the city's parks, trying out new cuisines, and creating cherished memories.
<br></br>
<br></br>
I believe that continuous learning and growth are key to success in any field, and I am determined to unlock my full potential as a web developer. I aspire to contribute my skills and knowledge to create innovative solutions that make a positive impact in the digital realm.
<br></br>
<br></br>
Thank you for taking the time to get to know me a little better. I am excited about the future possibilities and the opportunity to connect with fellow web enthusiasts. Let's embark on this exciting journey together!
<br></br><br></br>
Best regards,<br></br>
Asad Rahman</p>
</Container>
    </Container>
  )
}

export default About
