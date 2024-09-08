import "./App.css";
import Left from "./Components/Left";
import Mobile from "./Components/mobile";
import Right from "./Components/Right";

function App() {
  return (
    <>
      <div className="mobileView">
        <Mobile />
      </div>
      <div className="logInPage">
        <Left />

        <Right />
      </div>
    </>
  );
}

export default App;
