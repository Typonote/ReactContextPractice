import "./App.css";
import ColorBox from "./Components/ColorBox";
import SelectColors from "./Components/SelectColors";
import ColorContext, { ColorProvider } from "./Contexts/Color";

// Provider를 사용하면 Context의 value를 변경할 수 있다.
// Provider를 사용할때는 value값을 명시해주어야 한다.
function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
