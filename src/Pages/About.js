import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import developerImage from "../assets/developer.jpg"; // Profile Image path

function About() {
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

    return (
        <>
            {/* Cursor Dot */}
            <div id="cursor-dot" className="cursor-dot"></div>

            <motion.div
                className="container my-5 p-4 rounded shadow-sm bg-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <motion.img
                            src={developerImage} // replace with your actual image path
                            alt="Nicas Lolela"
                            className="img-fluid rounded-circle shadow-sm mb-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                    <div className="col-md-8">
                        <motion.h2
                            className="text-primary mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Nicas Lolela
                        </motion.h2>
                        <motion.p
                            className="lead"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Hello! I'm Nicas, a dedicated React.js and Spring Boot developer
                            focused on building meaningful, impactful digital experiences.
                            My mission is to create software that not only serves a purpose
                            but also adds value to those who use it.
                        </motion.p>
                        <motion.p
                            className="text-muted"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            With expertise in front-end and back-end technologies, I strive
                            to design seamless, efficient, and visually appealing solutions.
                            Whether working on a web application or a complex system, my
                            goal is to deliver high-quality work that meets client needs and
                            expectations.
                        </motion.p>
                        <div className="d-flex mt-4">
                            <a
                                href="https://github.com/Niloz2"
                                className="text-dark me-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nicas-lolela-15b024262/"
                                className="text-dark me-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a
                                href="https://x.com/NLolela"
                                className="text-dark"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                        {/* Download Resume Button */}
                        <div className="mt-4">
                            <a
                                href="/Nicas Lolela Resume.pdf" // Ensure this path matches where your resume is stored
                                className="btn btn-primary"
                                download // Enables download functionality
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default About;
