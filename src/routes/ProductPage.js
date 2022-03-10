import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProductTitle  } from '../components/ProductTitle';
import { Footer } from '../components/Footer/index';
import { ProductCard } from '../components/ProductCard';
import PRODUCTS from './../metadata/products.json';

function ProductPage() {
    // const { state: productData } = useLocation();
    const productData = useLocation().state;

    return (
      <div className="App" data-test-id={`product-page-${productData.category}`}>
        <Header />
        <ProductTitle 
          previousPage={productData.category} 
          title={productData.name}
          rating={productData.rating}
          reviews={productData.reviews.length}
        />
        <ProductCard allProducts={PRODUCTS[productData.category]} productData={productData}/>
        <Footer />
      </div>
    );
  }
  
  export default ProductPage;