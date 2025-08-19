

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Opening from "./pages/Opening";
import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
