import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import Women from "./routes/Women";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
    </Routes>
  );
}

export default App;
