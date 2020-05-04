import React, { useEffect, useState } from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

import { Button, Dropdown } from "react-bootstrap";

import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

// navbar

function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrolled, setscrolled] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", () => {
        const isTop = window.scrollY < 753;

        if (isTop !== true) {
          setscrolled(true);
        } else {
          setscrolled(false);
        }
      });
    },
    [window.scrollY] // If you remove this, things go 🍌🍌🍌
  );

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
              >
                Skill
              </Button>
            </Link>
          </div>
          <Link to="boader" spy={true} smooth={true}>
            <Button
              variant="link"
              style={{ textDecoration: "none", color: "black" }}
            >
              Board
            </Button>
          </Link>
          <Link to="Project" spy={true} smooth={true}>
            <Button
              variant="link"
              style={{ textDecoration: "none", color: "black" }}
            >
              Project
            </Button>
          </Link>
        </div>
        {/* 로그인 회원가입 */}
        <div className="head_right">
          <HeaderRight />
        </div>
        {/* 반응형 웹  */}

        <span className="menu_bar">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              style={{
                textDecoration: "none",
                marginTop: "8px",
                color: "black",
              }}
            >
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                textAlign: "center",
              }}
            >
              <Dropdown.Item>
                <Link to="about" spy={true} smooth={true}>
                  <Button
                    variant="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    About
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="skill" spy={true} smooth={true}>
                  <Button
                    variant="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Skill
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="boader" spy={true} smooth={true}>
                  <Button
                    variant="link"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={scroll.scrollToTop}
                  >
                    Board
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="Project" spy={true} smooth={true}>
                  <Button
                    variant="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Project
                  </Button>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <HeaderRight />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
    </nav>
  );
}

export default withRouter(Header);
