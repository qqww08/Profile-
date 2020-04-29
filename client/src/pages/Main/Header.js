import React from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "antd/dist/antd.css";
import { Button, Dropdown } from "react-bootstrap";
import "antd/es/button/style";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";
import { useSelector } from "react-redux";

// navbar
function Header() {
  const post = useSelector((state) => state.post);

  const Hideon = () => {
    post.success = false;
  };
  return (
    <nav className="body">
      {/* header */}
      <div className="header_">
        <ul className="head_left">
          {/* 홈버튼 */}
          <li>
            <a href="/">
              <Button
                variant="link"
                style={{ textDecoration: "none" }}
                onClick={(scroll.scrollToTop, Hideon)}
              >
                Home
              </Button>
            </a>
          </li>
        </ul>
        {/* navbar 중간 */}
        {!post.success ? (
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
        ) : (
          <div className="head_medium">게시판</div>
        )}
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

            {!post.success ? (
              <Dropdown.Menu
                style={{
                  textAlign: "center",
                }}
              >
                <Dropdown.Item href="#/action-1">
                  <Link to="about" spy={true} smooth={true}>
                    <Li to="/">
                      <Button variant="link" style={{ textDecoration: "none" }}>
                        About
                      </Button>
                    </Li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="skill" spy={true} smooth={true}>
                    <Li to="/">
                      <Button variant="link" style={{ textDecoration: "none" }}>
                        Skill
                      </Button>
                    </Li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="Project" spy={true} smooth={true}>
                    <Li to="/">
                      <Button variant="link" style={{ textDecoration: "none" }}>
                        Project
                      </Button>
                    </Li>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                  <Li to="/List">
                    <Button
                      variant="link"
                      style={{ textDecoration: "none" }}
                      onClick={scroll.scrollToTop}
                    >
                      Board
                    </Button>
                  </Li>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5">
                  <HeaderRight />
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-5">
                  <HeaderRight />
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </span>
      </div>
    </nav>
  );
}

export default withRouter(Header);
