import React from "react";
import "./skill.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "HTML", value: 85 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 60 },
    { name: "Bootstrap", value: 70 },
    { name: "C Programming", value: 60 },
    { name: "Python", value: 60 },
    { name: "Django", value: 30 },
    { name: "Mysql", value: 60 }
  ];

  return (
    <Container id='Skills' className='py-5 text-center'>
      <h1 className='text-white p-5'>SKILLS</h1>
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
