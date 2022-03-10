import { useState } from 'react';

import PRODUCTS from '../../metadata/products.json';

import './styles.scss';

import all from './all.png';
import arrow1 from './arrow1.png';
import menu from './menu.png';

const prices = [
    { from: 200 },
    { from: 150, to: 200 },
    { from: 100, to: 150 },
    { from: 50, to: 100 },
    { from: 10, to: 50 },
    { from: 5, to: 10 },
];

const Filter = ({ 
    type,
    itemsLength,
    colorFilters,
    sizeFilters,
    brandFilters,
    priceFilters,
    setColorFilter,
    setSizeFilter,
    setBrandFilter,
    setPriceFilter,
}) => {
    const [isFilterOpen, setFilterOpen] = useState(false);
    
   const onFilterClick = () => setFilterOpen(!isFilterOpen);

   const uniqueColors = PRODUCTS[type].reduce((colors, product) => {
       product.images.forEach(({ color }) => {
           if (!colors.includes(color)) {
                colors.push(color);
           }
       });

       return colors;
   }, []);

   const uniqueSizes = PRODUCTS[type].reduce((sizes, product) => {
        product.sizes.forEach(size => {
            if (!sizes.includes(size)) {
                sizes.push(size);
            }
        });

        return sizes;
    }, []);

    const uniqueBrands = PRODUCTS[type].reduce((brands, product) => {
        if (!brands.includes(product.brand)) {
            brands.push(product.brand);
        }

        return brands;
    }, []);

    const isFiltersApplied = colorFilters.length || sizeFilters.length || brandFilters.length || priceFilters.length;

    return (
        <div className='filter-wraper'>
            <div className='wrap'>
                <div className='filter-part'>
                    <button 
                        onClick={onFilterClick}
                        className='button-in-filter-part'
                        data-test-id="filter-button"
                    >
                        <div className={isFilterOpen ? 'closeIcon' : 'filter'}></div>
                        <span className='filter-span'>Filter</span>
                    </button>
                </div>
                <div className='middle-part' >
                    <button className='menu-button'>
                        <img className='menu' src={menu} alt='menu' />
                    </button>
                    <button className='all-button'>
                        <img className='all' src={all} alt='all' />
                    </button>
                </div>
                <div className='bottom-part'>
                    <button className='button-in-bottom-part'>
                        <span className='span-best'>BESTSELLERS</span>
                        <img className='arrow1' src={arrow1} alt='arrow1' />
                    </button>
                </div>
            </div>
            <div 
                className={isFilterOpen ? 'filter-block' : 'hidden'}
                data-test-id={`filters-${type}`}
            >
                <div className='filter-categories colors'>
                    <span className='filter-title'>Color</span>
                    <div className='filter-items' data-test-id="filters-color">
                        {
                            uniqueColors.map(color => (
                                <label 
                                    className='container' 
                                    key={color}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setColorFilter(color);
                                    }}
                                    data-test-id={`filter-color-${color}`}
                                >
                                    <input type="checkbox" checked={colorFilters.includes(color)} readOnly />
                                    <span className='checkmark color' />
                                        {color}
                                </label>
                            ))
                        }
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Size</span>
                    <div className='filter-items' data-test-id="filters-size">
                        {
                            uniqueSizes.map(size => (
                                <label 
                                    className='container' 
                                    key={size}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setSizeFilter(size);
                                    }}
                                    data-test-id={`filter-size-${size}`}
                                >
                                    <input type="checkbox" checked={sizeFilters.includes(size)} readOnly />
                                    <span className='checkmark' />
                                        {size}
                                </label>
                            ))
                        }
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Brand</span>
                    <div className='filter-items' data-test-id="filters-brand">
                        {
                            uniqueBrands.map(brand => (
                                <label 
                                    className='container' 
                                    key={brand}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setBrandFilter(brand);
                                    }}
                                    data-test-id={`filter-brand-${brand}`}
                                >
                                    <input type="checkbox" checked={brandFilters.includes(brand)} readOnly />
                                    <span className='checkmark' />
                                    {brand}
                                </label>
                            ))
                        }
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Price</span>
                    <div className='filter-items' data-test-id="filters-price">
                        {
                            prices.map(price => (
                                <label 
                                    className='container'
                                    key={price.from}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setPriceFilter(price);
                                    }}
                                    data-test-id={`filter-price-${price}`}
                                >
                                    <input type="checkbox" checked={priceFilters.some(item => item.from === price.from)} readOnly />
                                    <span className='checkmark'></span>
                                        {`$${price.from}${price.to ? `-$${price.to}` : '+'}`}
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                !!isFiltersApplied && (
                    <div className="filters-info-container">
                        <span className="items-count">{`${itemsLength} items found`}</span>
                        {
                            !!colorFilters.length && (
                                <span>{`Colors: ${colorFilters.join(', ')}`}</span>
                            )
                        }
                        {
                            !!sizeFilters.length && (
                                <span>{`Sizes: ${sizeFilters.join(', ')}`}</span>
                            )
                        }
                        {
                            !!brandFilters.length && (
                                <span>{`Brands: ${brandFilters.join(', ')}`}</span>
                            )
                        }
                        {
                            !!priceFilters.length && (
                                <span>{`Prices: ${priceFilters.map(price => `$${price.from}${price.to ? `-$${price.to}` : '+'}`).join(', ')}`}</span>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
};

export default Filter;