import { Rating } from '../Rating';
import { Review } from '../Review';
import { RelatedProducts } from '../RelatedProducts'
import { useRef } from 'react';

import './styles.scss';

import leftArrow from './leftArrow.png';
import rightArrow from './rightArrow.png';
import Heart from './assets/heart.png';
import Scale from './assets/scale.png';
import refresh from './assets/refresh.png';
import mail from './assets/mail.png';
import truck from './assets/truck.png';
import annotation from './assets/annotation.png';
import safe0 from './assets/safe0.png';
import safe1 from './assets/safe1.png';
import safe2 from './assets/safe2.png';
import safe3 from './assets/safe3.png';
import safe4 from './assets/safe4.png';
import safe5 from './assets/safe5.png';
import safe6 from './assets/safe6.png';
import sizeGuide from './assets/SizeGuide.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/controller';

import { useState } from 'react';


const ProductCard = ({ productData, allProducts }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const swiperRef = useRef(null);


    const onNextControlClick = () => swiperRef.current?.swiper.slideNext();
    const onPrevControlClick = () => swiperRef.current?.swiper.slidePrev();
    const onColorClick = (index) => setColorIndex(index);

    const colorArray = productData.images.reduce((acc, curr) => {
        const colorsArray = acc.map((element) => element.color);
        if (!colorsArray.includes(curr.color)) {
            acc.push(curr);
        }
        return acc;
    }, []);


    return (
        <div>
            <div className='product-card-wraper'>
                <div className='left-section'>
                    <div className='all-img'>
                        <div className='switch-block'>
                            <img onClick={onPrevControlClick} className='up-arrow' src={leftArrow} alt='product' />
                            <img onClick={onNextControlClick} className='down-arrow' src={rightArrow} alt='product' /> 
                        </div>

                        {
                            productData.images.map((element, index) => (
                                <img 
                                    key={element.id}
                                    className={`image ${currentItemIndex === index ? '' : 'disable'}`}  
                                    src={`https://training.cleverland.by/shop${productData.images[index]?.url}`}
                                    alt='product' 
                                />
                            )) 
                        }
                    </div>
                    <div className='big-photo'>
                        <Swiper 
                            ref={swiperRef}
                            navigation={true} 
                            modules={[Controller, Navigation]} 
                            className='mySwiper'
                            onSlideChange={(event) => setCurrentItemIndex(event.realIndex)}
                            data-test-id="product-slider"
                        >
                            {
                                productData.images.map((element, index) => (
                                    <SwiperSlide>
                                        <img 
                                            key={element.id}
                                            className='big-image' 
                                            src={`https://training.cleverland.by/shop${productData.images[index]?.url}`}
                                            alt='product' 
                                         />
                                    </SwiperSlide>
                                )) 
                            }  
                        </Swiper>                
                    </div>
                </div>
                <div className='right-section'>
                    <div className='color-block'>
                        <div className='title'>
                            <span className='key'>Color:</span>
                                
                                        <span 
                                            className='value' 
                                            alt='product' 
                                        >
                                            {colorArray[colorIndex].color} 
                                        </span>
                                 
                        </div>
                        <div className='all-colors'>
                            {
                                colorArray.map((element, index) => (
                                    <img 
                                        onClick={() => onColorClick(index)}
                                        key={element.id}
                                        className={element.color}  
                                        src={`https://training.cleverland.by/shop${element?.url}`}
                                        alt='product' 
                                    />
                                )) 
                            }
                        </div>
                    </div>
                    <div className='size-block'>
                        <div className='title'>
                            <span className='key'>Size:</span>
                            <span className='value'>S</span>
                        </div>
                        <div className='size-buttons'>
                            <button className='button'>XS</button>
                            <button className='button'>S</button>
                            <button className='button'>M</button>
                            <button className='button'>L</button>
                        </div>
                        <img className='sizeGuide' src={sizeGuide} alt='sizeGuide' />
                    </div>
                    <div className='purchase-block'>
                        <span className="price">
                            $379.99
                        </span>
                        <button className="add-to-card-button">
                            Add to card
                        </button>
                        <img className="icon" src={Heart} alt="heart icon" />
                        <img className="icon" src={Scale} alt="scale icon" />
                    </div>
                    <div className='info-block'>
                        <div className='info-block-part'>
                            <img className='info-icon' src={truck} alt='truck' />
                            <span className='info-content'>Shipping & Delivery</span>
                        </div>
                        <div className='info-block-part'>
                            <img className='info-icon' src={refresh} alt='refresh' />
                            <span className='info-content'>Returns & Exchanges</span>
                        </div>
                        <div className='info-block-part'>
                            <img className='info-icon' src={mail} alt='mail' />
                            <span className='info-content'>Ask a question</span>
                        </div>
                    </div>
                    <div className='safe-block'>
                        <img className='sage-img' src={safe0} alt='safe' />
                        <img className='sage-img' src={safe1} alt='safe' />
                        <img className='sage-img' src={safe2} alt='safe' />
                        <img className='sage-img' src={safe3} alt='safe' />
                        <img className='sage-img' src={safe4} alt='safe' />
                        <img className='sage-img' src={safe5} alt='safe' />
                        <img className='sage-img' src={safe6} alt='safe' />
                        <span className='safe-block-span'>guaranteed safe checkout</span>
                    </div>
                    <div className='description-block'>
                        <span className='description-block-span'>description</span>
                    </div>
                    <div className='additional-info-block'>
                        <div className="title">ADDITIONAL INFORMATION</div>
                        <div className="info-container">
                            Color:{' '}
                            <span className="info">
                                Blue, White, Black, Grey
                            </span>
                        </div>
                        <div className="info-container">
                            Size:{' '}
                            <span className="info">
                                XS, S, M, L
                            </span>
                        </div>
                        <div className="info-container">
                            Material:{' '}
                            <span className="info">
                                100% Polyester
                            </span>
                        </div>
                    </div>
                    <div className="reviews-block">
                        <div className="title">REVIEWS</div>
                        <div className='reviews-info'>
                            <div className='block'>
                                <Rating activeStars={5} size={22} />
                                <div className='reviews-content'>2 Reviews</div>
                            </div>
                            <div className='block'>
                                <img className='annotation-icon' src={annotation} alt='annotation-icon' />
                                <div className='reviews-content'>Write a review</div>
                            </div>
                        </div>
                        <Review name='Oleh Chabanov' content='On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment' />
                        <Review name='ShAmAn design' content='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'/>
                        
                    </div>     
                </div>
            </div>
            <RelatedProducts meta={productData} allProducts={allProducts} />
        </div>
        
    )
};

export default ProductCard; 