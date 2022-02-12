import { Link } from 'react-router-dom';

import share from './share.png';
import arrow from './arrow.png';
import './styles.scss';

const CategoriesTitle = ({title}) => {
    return (
        <div className='categories-block'>
            <div className='categories-wraper'>
                <div className='categories-menu'>
                    <div className='part left'>
                        <Link to='/' className='home-link'>Home</Link>
                        <img className='arrow' src={arrow} alt='arrow' />
                        <span className='page-title'> {title}</span>
                    </div>
                    <div className='part'>
                        <button><img className='share' src={share} alt='share' /> Share</button>
                    </div>
                </div>
                <div className='categories-title-block'>
                    <h1 className='categories-title'> {title}</h1>
                </div>
                
            </div>
        </div>

    )
};

export default CategoriesTitle;