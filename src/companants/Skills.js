import React from "react";
import "./skill.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "HTML", value: 85 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 40 },
    { name: "C Programming", value: 55 },
    { name: "Python", value: 75 },
    { name: "Django", value: 40 }
  ];

  return (
    <Container id='Skills' className='py-5 text-center'>
      <h1 className='text-white'>SKILLS</h1>
      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col key={index} xs={12} md={6}>
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.value} label={`${skill.value}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
