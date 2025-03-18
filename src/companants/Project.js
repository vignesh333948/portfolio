import React from 'react';
import './Project.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Project() {
    return (
        <Container id='projects' className='py-5'>
            <h1 className='text-center text-white my-5'>Projects</h1>
            <Row className="g-4">

                {[
                    { title: "Calculator",Livelink:"https://my-owncalculator.netlify.app/",github: "https://github.com/vignesh333948/calculator",img: "calc.jpeg", text: "A simple calculator built with HTML, styled using CSS, and powered by JS for performing basic arithmetic operations efficiently."},
                    { title: "ToDo-List",Livelink:"https://todo-ownwebsite.netlify.app/",github: "https://github.com/vignesh333948/Todo", img: "todo.jpeg", text: "A sleek To-Do app built with HTML, CSS, and JS, offering an intuitive interface for managing tasks efficiently and stylishly." },
                    { title: "Real Estate",Livelink:"https://realestate-own.netlify.app/",github: "https://github.com/vignesh333948/RealEstate",img: "h4.jpg", text: "A home is more than just a place; it’s a feeling of comfort, security, and a future well-invested.You can include this in the home page, property listings, or about section to make your project more engaging. Let me know if you need more suggestions!" },
                    { title: "Weather-App",Livelink:"https://vignesh-weather.netlify.app/",github: "https://github.com/vignesh333948/weather",img: "weather.jpeg", text: "A weather app built with React, featuring real-time updates and beautiful styling." },
                    { title: "Sign In-Form",Livelink:"https://registerlogin-form.netlify.app/",github: "https://github.com/vignesh333948/Sign-in-form",img: "form.jpeg", text: "A responsive sign-in form with validation." },
                    { title: "Portfolio",Livelink:"https://vignesh3portfolio.netlify.app/",github: "https://github.com/vignesh333948/portfolio",img: "port.jpg", text: "A professional portfolio showcasing projects and skills." }
                ].map((project, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card className='h-100 shadow'>
                        <Card.Img variant="top" src={project.img} className='card-img-top' />
                            <Card.Body>
                            <Card.Title className='text-danger d-flex justify-content-between align-items-center'>
                                    {project.title}
                                    <div className='d-flex align-items-center'>
                                        {project.icon}
                                        <a href={project.Livelink} target="_blank" rel="noopener noreferrer" className="text-dark ms-2">
                                            <TbWorld size={25} />
                                        </a>
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
