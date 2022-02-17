import './styles.scss'
import { Card } from './Card/index';

const ItemsBlock = ({ items, title, headerBlock = true, buttonAll = true, type }) => {
    return (
        <div className='ItemsBlock-wraper'>
            {
                headerBlock && (
                    <div className='top-wraper'> 
                        <div className='title'>
                            <span>{title}</span>
                        </div>
                        <nav className='ItemsBlock-nav'>
                            <ul className='ItemsBlock-list'>
                                <li>NEW ARRIVALS</li>
                                <li>SPECIALS</li>
                                <li>BESTSELLERS</li>
                                <li>MOST VIEWED</li>
                                <li>FEATURED PRODUCTS</li>
                            </ul>
                        </nav>       
                    </div>
                )
            }
            <div className='card-block'>
                {
                    items.map(item => <Card  key={item.id} data={item} data-test-id={`products-page-${type}`} />)
                }
            </div>
            {
                buttonAll && (
                    <button className='all-items'>SEE ALL</button>
                )
            }
        </div>      
    );
}

export default ItemsBlock;