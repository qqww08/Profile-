import React from "react";
import "./css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "antd/dist/antd.css";
import { Button, Menu } from "antd";
import "antd/es/button/style";
import Axios from "axios";
import { withRouter } from "react-router-dom";

function Header(props) {
  const onClickHandler = () => {
    Axios.get(`/api/users/logout`).then(response => {
      if (response.data.success) {
        props.history.push("/");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  const { SubMenu } = Menu;

  const handleClick = e => {
    console.log("click ", e);
  };

  return (
    <nav className="body">
      {/* header */}
      <div className="header_">
        <ul className="head_left">
          <li>
            <Button type="link" onClick={scroll.scrollToTop}>
              Home
            </Button>
          </li>
        </ul>
        <ul className="head_medium">
          <li>
            <Link to="about" spy={true} smooth={true}>
              <Button type="link">About</Button>
            </Link>
          </li>
          <li>
            <Link to="skill" spy={true} smooth={true}>
              <Button type="link">Skill</Button>
            </Link>
          </li>
          <li>
            <Link to="contect" spy={true} smooth={true}>
              <Button type="link">Contect</Button>
            </Link>
          </li>
          <li>
            <Button type="link" href="/write">
              Border
            </Button>
          </li>
        </ul>

        <ul className="head_right">
          <Button type="link" onClick={onClickHandler} className="LogoutBtn">
            Logout
          </Button>
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
