import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProductTitle  } from '../components/ProductTitle';
import { Footer } from '../components/Footer/index';
import { ProductCard } from '../components/ProductCard';

function ProductPage() {
    // const { state: productData } = useLocation();
    const productData = useLocation().state;
    console.log('productData', productData)

    return (
      <div className="App" data-test-id={`product-page-${productData.type}`}>
        <Header />
        <ProductTitle previousPage={productData.type} title={productData.name} />
        <ProductCard />
        <Footer />
      </div>
    );
  }
  
  export default ProductPage;