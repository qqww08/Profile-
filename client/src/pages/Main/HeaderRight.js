import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import { Link, animateScroll as scroll } from "react-scroll";
import RegisterPage from "../Register/RegisterPage";
import { logout } from "../../_actions/user_actions";
import { withRouter, Link as Li } from "react-router-dom";
import { Button, ButtonGroup, Dropdown, Image } from "react-bootstrap";
import unimage from "./images/unimage.png";
import "./css/headerRight.css";
import ProfileEdit from "../LoginPage/ProfileEdit";
import { BACK_SERVER_URL } from "../../Config";

// 로그인 로그아웃 회원가입 버튼 관리
function HeaderRight(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [Image, setImage] = useState("");

  // 로그아웃 기능
  const onClickHandler = () => {
    //서버로 로그아웃 정보 전달
    dispatch(logout()).then((response) => {
      //서버에서 success: true 일시
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  //로그인이 아닐시 로그인 버튼 회원가입 버튼 보여주기

  if (user.userData && user.userData.isAuth) {
    // const Image = user.userData.image;

    const img = user.userData.image;
    const name = user.userData.name;
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="dtoggle"
            style={{ color: "black", textDecoration: "none" }}
            className="cus"
          >
            {img ? (
              <Image
                src={`${BACK_SERVER_URL}/${img}`}
                className="profileImg"
                roundedCircle
              />
            ) : (
              <Image src={unimage} className="profileImg" />
            )}

            <p
              style={{
                fontSize: "20px",
                color: "black",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              {name}
            </p>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <span className="menu_bar">
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
            </span>
            <Dropdown.Item>
              <ProfileEdit />
            </Dropdown.Item>
            <Dropdown.Item>
              <Button
                variant="link"
                onClick={onClickHandler}
                style={{ textDecoration: "none", color: "black" }}
              >
                Logout
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  } else {
    return (
      <div>
        <div className="hrweb">
          <ButtonGroup aria-label="Basic example">
            <LoginPage />
            <RegisterPage />
          </ButtonGroup>
        </div>
        <Dropdown className="hr1">
          <Dropdown.Toggle
            variant="link"
            className="dtoggle"
            style={{ color: "black", textDecoration: "none" }}
          >
            메뉴
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="about" spy={true} smooth={true}>
                <Button
                  variant="link"
                  style={{ textDecoration: "none", color: "black" }}
                  className="cus"
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
                  className="cus"
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
                  className="cus"
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
                  className="cus"
                >
                  Project
                </Button>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <LoginPage />
            </Dropdown.Item>
            <Dropdown.Item>
              <RegisterPage />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default withRouter(HeaderRight);
