import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahsan Iftikhar </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Paysys Labs.
            <br />
            I have completed my BS in Computer Science from Fast University, Karachi.
            <br />
            NUCES - FAST is the <span className="purple">no.1 </span>institute in Computer Science in Pakistan.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Gaming 
            </li>
            <li className="about-activity">
              <ImPointRight />  Sports like Cricket , Table Tennis , Snooker and much more
            </li>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
            <li className="about-activity">
              <ImPointRight />  Write Blogs (Sometimes :p)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahsan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
