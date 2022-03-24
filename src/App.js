import { Routes, Route, } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { PRODUCTS_REQUESTED } from './saga/productSaga';
import { Spinner } from './components/spinner';
import { action } from './redux/store'



import Home from './routes/Home';
import Women from "./routes/Women";
import Men from "./routes/Men";
import ProductPage from "./routes/ProductPage";

import './App.css';

function App() {
  const loading = useSelector(store => store.productsSlice.isLoading);

  useEffect(() => {
    action(PRODUCTS_REQUESTED);
  }, []);
  

  return (
    <div className="app" data-test-id="app">
      {
        loading && <Spinner data-test-id='loader' />
      }
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/men" element={<Men />} />
        <Route path="/product/:type/:id" element={<ProductPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
