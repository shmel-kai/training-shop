import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="about" element={<Home />} />
    </Routes>
  );
}

export default App;