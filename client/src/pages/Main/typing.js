import React from "react";
import Typist from "react-typist";
import "./css/back.css";

export default function Typing() {
  return (
    // Landingpage 이미지 텍스트
    <Typist>
      <Typist.Delay ms={500} />
      <label className="Typist">
        안녕하세요 신입 Front-end 개발자 신대현의 포트폴리오 입니다.
      </label>
    </Typist>
  );
}
