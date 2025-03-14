import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
export default function HomePage() {
  const [text] = useTypewriter({
    words: ["Junior Full Stack Developer.", "Python Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="Main">
      <section id="home">
        <Container>
          <Row className="align-items-center">
            {/* Text Section */}
            <Col xs={12} md={6} className="d-flex flex-column justify-content-start">
              <div className="hom text-white">
                <h5>WELCOME TO MY WORLD</h5>
                <h1>
                  Hi, I&#39;m <span id="name" className="text-danger">VIGNESH C</span>
                </h1>
                <h2 className="t1 text-warning">
                  a <span>{text}</span>
                  <Cursor cursorStyle="|" cursorColor="#ff014f" />
                </h2>
                <p>
                  As a motivated front-end developer, I am eager to build engaging and responsive websites.
                  With a solid foundation in HTML, CSS, JavaScript, React, Python ,Mysql ,Django ,I focus on turning designs
                  into smooth, interactive user experiences.
                </p>
              </div>
            </Col>
            
            {/* Image Section */}
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <img
                className="img-fluid"
                src="vignesh.png" // Your image source
                alt="Vignesh"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}