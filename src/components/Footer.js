// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h5>About Me</h5>
                        <p className='text-primary'>
                            I’m a passionate developer focused on creating value-driven digital solutions.
                            Connect with me on my social channels!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h5>Follow Me</h5>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Niloz2" className="text-light me-3" target='blank'>
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/nicas-lolela-15b024262/" className="text-light me-3" target='blank'>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://x.com/NLolela" className="text-light" target='blank'>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-3" />
                <p className="text-light small mb-0">&copy; {new Date().getFullYear()} Nicas Lolela. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
