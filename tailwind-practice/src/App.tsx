import "./App.css";
import { Route, Routes } from "react-router-dom";
import Challenge1 from "./app/challenge-1/Challenge1";
import { Home } from "./app/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
