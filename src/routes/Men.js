import { useState } from 'react';

import { Header } from '../components/Header';
import { CategoriesTitle  } from '../components/CategoriesTitle';
import { ItemsBlock } from '../components/ItemsBlock';
import PRODUCTS from '../metadata/products.json';

import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';

import { Footer } from '../components/Footer/index'

function Men() {
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  const setColorFilter = colorFilter => {
    if (!colorFilters.includes(colorFilter)) {
      setColorFilters([...colorFilters, colorFilter]);
    } else {
      setColorFilters(colorFilters.filter(item => item !== colorFilter));
    }
  };

  const setSizeFilter = sizeFilter => {
    if (!sizeFilters.includes(sizeFilter)) {
      setSizeFilters([...sizeFilters, sizeFilter]);
    } else {
      setSizeFilters(sizeFilters.filter(item => item !== sizeFilter));
    }
  };

  const setBrandFilter = brandFilter => {
    if (!brandFilters.includes(brandFilter)) {
      setBrandFilters([...brandFilters, brandFilter]);
    } else {
      setBrandFilters(brandFilters.filter(item => item !== brandFilter));
    }
  };

  const setPriceFilter = priceFilter => {
    if (!priceFilters.includes(priceFilter)) {
      setPriceFilters([...priceFilters, priceFilter].sort((a, b) => b.from - a.from));
    } else {
      setPriceFilters(priceFilters.filter(item => item.from !== priceFilter.from));
    }
  };

  const getFilteredProducts = () => {
    let products = PRODUCTS.men;
    console.log('priceFilters', priceFilters)

    if (colorFilters.length) {
      products = products.filter(({ images }) => {
        const productColors = images.map(({ color }) => color);

        return colorFilters.some(item => productColors.includes(item));
      })
    }

    if (sizeFilters.length) {
      products = products.filter(({ sizes }) => {
        return sizeFilters.some(item => sizes.includes(item));
      })
    }

    if (brandFilters.length) {
      products = products.filter(({ brand }) => {
        return brandFilters.includes(brand);
      })
    }

    if (priceFilters.length) {
      products = products.filter(({ price }) => {
        return priceFilters.some(priceFilter => {
          if (!priceFilter.to) {
            return price > priceFilter.from;
          } else {
            return price > priceFilter.from && price <= priceFilter.to;
          }
        })
      })
    }

    return products;
  };

  const products = getFilteredProducts();

  return (
    <div className="App" data-test-id="products-page-men">
      <Header />
      <CategoriesTitle title="Men"/>
      <Filter 
        type="men"
        itemsLength={products.length}
        colorFilters={colorFilters}
        sizeFilters={sizeFilters}
        brandFilters={brandFilters}
        priceFilters={priceFilters}
        setColorFilter={setColorFilter}
        setSizeFilter={setSizeFilter}
        setBrandFilter={setBrandFilter}
        setPriceFilter={setPriceFilter}
      />
      <ItemsBlock 
        type="men"
        products={products} 
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