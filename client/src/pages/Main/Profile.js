import React from "react";
import images1 from "./images/Pro.jpg";
import "./css/profile.css";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
// Profile 설명, 사진
function Profile() {
  return (
    <div>
      <Element id="about" />
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <div className="about" style={{ marginTop: "30px" }}>
          <h1 className="h1Text">About</h1>
        </div>

        <div className="profile_flex">
          <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
            <div className="profile_img1">
              <img src={images1} alt="pro" className="profile_img" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="slideInRight"
            delay={100}
            animateOnce={true}
          >
            <div className="profileStory">
              <div>
                <h1 className="profileText">Profile</h1>
                <p>이름:신대현</p>
                <p>나이:27세(1994.05.10)</p>
                <p>연락처:010-9447-6412</p>
                <p>지역:울산(희망근무지 서울)</p>
                <p>E-mail:qqwwee08@naver.com</p>
              </div>
              <div>
                <h1 className="profileText">History</h1>
                <p>2013.03 ~ 2019.02: 울산과학대학교 컴퓨터정보학과 졸업</p>
                <p>2019.03 ~ 2020.04: 현대아이씨티 근무</p>
                <p>(현대중공업 네트워크 인프라 운영)</p>
              </div>
              <div>
                <h1 className="profileText">License</h1>
                <p>CCNA (Cisco Certification Network Associate)</p>
                <p>GTQ 포토샵 2급</p>
                <p></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Profile;
