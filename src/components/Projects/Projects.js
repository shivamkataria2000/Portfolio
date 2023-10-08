import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import learnSportsDemo from "../../Assets/Projects/demo.gif";
import suicide from "../../Assets/Projects/suicide.png";
import groupChat from "../../Assets/Projects/screenshot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={learnSportsDemo}
              isBlog={false}
              title="Learn Sports App using React Native"
              description="Learn Sports application is made using React Native (Expo) which uses is Decathlon Api to show information about dfferent sports from around the world"
              ghLink="https://github.com/shivamkataria2000/learn-sports"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={groupChat}
              isBlog={false}
              title="Group Chat App using GraphQL"
              description="A Simple Group Chat application made using MERN (MongoDB Express React Node) stack along with graphQL and JWT based login support."
              ghLink="https://github.com/shivamkataria2000/group-chat"
              demoLink="https://group-chat-kappa.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
