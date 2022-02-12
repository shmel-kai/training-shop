import './styles.scss';
import all from './all.png';
import arrow1 from './arrow1.png';
import filter from './filter.png';
import menu from './menu.png';

const Filter = () => {
    return (
        <div className='filter-wraper'>
            <div className='filter-part'>
                <button className='button-in-filter-part'>
                    <img className='filter' src={filter} alt='filter' />
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
    )
};

export default Filter;