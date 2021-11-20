import { createContext } from "react";

// 새로운 Context를 만들때는 createContext 함수를 이용해 만든다. => 파라미터에는 해당 Context의 기본값을 저장.
const ColorContext = createContext({ color: "black" });

export default ColorContext;
