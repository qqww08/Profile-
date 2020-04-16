import React from "react";
import Typist from "react-typist";
import "./css/back.css";

export default function Typing() {
  return (
    <Typist>
      <Typist.Delay ms={500} />
      <label className="Typist">안녕하세요 신대현의 포트폴리오 입니다.</label>
    </Typist>
  );
}
