import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../Contexts/Color";

// props가 아닌 Consumer를 이용하여 색상을 받아옴

// useContext를 사용하면 context를 편하게 사용할 수 있다.
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
