import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import { items } from '../metadata/items';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';

import { Footer } from '../components/Footer/index'

function Men( ) {
    return (
      <div className="App" data-test-id={`products-page-${items.type}`}>
        <Header />
        <CategoriesTitle title="Men"/>
        <Filter />
        <ItemsBlock items={items.men} title="MEN’S" headerBlock={false} buttonAll={false}/>
        <Loading />
        <Footer />
      </div>
    );
  }
  
  export default Men;