import React, { useEffect, useState } from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "react-bootstrap";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

// navbar

function Header() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 600;
      if (isTop !== true) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    });
  }, [window.scrollY]);

  return (
    <nav className="body">
      {/* header */}
      <div className={scrolled ? "header header2" : "header"}>
        <div className="head_left">
          {/* 홈버튼 */}
          <div>
            <Li to="/">
              <Button
                variant="link"
                style={{ textDecoration: "none", color: "black" }}
                onClick={scroll.scrollToTop}
                className="cus"
              >
                Home
              </Button>
            </Li>
          </div>
        </div>
        {/* navbar 중간 */}

        <div className="head_medium">
          <div style={{ margin: "0px" }}>
            <Link to="about" spy={true} smooth={true}>
              <Button
                variant="link "
                style={{
                  textDecoration: "none",
                  margin: "0px",
                  color: "black",
                }}
                className="cus"
              >
                About
              </Button>
            </Link>
          </div>
          <div>
            <Link to="skill" spy={true} smooth={true}>
              <Button
                variant="link"
                style={{ textDecoration: "none", color: "black" }}
                className="cus"
              >
                Stack
              </Button>
            </Link>
          </div>
          <Link to="boader" spy={true} smooth={true}>
            <Button
              variant="link"
              style={{ textDecoration: "none", color: "black" }}
              className="cus"
            >
              Board
            </Button>
          </Link>
          <Link to="Project" spy={true} smooth={true}>
            <Button
              variant="link"
              style={{ textDecoration: "none", color: "black" }}
              className="cus"
            >
              Project
            </Button>
          </Link>
        </div>
        {/* 로그인 회원가입 */}
        <div className="head_right">
          <HeaderRight />
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Header);
