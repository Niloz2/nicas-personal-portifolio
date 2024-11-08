import React from "react";
import { motion } from "framer-motion";
import developerImage from "../assets/developer.jpg"; // Image path

function Home() {
  return (
    <motion.div
      className="container text-center my-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="row align-items-center">
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
          <h1 className="text-primary fw-bold text-center">
            Nicas Lolela{" "}
            <span className="text-muted">
              (React Js, Spring Boot Developer & Laravel)
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
            innovative digital solutions. Here you’ll find my projects, skills,
            and how to reach me.
          </p>
          <p className="text-muted">
            Let’s build the future of technology together.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
