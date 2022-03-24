import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProductTitle  } from '../components/ProductTitle';
import { Footer } from '../components/Footer/index';
import { ProductCard } from '../components/ProductCard';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PRODUCT_DATA_REQUESTED, PRODUCTS_REQUESTED } from '../saga/productSaga';
import { action } from '../redux/store'


function ProductPage() {
    // const { state: productData } = useLocation();
    const productDataId = useLocation().state?.id || window.location.hash.split('/')[3];
    const products = useSelector(store => store.productsSlice.products);
    const curProductData = useSelector(store => store.productsSlice.currentProduct);
    console.log('curProductData', curProductData)

    useEffect(() => {
      action(PRODUCTS_REQUESTED);
      action(PRODUCT_DATA_REQUESTED, { id: productDataId });
    }, [productDataId]);

    return curProductData && (
      <div className="App" data-test-id={`product-page-${curProductData.category}`}>
        <Header /> 
        <ProductTitle 
          previousPage={curProductData.category} 
          title={curProductData.name}
          rating={curProductData.rating}
          reviews={curProductData.reviews?.length}
        />
        <ProductCard allProducts={products[curProductData.category]} productData={curProductData}/>
        <Footer />
      </div>
    );
  }
  
  export default ProductPage;