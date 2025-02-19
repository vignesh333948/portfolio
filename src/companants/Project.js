import React from 'react';
import './Project.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
function Project() {
    return (
        <Container id='projects' className='py-5'>
            <h1 className='text-center text-white my-5'>Projects</h1>
            <Row className="g-4">
                {[
                    { title: "Calculator",github: "https://github.com/yourusername/calculator",img: "calc.jpeg", text: "A simple calculator built with HTML, styled using CSS, and powered by JS for performing basic arithmetic operations efficiently."},
                    { title: "ToDo-List",github: "https://github.com/yourusername/calculator", img: "todo.jpeg", text: "A sleek To-Do app built with HTML, CSS, and JS, offering an intuitive interface for managing tasks efficiently and stylishly." },
                    { title: "Real Estate",github: "https://github.com/yourusername/calculator",img: "h4.jpg", text: "A home is more than just a place; it’s a feeling of comfort, security, and a future well-invested.You can include this in the home page, property listings, or about section to make your project more engaging. Let me know if you need more suggestions!" },
                    { title: "Weather-App",github: "https://github.com/yourusername/calculator",img: "weather.jpeg", text: "A weather app built with React, featuring real-time updates and beautiful styling." },
                    { title: "Sign In-Form",github: "https://github.com/yourusername/calculator",img: "form.jpeg", text: "A responsive sign-in form with validation." },
                    { title: "Portfolio",github: "https://github.com/yourusername/calculator",img: "port.jpg", text: "A professional portfolio showcasing projects and skills." }
                ].map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card className='h-100 shadow'>
                        <Card.Img variant="top" src={project.img} className='card-img-top' />
                            <Card.Body>
                            <Card.Title className='text-danger d-flex justify-content-between align-items-center'>
                                    {project.title}
                                    <div className='d-flex align-items-center'>
                                        {project.icon}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-dark ms-2">
                                            <FaGithub size={25} />
                                        </a>
                                    </div>
                                </Card.Title>
                                <Card.Text>{project.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Project;
