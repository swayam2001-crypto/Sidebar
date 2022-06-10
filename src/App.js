import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import Documents from "./pages/Documents";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/analytics" element={<Documents />} />
          
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
