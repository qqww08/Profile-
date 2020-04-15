import React from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "antd/dist/antd.css";

import { Button, Dropdown } from "react-bootstrap";
import "antd/es/button/style";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

function Header() {
  return (
    <nav className="body">
      {/* header */}
      <div className="header_">
        <ul className="head_left">
          <li>
            <Li to="/">
              <Button
                variant="link"
                onClick={scroll.scrollToTop}
                style={{ textDecoration: "none" }}
              >
                Home
              </Button>
            </Li>
          </li>
        </ul>
        <ul className="head_medium">
          <li>
            <Link to="about" spy={true} smooth={true}>
              <Button variant="link" style={{ textDecoration: "none" }}>
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link to="skill" spy={true} smooth={true}>
              <Button variant="link" style={{ textDecoration: "none" }}>
                Skill
              </Button>
            </Link>
          </li>
          <li>
            <Link to="Project" spy={true} smooth={true}>
              <Button variant="link" style={{ textDecoration: "none" }}>
                Project
              </Button>
            </Link>
          </li>
          <li>
            <Li to="/List">
              <Button variant="link" style={{ textDecoration: "none" }}>
                Board
              </Button>
            </Li>
          </li>
        </ul>

        <ul className="head_right">
          <HeaderRight />
        </ul>
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
                <Link to="Project" spy={true} smooth={true}>
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    Project
                  </Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <Li to="/List">
                  <Button variant="link" style={{ textDecoration: "none" }}>
                    Board
                  </Button>
                </Li>
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
