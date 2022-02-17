import './styles.scss';

import { Card } from '../ItemsBlock/Card';

import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';

const RelatedProducts = ({ meta }) => {
    return (
        <div className='products-wraper'>
            <div className='top-part'>
                <span className='title'>RELATED PRODUCTS</span>
                <div className='switch-block'>
                    <img className='left-arrow' src={leftArrow} alt='product' />
                    <img className='right-arrow' src={rightArrow} alt='product' /> 
                </div>
            </div>      
            <div className='card-block'>
                {
                    meta.map((element) => <Card data={element} key={element.id} />)
                }
            </div>
            
        </div>
    )
};

export default RelatedProducts;