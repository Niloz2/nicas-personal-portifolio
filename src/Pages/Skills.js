// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const skills = [
        { name: 'JavaScript, React', level: '90%' },
        { name: 'HTML, CSS, Bootstrap', level: '85%' },
        { name: 'Backend Development: Spring Boot & Laravel', level: '80%' },
        { name: 'Database: MongoDB, MySQL', level: '75%' },
        { name: 'Version Control: Git & GitHub', level: '90%' },
        { name: 'Deployment & Cloud: AWS S3, EC2', level: '80%' },
        { name: 'CI/CD: GitHub Actions, Jenkins', level: '70%' },
        { name: 'Testing: Jest, Cypress', level: '65%' },
        // Add more skills here as needed
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="col-md-6 col-lg-4 mb-4"
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{skill.name}</h5>
                                <div className="progress mb-2">
                                    <motion.div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: skill.level }}
                                        initial={{ width: 0 }}
                                        animate={{ width: skill.level }}
                                        transition={{ duration: 1 }}
                                        aria-valuenow={parseInt(skill.level)}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        {skill.level}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
