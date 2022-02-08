import './styles.scss'
import { Card } from './Card/index';

const ItemsBlock = ({ items, title }) => {
    return (
        <div className='ItemsBlock-wraper'>
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
            <div className='card-block'>
                {
                    items.map(item => <Card key={item.id} data={item} />)
                }
            </div>
            <button className='all-items'>SEE ALL</button>
        </div>
        
        
        
    );
}

export default ItemsBlock;