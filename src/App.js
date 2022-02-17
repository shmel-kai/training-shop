import { Routes, Route, } from "react-router-dom";

import Home from './routes/Home';
import Women from "./routes/Women";
import Men from "./routes/Men";
import ProductPage from "./routes/ProductPage";

import './App.css';

function App() {
  return (
    <div className="app" data-test-id="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/product" element={<ProductPage />} />
    </Routes>
    </div>
  );
}

export default App;
