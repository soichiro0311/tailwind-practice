import "./App.css";
import { Route, Routes } from "react-router-dom";
import Challenge1 from "./app/challenge-1/Challenge1";
import { Home } from "./app/Home";
import Challenge2 from "./app/challenge-2/Challenge2";
import About from "./app/challenge-2/About";

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
        <Route path="/challenge-2/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
