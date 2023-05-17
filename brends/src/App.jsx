import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Informative from "./Page/Informative";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/informative" element={<Informative />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
