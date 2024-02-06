import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import SideBar from "./SideBar/JS";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
  // return <SideBar />;
}

export default App;
