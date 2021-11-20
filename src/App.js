import "./App.css";
import ColorBox from "./Components/ColorBox";
import ColorContext from "./Contexts/Color";

// Provider를 사용하면 Context의 value를 변경할 수 있다.
// Provider를 사용할때는 value값을 명시해주어야 한다.
function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
