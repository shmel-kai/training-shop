import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import PRODUCTS from '../metadata/products.json';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';

import { Footer } from '../components/Footer/index'

function Women( ) {
    return (
      <div className="App" data-test-id="products-page-women">
        <Header />
        <CategoriesTitle title="Women"/>
        <Filter />
        <ItemsBlock type="women" products={PRODUCTS.women} title="WOMEN’S" headerBlock={false} buttonAll={false}/>
        <Loading />
        <Footer />
      </div>
    );
  }
  
  export default Women;