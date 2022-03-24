import { useRef } from 'react';

import './styles.scss';

import { Card } from '../ItemsBlock/Card';

import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';

import { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useDispatch, useSelector} from 'react-redux'

import 'swiper/css';
import 'swiper/css/controller';


const RelatedProducts = ({ allProducts }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const products = useSelector(store => store.productsSlice.products);
    console.log('products', products )

    

    return (
        <div className='products-wraper'>
            <div className='top-part'>
                <span className='title'>RELATED PRODUCTS</span>
                <div className='switch-block'>
                    <img ref={navigationPrevRef} className='left-arrow' src={leftArrow} alt='product' />
                    <img ref={navigationNextRef} className='right-arrow' src={rightArrow} alt='product' /> 
                </div>
            </div>
            <Swiper
                data-test-id="related-slider"
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
               }}
                // install Swiper modules
                modules={[Controller, Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    1160: { slidesPerView: 4, spaceBetween: 30 },
                    950: { slidesPerView: 3, spaceBetween: 20 },
                    640: { slidesPerView: 2 },
                    320: { slidesPerView: 1 },
                }}
                >

                    <div className='card-block'>
                        {
                            allProducts.map((element, index) => (
                                <SwiperSlide key={`${element.id}_${index}`}>
                                    <Card 
                                        itemId={element.id}  
                                        data={element} 
                                        data-test-id="clothes-card-women" 
                                        type="women" 
                                    />
                                </SwiperSlide>
                            ))                          
                        }
                    </div>
            </Swiper>
                  
            
            
        </div>
    )
};

export default RelatedProducts;