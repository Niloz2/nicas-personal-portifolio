import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/computer-logo.jpg"; // Import logo

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" variant="dark" bg="dark" className="mb-5">
          <Container>
            <NavLink to="/" className="navbar-brand">
              <img
                src={logo}
                alt="Computer Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Nicas Lolela
            </NavLink>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faUser} /> About Me
                </NavLink>
                <NavLink className="nav-link" to="/projects">
                  <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                </NavLink>
                <NavLink className="nav-link" to="/skills">
                  <FontAwesomeIcon icon={faTools} /> Skills
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
