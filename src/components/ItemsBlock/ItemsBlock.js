import './styles.scss'
import { Card } from './Card/index';
import { useState } from 'react';

const ARRIVALS_FLAG = 'isNewArrivals';
const SPECIAL_FLAG = 'isSpecial';
const BESTSELLER_FLAG = 'isBestseller';
const VIEWED_FLAG = 'isMostViewed';
const FEATURED_FLAG = 'isFeatured';

const ItemsBlock = ({ products, title, headerBlock = true, buttonAll = true, type }) => {
    const [filters, setFilters] = useState([]);

    const onItemsListClick = (tag) => {
        if (!filters.includes(tag)) {
            setFilters([...filters, tag]);
        } else {
            const tempArr = [...filters];
            const index = tempArr.indexOf(tag);
            tempArr.splice(index, 1);
            setFilters(tempArr);
        }
    };

    const filteredArray = products
            .filter((item) => {
            let isProductFits = false;

            if (filters.length) {
                filters.forEach((filter) => {
                    if (item.particulars[filter]) {
                        isProductFits = true;
                    }
                });
            } else {
                isProductFits = true;
            }

            return isProductFits;
        })
        .splice(0, 8);


    return (
        <div className='ItemsBlock-wraper' data-test-id={`clothes-${type}`}>
            {
                headerBlock && (
                    <div className='top-wraper'> 
                        <div className='title'>
                            <span>{title}</span>
                        </div>
                        <nav className='ItemsBlock-nav'>
                            <ul className='ItemsBlock-list'>
                                <li onClick={() => onItemsListClick(ARRIVALS_FLAG)}>
                                    NEW ARRIVALS
                                </li>
                                <li onClick={() => onItemsListClick(SPECIAL_FLAG)}>
                                    SPECIALS
                                </li>
                                <li onClick={() => onItemsListClick(BESTSELLER_FLAG)}>
                                    BESTSELLERS
                                </li>
                                <li onClick={() => onItemsListClick(VIEWED_FLAG)}>
                                    MOST VIEWED
                                </li>
                                <li onClick={() => onItemsListClick(FEATURED_FLAG)}>
                                    FEATURED PRODUCTS
                                </li>
                            </ul>
                        </nav>       
                    </div>
                )
            }
            <div className='card-block'>
                {

                    filteredArray.map((item, index) => (
                        <Card 
                            itemId={item.id} 
                            key={item.id} 
                            data={item} 
                            data-test-id={`clothes-card-${type}`} 
                            type={type} 
                        />
                    ))
                }
            </div>
            {
                buttonAll && (
                    <div className='button-wraper'>
                        <button className='all-items'>SEE ALL</button>
                    </div>
                    
                )
            }
        </div>      
    );
}

export default ItemsBlock;