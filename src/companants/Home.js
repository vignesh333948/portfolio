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
          <Row className="align-items-center text-center text-lg-start">
            {/* Text Section */}
            <Col xs={12} md={6} className="mb-4">
            <div id="Br">
              <br className="br-home" /> <br className="br-home" /> <br className="br-home" />
              <br className="br-home" />
              <br  className="br-home"/>
              </div>
              <div>WELCOME TO MY WORLD</div>
              <h1 className="text-decoration-none">
                Hi, I&#39;m <span id="name">VIGNESH C</span>
              </h1>
              <h2 className="text-4xl font-bold text-white">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="true"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <div>
                An as a motivated front-end developer, I am eager to build
                engaging and responsive websites. With a solid foundation in
                HTML, CSS, JavaScript, and React, I focus on turning designs
                into smooth, interactive user experiences.
              </div>
              <br />
            </Col>

            {/* Image Section */}
            <Col xs={12} md={6} className="text-center">
              <img
                className="img-fluid"
                src="vignesh.png" // Your image source
                alt="Vignesh"
                width="100%"
                style={{ maxWidth: "400px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
