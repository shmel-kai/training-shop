import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import { items } from '../metadata/items';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';

import { Footer } from '../components/Footer/index'

function Women( ) {
    return (
      <div className="App" data-test-id="products-page-women">
        <Header />
        <CategoriesTitle title="Women"/>
        <Filter />
        <ItemsBlock type="women" items={items.women} title="WOMEN’S" headerBlock={false} buttonAll={false}/>
        <Loading />
        <Footer />
      </div>
    );
  }
  
  export default Women;