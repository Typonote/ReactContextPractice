import React from "react";
import ColorContext from "../Contexts/Color";

// props가 아닌 Consumer를 이용하여 색상을 받아옴
const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
