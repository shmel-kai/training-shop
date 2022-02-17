import { Link } from 'react-router-dom';

import share from './share.png';
import arrow from './arrow.png';
import AstraY from './AstraY.png';
import './styles.scss';

const ProductTitle = ({previousPage, title}) => {
    return (
        <div className='categories-block'>
            <div className='categories-wraper'>
                <div className='categories-menu'>
                    <div className='part left'>
                        <Link to='/' className='home-link'>Home</Link>
                        <img className='arrow previous-arrow' src={arrow} alt='arrow' />
                        <span className='page-title previous-page'>{previousPage}</span>
                        <img className='arrow' src={arrow} alt='arrow' />
                        <span className='page-title current-page '>{title}</span>
                    </div>
                    <div className='part'>
                        <button><img className='share' src={share} alt='share' /> Share</button>
                    </div>
                </div>
                <div className='categories-title-block'>
                    <h1 className='categories-title'>{title}</h1>
                </div>
                <div className='info'>
                    <div className='reviews'>
                        <img className='astra' src={AstraY} alt='astra' />
                        <img className='astra' src={AstraY} alt='astra' />
                        <img className='astra' src={AstraY} alt='astra' />
                        <img className='astra' src={AstraY} alt='astra' />
                        <img className='astra' src={AstraY} alt='astra' />
                        <span> 2 Reviews</span>
                    </div>
                    <div className='data-info'>
                        <div className='info-wraper'>
                            <span className='key'>SKU:</span>
                            <span className='value'>777</span>
                        </div>
                        <div className='info-wraper'>
                            <span className='key'>Availability:</span>
                            <span className='value'>In Stock</span>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    )
};

export default ProductTitle;