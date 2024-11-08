// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import developerImage from "../assets/developer.jpg"; // Profile Image path

function Contact() {
    return (
        <motion.div 
            className="container my-5" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <div className="text-center mb-4">
                <motion.img
                    src={developerImage} // Profile Picture Path
                    alt="Nicas Lolela"
                    className="rounded-circle shadow-lg mb-3"
                    style={{ width: '150px', height: '150px', border: '4px solid #6c757d' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <h2 className="display-4 mt-3">Get in Touch</h2>
                <p className="lead">Feel free to reach out through any of the following channels:</p>
            </div>

            <div className="card shadow-lg border-0">
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <motion.li
                            className="list-group-item d-flex align-items-center"
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                        >
                            <FontAwesomeIcon icon={faUser} className="me-2 text-primary" />
                            <strong>Profile:</strong> 
                            <span className="ms-2">Passionate React, Spring Boot & Laravel Developer with a focus on impactful solutions.</span>
                        </motion.li>

                        <motion.li
                            className="list-group-item d-flex align-items-center"
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                            <strong>Email:</strong> 
                            <span className="ms-2">nicas.lolela.tech@gmail.com</span>
                        </motion.li>

                        <motion.li
                            className="list-group-item d-flex align-items-center"
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                        >
                            <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
                            <strong>Phone:</strong> 
                            <span className="ms-2">+255-621-929-845</span>
                        </motion.li>

                        <motion.li
                            className="list-group-item d-flex align-items-center"
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="me-2 text-info" />
                            <strong>LinkedIn:</strong> 
                            <span className="ms-2">
                                <a href="https://www.linkedin.com/in/nicas-lolela-15b024262/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
                            </span>
                        </motion.li>

                        <motion.li
                            className="list-group-item d-flex align-items-center"
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f1f1" }}
                        >
                            <FontAwesomeIcon icon={faGithub} className="me-2 text-dark" />
                            <strong>GitHub:</strong> 
                            <span className="ms-2">
                                <a href="https://github.com/Niloz2" target="_blank" rel="noopener noreferrer">My GitHub</a>
                            </span>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;
