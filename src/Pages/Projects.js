import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap';

function Projects() {
    useEffect(() => {
        const cursorDot = document.getElementById("cursor-dot");

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            cursorDot.style.left = `${clientX}px`;
            cursorDot.style.top = `${clientY}px`;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const projectList = [
        {
            title: 'Project A: Restaurant-Ecommerce-System',
            description: 'SelahKitchenWebApp is a web application for managing kitchen operations and recipes. This project is developed using the Laravel framework.',
            githubLink: 'https://github.com/Niloz2/Restaurant-Ecommerce-System',
            liveLink: '#',
        },
        {
            title: 'Project B: AISearch',
            description: 'A Search Engine that helps users to enter the search query and redirect directly to the Suggested website that offers that services.',
            githubLink: 'https://github.com/Niloz2/AISearch',
            liveLink: '#',
        },
        {
            title: 'Project C: AnnounceVent',
            description: 'AnnounceVent is a platform designed to streamline and enhance the announcement process for businesses, organizations, and individuals. It allows users to create, manage, and distribute announcements to their target audiences effectively and efficiently.',
            githubLink: 'https://github.com/Niloz2/announcevent',
            liveLink: 'https://announcevent.com',
        },
    ];

    return (
        <>
              {/* Cursor Dot */}
              <div id="cursor-dot" className="cursor-dot"></div>
 
        <motion.div
            className="container my-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                {projectList.map((project, index) => (
                    <motion.div
                        className="col-md-4 mb-4"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="project-card shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button
                                        className="cta-btn"
                                        variant="primary"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        className="cta-btn"
                                        variant="success"
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Preview
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
        </>
    );
}

export default Projects;
