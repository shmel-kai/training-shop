import { Card } from './Card/index';
import { useState } from 'react';

import './styles.scss';

const ARRIVALS_FLAG = 'isNewArrivals';
const SPECIAL_FLAG = 'isSpecial';
const BESTSELLER_FLAG = 'isBestseller';
const VIEWED_FLAG = 'isMostViewed';
const FEATURED_FLAG = 'isFeatured';

const ItemsBlock = ({ products, title, headerBlock = true, buttonAll = true, type }) => {
    const [currentItem, setCurrentItem] = useState(null);

    const filteredArray = products
        .filter((product) => {
            if (currentItem) {
                return product.particulars[currentItem]
            }

            return true;
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
                                <li 
                                    className={currentItem === ARRIVALS_FLAG ? 'active' : ''}
                                    onClick={() => setCurrentItem(ARRIVALS_FLAG)}
                                >
                                    NEW ARRIVALS
                                </li>
                                <li 
                                    className={currentItem === SPECIAL_FLAG ? 'active' : ''}
                                    onClick={() => setCurrentItem(SPECIAL_FLAG)}
                                >
                                    SPECIALS
                                </li>
                                <li 
                                    className={currentItem === BESTSELLER_FLAG ? 'active' : ''}
                                    onClick={() => setCurrentItem(BESTSELLER_FLAG)}
                                >
                                    BESTSELLERS
                                </li>
                                <li 
                                    className={currentItem === VIEWED_FLAG ? 'active' : ''}
                                    onClick={() => setCurrentItem(VIEWED_FLAG)}
                                >
                                    MOST VIEWED
                                </li>
                                <li 
                                    className={currentItem === FEATURED_FLAG ? 'active' : ''}
                                    onClick={() => setCurrentItem(FEATURED_FLAG)}
                                >
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