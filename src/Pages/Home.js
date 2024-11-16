import React, { useEffect } from "react";
import { motion } from "framer-motion";
import developerImage from "../assets/developer.jpg"; // Image path

function Home() {
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

      {/* Main Content */}
      <motion.div
        className="container text-center my-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={developerImage}
              alt="Developer"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px" }}
            />
            <h1 className="text-primary fw-bold text-center mt-3">
              Nicas Lolela{" "}
              <span className="text-muted">
                (Spring Boot, React Js & Laravel Developer)
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="col-md-6 mt-4 mt-md-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary">Welcome to My Portfolio</h1>
            <p className="lead">
              I’m a passionate developer dedicated to creating impactful and
              innovative digital solutions. Here you’ll find my projects,
              skills, and how to reach me.
            </p>
            <p className="text-muted">
              Let’s build the future of technology together.
            </p>
          </motion.div>
        </div>
        <hr></hr>

        {/* Experience Section */}
        <div className="mb-5">
          <h2 className="text-primary">Experience</h2>
          <div className="row">
            <div className="col-md-4">
              <h5 className="fw-bold">
                Full Stack Developer - AnnounceVent Startup
              </h5>
              <p className="text-muted">2024 - present</p>
              <p>
                Focused on building responsive user interfaces and backend
                architecture with Laravel, React and Bootstrap. Played a key
                role in the successful launch of multiple client projects.
              </p>
              <a href="https://www.announcevent.com" target="blank">
                Visit AnnounceVent
              </a>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">
                Software Developer - Emic Soft Software Company
              </h5>
              <p className="text-muted">2024</p>
              <p>
                Developing and maintaining full stack web applications using
                Laravel. Collaborated with cross-functional teams to enhance
                user experience and functionality.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">
                Industrial Practical Training (University of Dodoma)
              </h5>
              <p className="text-muted">2023</p>
              <p>
                Participated in training that based on software development
                using Java in building web applications and Android
                applications, Gained experience on Frontend Technologies
                HTML,CSS,JAVASCRIPT. Gained foundational experience in
                full-stack development.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
