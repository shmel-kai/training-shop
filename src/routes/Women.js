import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import { items } from '../metadata/items';
import { Filter } from '../components/Filter';

import { Footer } from '../components/Footer/index'

function Women( ) {
    return (
      <div className="App">
        <Header />
        <CategoriesTitle title="Women"/>
        <Filter />
        <ItemsBlock items={items.women} title="WOMEN’S"/>
        <Footer />
      </div>
    );
  }
  
  export default Women;