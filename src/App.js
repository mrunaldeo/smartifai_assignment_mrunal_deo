import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-pink-100 h-100vh">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;