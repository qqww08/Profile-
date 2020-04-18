import React from "react";
import images1 from "./images/back.jpg";
import "./css/profile.css";
import { Element } from "react-scroll";
// Profile 설명, 사진
function Profile() {
  return (
    <div style={{ padding: "50px" }}>
      <Element id="about" />
      <div className="about" style={{ marginTop: "30px" }}>
        <h1 className="h1Text">About</h1>
      </div>

      <div className="profile_flex">
        <div className="profile_img1">
          <img src={images1} alt="pro" className="profile_img" />
        </div>
        <div className="profileStory">
          <div>
            <h1 className="profileText">Profile</h1>
            <p>이름:신대현</p>
            <p>나이:27세(1994.05.10)</p>
            <p>연락처:010-9447-6412</p>
            <p>지역:울산</p>
            <p>E-mail:qqwwee08@gmail.com</p>
          </div>
          <div>
            <h1 className="profileText">History</h1>
            <p>2013.03 ~ 2019.02: 울산과학대학교 컴퓨터정보학과 졸업</p>
            <p>
              2019.03 ~ 2020.04: 현대아이씨티(현대중공업 네트워크 인프라 운영)
              근무
            </p>
            <p>2020.05 ~ 서울로 이직 준비중</p>
          </div>
          <div>
            <h1 className="profileText">License</h1>
            <p>CCNA (Cisco Certification Network Associate)</p>
            <p>GTQ 포토샵 2급</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
