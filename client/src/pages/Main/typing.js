import React, { Component } from "react";
import Typist from "react-typist";

export default class Typing extends Component {
  render() {
    return (
      <Typist>
        <Typist.Delay ms={500} />
        <label>안녕하세요 신대현의 포트폴리오 입니다.</label>
      </Typist>
    );
  }
}
