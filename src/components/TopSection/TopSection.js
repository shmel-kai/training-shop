import './styles.scss';
import Rectangle from './img/Rectangle.jpeg';
import Rectangle1 from './img/Rectangle1.jpeg';
import Rectangle2 from './img/Rectangle2.jpeg';
import Rectangle3 from './img/Rectangle3.jpeg';
import Right from './img/right.png';
import Left from './img/left.png';

const TopSection = () => {
    return (
        <div className="section-wraper">
            <div className="left-block">
                <img src={Rectangle} className="" alt="slider" />
                <div className='slider'>
                    <div className='banner'>
                        <span className='title'>Banner</span>
                        <span className='banners-text'>your Title text</span>
                    </div>
                    <button className="left-arrows" >
                        <img src={Left} alt="left" />
                    </button>
                    <button  className="right-arrows">
                        <img src={Right} alt="right" />
                    </button>
                </div>
                
            </div>
            <div className="right-block">
                <div className="clowse-section">
                    <div className="clowse">
                        <img src={Rectangle1} className="image" alt="woomen" />
                        <div className="woomen-banner label">
                            <span className="span">Woomen</span>
                        </div>
                    </div>
                    <div className="clowse">
                        <img src={Rectangle2} className="image" alt="men" />
                        <div className="men-banner label">
                            <span className="span">Men</span>
                        </div>
                    </div>
                </div>
                <div className="accessories">
                    <img src={Rectangle3} className="image" alt="accessories" />
                    <div className="accessories-banner label">
                        <span>Accessories</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopSection;