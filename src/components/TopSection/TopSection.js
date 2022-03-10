import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './styles.scss';

import Rectangle from './img/Rectangle.jpeg';
import Rectangle1 from './img/Rectangle1.jpeg';
import Rectangle2 from './img/Rectangle2.jpeg';
import Rectangle3 from './img/Rectangle3.jpeg';

const TopSection = () => {
    const navigateFunc = useNavigate();
    const onMenClick = (event) => {
        event.preventDefault();
        navigateFunc('/men');
        window.scrollTo(0, 0);
    };
    const onWomenClick = (event) => {
        event.preventDefault();
        navigateFunc('/women');
        window.scrollTo(0, 0);
    };

    return (
        <div className="section-wraper">
            <div className="left-block">
                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className='mySwiper'
                    data-test-id="main-slider"
                    >
                    <SwiperSlide>
                        <img  className='big-image' src={Rectangle} alt="slider" />
                        <div className='slider'>
                            <div className='banner'>
                                <span className='title'>Banner</span>
                                <span className='banners-text'>your Title text</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  className='big-image' src={Rectangle} alt="slider" />
                        <div className='slider'>
                            <div className='banner'>
                                <span className='title'>Banner</span>
                                <span className='banners-text'>your Title text</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  className='big-image' src={Rectangle} alt="slider" />
                        <div className='slider'>
                            <div className='banner'>
                                <span className='title'>Banner</span>
                                <span className='banners-text'>your Title text</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                
            </div>
            <div className="right-block">
                <div className="clowse-section">
                    <div className="clowse" onClick={onWomenClick}>
                        <img src={Rectangle1} className="image" alt="woomen" />
                        <div className="woomen-banner label">
                            <span className="span">Woomen</span>
                        </div>
                    </div>
                    <div className="clowse" onClick={onMenClick}>
                        <img src={Rectangle2} className="image" alt="men" />
                        <div className="men-banner label">
                            <span className="span">Men</span>
                        </div>
                    </div>
                </div>
                <div className="accessories">
                    <img src={Rectangle3} className="accessories-image" alt="accessories" />
                    <div className="accessories-banner label">
                        <span>Accessories</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopSection;