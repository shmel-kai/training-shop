import './styles.scss';

import { useState } from 'react';
import all from './all.png';
import arrow1 from './arrow1.png';
import menu from './menu.png';

const Filter = () => {
    const [isFilterOpen, setFilterOpen] = useState(false);
    
   const onFilterClick = () => {
        //setFilterOpen (curValue => !curValue);
        console.log(onFilterClick, 'onFilterClick')
        if (!isFilterOpen) {
            setFilterOpen(true);
        } else {
             setFilterOpen(false);
        }
        console.log(isFilterOpen, 'isFilterOpen')
   };

    return (
        <div className='filter-wraper'>
            <div className='wrap'>
                <div className='filter-part'>
                    <button 
                        onClick={onFilterClick}
                        className='button-in-filter-part'>
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
            <div className={isFilterOpen ? 'filter-block' : 'hidden'}>
                <div className='filter-categories colors'>
                    <span className='filter-title'>Color</span>
                    <div className='filter-items'>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color black'></span>
                                Black
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color cyan'></span>
                                Cyan
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color green'></span>
                                Green
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color grey'></span>
                                Grey
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color pink'></span>
                                Pink
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color white'></span>
                                White
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark color blue'></span>
                                Blue
                        </label>
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Size</span>
                    <div className='filter-items'>
                        <label className='container'>
                            <input type="checkbox" />
                            <span className='checkmark'></span>
                            XL
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                            L
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                            M
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                            S
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                            XS
                        </label>
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Brand</span>
                    <div className='filter-items'>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                            Ck
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                H&M
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                Kalles
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                Levi's
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                Monki
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                Nike
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                Blue
                        </label>
                    </div>
                
                </div>
                <div className='filter-categories'>
                    <span className='filter-title'>Price</span>
                    <div className='filter-items'>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $1200+
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $600-$1200
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $300-$600
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $150-$300
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $50-$150
                        </label>
                        <label className='container'>
                            <input type="checkbox"/>
                            <span className='checkmark'></span>
                                $7-$50
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Filter;