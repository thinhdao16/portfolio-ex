import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nodejs from "../../Assets/Projects/nodejs.png";
import auction from "../../Assets/Projects/auction.png";
import zesttrip from "../../Assets/Projects/zesttrip.png";
import fHome from "../../Assets/Projects/fhome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zesttrip}
              isBlog={false}
              title="Tour recomendations"
              description="Manage tours for providers and book tours for travelers built with react.js, Tailwind CSS and Firebase. There are features that allow users to pay online and interact with posts."
              ghLink="https://github.com/thinhdao16/zest-trip-provider.git"
              demoLink="https://zest-trip-provider.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fHome}
              isBlog={false}
              title="Management room for FU"
              description="Manage housing for FPT students and help landlords provide rooms built with react.js, Tailwind CSS and Firebase. There are features that allow users to pay online and interact with posts."
              ghLink="https://github.com/thinhdao16/F-Home-fe.git"
              demoLink="https://f-home-exe-fe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auction}
              isBlog={false}
              title="Auction product"
              description="The system helps students create auctions to raise profits for charity, built with React Native, Tailwind CSS and Firebase. There are features that allow users to pay online and interact with posts. "
              ghLink="https://github.com/thinhdao16/MMA-project-demo.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nodejs}
              isBlog={false}
              title="Post management system"
              description="The platform that brings the interface closer to users is built with Nodejs and Firebase. There are features that allow users to pay online and interact with posts."
              ghLink="https://github.com/thinhdao16/FHomeBE.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
