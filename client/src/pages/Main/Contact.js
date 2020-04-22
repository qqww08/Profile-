import React from "react";
import "./css/contact.css";
import "animate.css/animate.min.css";
import { Card } from "react-bootstrap";
import github from "./images/github.svg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Downnav from "./Downnav";
// Footer
function Contact() {
  return (
    // Bootstrap Footer
    <div>
      <ScrollAnimation animateOut="fadeOut">
        <Downnav />
      </ScrollAnimation>
      <Card.Footer
        className="text-muted footer1"
        style={{ marginTop: "30px", width: "100%" }}
      >
        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          My INFO
        </Card.Title>
        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          신대현
        </Card.Title>
        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          010-9447-6412
        </Card.Title>
        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          qqwwee08@gmail.com
        </Card.Title>

        <Card.Title style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://github.com/qqww08/Profile-" target="_blank">
            <img src={github} alt="github" style={{ width: "50px" }} />
          </a>
        </Card.Title>
      </Card.Footer>
    </div>
  );
}
export default Contact;
