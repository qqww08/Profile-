import React from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Button } from "react-bootstrap";
import "antd/es/button/style";
import HeaderRight from "./HeaderRight";
import { withRouter, Link as Li } from "react-router-dom";

function Header() {
  const { SubMenu } = Menu;

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <nav className="body">
      {/* header */}
      <div className="header_">
        <ul className="head_left">
          <li>
            <Li to="/">
              <Button variant="link" onClick={scroll.scrollToTop}>
                Home
              </Button>
            </Li>
          </li>
        </ul>
        <ul className="head_medium">
          <li>
            <Link to="about" spy={true} smooth={true}>
              <Button variant="link">About</Button>
            </Link>
          </li>
          <li>
            <Link to="skill" spy={true} smooth={true}>
              <Button variant="link">Skill</Button>
            </Link>
          </li>
          <li>
            <Link to="contect" spy={true} smooth={true}>
              <Button variant="link">Contect</Button>
            </Link>
          </li>
          <li>
            <Li to="/List">
              <Button variant="link">Board</Button>
            </Li>
          </li>
        </ul>

        <ul className="head_right">
          <HeaderRight />
        </ul>
        <span className="menu_bar">
          <Menu
            onClick={handleClick}
            style={{ width: 150, background: "#fafafa", border: "none" }}
            mode="inline"
          >
            <SubMenu
              title={
                <span style={{ marginLeft: "50px", color: "#89c5fc" }}>
                  <span>Menu</span>
                </span>
              }
            >
              <Menu.Item>
                <Button type="link" onClick={scroll.scrollToTop}>
                  Home
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Link to="about" spy={true} smooth={true}>
                  <Button type="link">About</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="skill" spy={true} smooth={true}>
                  <Button type="link">Skill</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="contect" spy={true} smooth={true}>
                  <Button type="link">Contect</Button>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </span>
      </div>
    </nav>
  );
}

export default withRouter(Header);
