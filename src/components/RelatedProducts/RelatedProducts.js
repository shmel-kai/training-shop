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
                    meta.map((element, index) => <Card itemId={index + 1} key={element.id} data={element} data-test-id="clothes-card-wome" type="women" />)
                }
            </div>
            
        </div>
    )
};

export default RelatedProducts;