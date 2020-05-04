import React, { useEffect, useState } from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

import { Button, Dropdown } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

// navbar
export function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrolled, setscrolled] = useState(false);
  useEffect(
    () => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", debounce(handleScroll));
      const isTop = window.scrollY < 700;

      if (isTop !== true) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    },
    [debounce, window.scrollY] // If you remove this, things go 🍌🍌🍌
  );

  return (
    <nav className="body">
      {/* header */}
      <div className={scrolled ? "header header2" : "header"}>
        <ul className="head_left">
          {/* 홈버튼 */}
          <li>
            <Li to="/">
              <Button
                variant="link"
                style={{ textDecoration: "none" }}
                onClick={scroll.scrollToTop}
              >
                {/* <aside>Scrolled: {scrollY}</aside> */}
                Home
              </Button>
            </Li>
          </li>
        </ul>
        {/* navbar 중간 */}

        <div className="head_medium">
          <div style={{ margin: "0px" }}>
            <Link to="about" spy={true} smooth={true}>
              <Button
                variant="link "
                style={{ textDecoration: "none", margin: "0px" }}
              >
                About
              </Button>
            </Link>
          </div>
          <div>
            <Link to="skill" spy={true} smooth={true}>
              <Button variant="link" style={{ textDecoration: "none" }}>
                Skill
              </Button>
            </Link>
          </div>
          <Link to="boader" spy={true} smooth={true}>
            <Button variant="link" style={{ textDecoration: "none" }}>
              Board
            </Button>
          </Link>
          <Link to="Project" spy={true} smooth={true}>
            <Button variant="link" style={{ textDecoration: "none" }}>
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
              style={{ textDecoration: "none", marginTop: "8px" }}
            >
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                textAlign: "center",
              }}
            >
              <Dropdown.Item href="#/action-1">
                <Link to="about" spy={true} smooth={true}>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    About
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link to="skill" spy={true} smooth={true}>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    Skill
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <Link to="boader" spy={true} smooth={true}>
                  <Button
                    variant="link"
                    style={{ textDecoration: "none" }}
                    onClick={scroll.scrollToTop}
                  >
                    Board
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <Link to="Project" spy={true} smooth={true}>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    Project
                  </Button>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-5">
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
