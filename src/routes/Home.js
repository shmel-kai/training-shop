import { Header } from '../components/Header';
import { TopSection } from '../components/TopSection';
import { Details } from '../components/Details';
import { ItemsBlock } from '../components/ItemsBlock';
import { Collection } from '../components/Collection';
import { items } from '../metadata/items';
import { Subscribe } from '../components/Subscribe';
import { News } from '../components/News';
import { sections } from '../components/News/MetaData/MetaData';
import { Footer } from '../components/Footer/index'

function Home() {

    return (
      <>
        <Header />
        <TopSection />
        <Details />
        <ItemsBlock items={items.women} title="WOMEN’S" data-test-id="clothes-women" type="women"/>
        <ItemsBlock items={items.men} title="MEN’S" data-test-id="clothes-men" type="men"/>
        <Collection />
        <Subscribe />
        <News sections={sections.block}/>
        <Footer />
      </>
    );
  }
  
export default Home;