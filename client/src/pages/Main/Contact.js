import React from "react";
import "./css/contact.css";
import { Card } from "react-bootstrap";
import Clock from "react-live-clock";
import github from "./images/github.svg";
function Contact() {
  return (
    // <div className="Contact">
    //   <ul>
    //     <li>rwqrqw</li>
    //     <li>rwqrqw</li>
    //     <li>rwqrqw</li>
    //   </ul>
    // </div>

    <Card.Footer className="text-muted footer1">
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
  );
}
export default Contact;
