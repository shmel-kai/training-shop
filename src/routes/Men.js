import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import PRODUCTS from '../metadata/products.json';

import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';

import { Footer } from '../components/Footer/index'

function Men( ) {
    return (
      <div className="App" data-test-id="products-page-men">
        <Header />
        <CategoriesTitle title="Men"/>
        <Filter />
        <ItemsBlock type="men" 
          products={PRODUCTS.men} 
          title="MEN’S" 
          headerBlock={false} 
          buttonAll={false}
        />
        <Loading />
        <Footer />
      </div>
    );
  }
  
  export default Men;