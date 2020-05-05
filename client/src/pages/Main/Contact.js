import React from "react";
import "./css/contact.css";
import "animate.css/animate.min.css";
import { Card } from "react-bootstrap";
import github from "./images/github.svg";
import "animate.css/animate.min.css";

// Footer
function Contact() {
  return (
    // Bootstrap Footer
    <div>
      <Card.Footer className="text-muted footer1">
        <h1 className="fText">Contact</h1>
        <Card className="footerSize">
          <Card.Body>
            <Card.Title className="footerFlex">My INFO</Card.Title>
            <Card.Title className="footerFlex">신대현</Card.Title>
            <Card.Title className="footerFlex">010-9447-6412</Card.Title>
            <Card.Title className="footerFlex">qqwwee08@naver.com</Card.Title>
          </Card.Body>
        </Card>
        <Card.Title className="footerFlex">
          본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로
          제작되었습니다.
        </Card.Title>

        <Card.Title className="footerFlex">
          Copyrightⓒ2020. 신대현. All rights reserved.
        </Card.Title>
      </Card.Footer>
    </div>
  );
}
export default Contact;
