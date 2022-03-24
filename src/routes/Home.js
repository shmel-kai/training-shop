import { useEffect } from 'react';
import { useSelector} from 'react-redux';

import { Header } from '../components/Header';
import { TopSection } from '../components/TopSection';
import { Details } from '../components/Details';
import { ItemsBlock } from '../components/ItemsBlock';
import { Collection } from '../components/Collection';
import { Subscribe } from '../components/Subscribe';
import { News } from '../components/News';
import { sections } from '../components/News/MetaData/MetaData';
import { Footer } from '../components/Footer/index'

import { PRODUCTS_REQUESTED } from '../saga/productSaga';
import { action } from '../redux/store'

function Home() {
  const products = useSelector(store => store.productsSlice.products);

  useEffect(() => {
    action(PRODUCTS_REQUESTED);
  }, []);

  return (
    <>
      <Header />
      <TopSection />
      <Details />
      <ItemsBlock products={products.women} title="WOMEN’S" data-test-id="clothes-women" type="women"/>
      <ItemsBlock products={products.men} title="MEN’S" data-test-id="clothes-men" type="men"/>
      <Collection />
      <Subscribe />
      <News sections={sections.block}/>
      <Footer />
    </>
  );
  }
  
export default Home;