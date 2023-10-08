import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHIVAM KATARIA </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br /> I am a Lead Full Stack Developer at BNY Mellon a proven track
            record of creating innovative and effective solutions using a
            variety of technologies.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There are no problems that cannot be solved, whether in life or
            within code!"{" "}
          </p>
          <footer className="blockquote-footer">Shivkat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
