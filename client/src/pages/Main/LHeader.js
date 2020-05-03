import React from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "antd/dist/antd.css";
import { Button, Dropdown } from "react-bootstrap";
import "antd/es/button/style";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

// navbar
function LHeader() {
  return (
    <nav className="body">
      {/* header */}
      <div className="header_">
        <ul className="head_left">
          {/* 홈버튼 */}
          <li>
            <Li to="/">
              <Button
                variant="link"
                style={{ textDecoration: "none" }}
                onClick={scroll.scrollToTop}
              >
                Home
              </Button>
            </Li>
          </li>
        </ul>
        {/* navbar 중간 */}

        <div className="head_medium">
          <Link to="about" spy={true} smooth={true}>
            <Button variant="link" style={{ textDecoration: "none" }}>
              About
            </Button>
          </Link>

          <Link to="skill" spy={true} smooth={true}>
            <Button variant="link" style={{ textDecoration: "none" }}>
              Skill
            </Button>
          </Link>
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

export default withRouter(LHeader);
