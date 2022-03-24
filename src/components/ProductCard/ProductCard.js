import { useState } from 'react';
import { Rating } from '../Rating';
import { Review } from '../Review';
import { RelatedProducts } from '../RelatedProducts'
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'


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

import { addOrder } from '../../redux/action';
import { changeQuantity } from '../../redux/action';

const ProductCard = ({ productData, allProducts }) => {
    //const products = useSelector(store => store.productsSlice.products);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [sizeIndex, setSizeIndex] = useState(0);
    const swiperRef = useRef(null);
    const swiperRefSecond = useRef(null);

    const orders = useSelector(store => store.cart.orders);
    const dispatch = useDispatch();

    const addToCardClick = () => {
        const id = `${productData.id}-${productData.sizes[sizeIndex]}-${productData.images[colorIndex].id}`
        const isOrderWithIdExist = orders.some(elem => elem.customId === id)
        
        if (isOrderWithIdExist){
            dispatch(changeQuantity(id, false))
        } else {
            dispatch(addOrder({
                size: productData.sizes[sizeIndex],
                meta: productData.images[colorIndex],
                name: productData.name,
                price: productData.price,
                customId: id,
                quantity: 1
            }));
        } 
    }

    console.log('orders', orders);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const navigationPrevRefSecond = useRef(null);
    const navigationNextRefSecond = useRef(null);

    const onNextArrowClick = () => swiperRefSecond.current?.swiper.slideNext();
    const onPrevArrowClick = () => swiperRefSecond.current?.swiper.slidePrev();
    const onNextControlClick = () => swiperRef.current?.swiper.slideNext();
    const onPrevControlClick = () => swiperRef.current?.swiper.slidePrev();
    const onColorClick = (index) => setColorIndex(index);
    const onSizeClick = (index) => setSizeIndex(index);

    useEffect(() => {
        setCurrentItemIndex(0);
        setColorIndex(0);
        setSizeIndex(0);
        window.scrollTo(0, 0);
    }, [productData.id]);
    

    const colorArray = productData.images.reduce((acc, curr) => {
        const colorsArray = acc.map((element) => element.color);
        if (!colorsArray.includes(curr.color)) {
            acc.push(curr);
        }
        return acc;
    }, []);

    const colorInfo = colorArray.map((elem, index) =>  elem.color);


    const sizeArray = [...productData.sizes];

    return (
        <div>
            <div className='product-card-wraper'>
                <div className='left-section'>
                    <div className='all-img'>
                        <div className='switch-block'>
                            <img 
                                ref={navigationPrevRef} 
                                onClick={onPrevControlClick} 
                                className='up-arrow' 
                                src={leftArrow} 
                                alt='product' 
                            />
                            <img 
                                ref={navigationNextRef} 
                                onClick={onNextControlClick} 
                                className='down-arrow' 
                                src={rightArrow} 
                                alt='product' 
                            /> 
                        </div>
                        <Swiper
                            ref={swiperRefSecond}
                            onSlideChange={(event) => setCurrentItemIndex(event.realIndex)}
                            className='left-swiper'
                            direction={'vertical'}
                            data-test-id="related-slider"
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.params.navigation.prevEl = navigationPrevRefSecond.current;
                                swiper.params.navigation.nextEl = navigationNextRefSecond.current;
                            }}
                            modules={[Controller, Navigation]}
                            spaceBetween={0}
                            slidesPerView={4}
                            breakpoints={{
                                1160: { slidesPerView: 3, spaceBetween: 30 },
                                950: { slidesPerView: 3, spaceBetween: 20 },
                                640: { slidesPerView: 2 },
                                320: { slidesPerView: 1 },
                            }}
                        >
                            {
                                productData.images.map((element, index) => (
                                    <SwiperSlide key={`${element.id}_${index}`}>
                                        <img 
                                            key={element.id}
                                            className={`image ${currentItemIndex === index ? '' : 'disable'}`}  
                                            src={`https://training.cleverland.by/shop${productData.images[index]?.url}`}
                                            alt='product' 
                                        />
                                    </SwiperSlide>
                                )) 
                            }
                        </Swiper>
                        
                    </div>
                    <div className='big-photo'>
                        <Swiper  
                            ref={swiperRef}
                            navigation={{
                                prevEl: navigationPrevRefSecond.current,
                                nextEl: navigationNextRefSecond.current,
                            }} 
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.params.navigation.prevEl = navigationPrevRefSecond.current;
                                swiper.params.navigation.nextEl = navigationNextRefSecond.current;
                            }}
                            modules={[Controller, Navigation]} 
                            className='mySwiper'
                            onSlideChange={(event) => setCurrentItemIndex(event.realIndex)}
                            data-test-id="product-slider"
                        >
                            <img 
                                ref={navigationPrevRefSecond} 
                                onClick={onPrevArrowClick} 
                                className='swiper-button-prev' 
                                src={leftArrow} 
                                alt='product' 
                            />
                            <img 
                                ref={navigationNextRefSecond} 
                                onClick={onNextArrowClick} 
                                className='swiper-button-next' 
                                src={rightArrow} 
                                alt='product' 
                            /> 
                            {
                                productData.images.map((element, index) => (
                                    <SwiperSlide key={element.id}>
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
                                            {colorArray[colorIndex]?.color} 
                                        </span>
                                 
                        </div>
                        <div className='all-colors'>
                            {
                                colorArray.map((element, index) => (
                                    <img 
                                        onClick={() => onColorClick(index)}
                                        key={element.id}
                                        className={`${colorIndex===index ? 'chosen-color' : ''}`}  
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
                            <span className='value'>{sizeArray[sizeIndex]}</span>
                        </div>
                        <div className='size-buttons'>
                            {
                                sizeArray.map((element, index) => (
                                    <button
                                        onClick={() => onSizeClick(index)}
                                        key={element}
                                        className={sizeIndex === index ? 'button chosen-size' : 'button'} 
                                    >
                                        {element}
                                    </button>
                                )) 
                            }
                        </div>
                        <img className='sizeGuide' src={sizeGuide} alt='sizeGuide' />
                    </div>
                    <div className='purchase-block'>
                        <span className="price">
                            $ {productData.price} 
                        </span>
                        <button data-test-id='add-cart-button' className="add-to-card-button" onClick={addToCardClick}>
                            {orders.some(elem => elem.customId === `${productData.id}-${productData.sizes[sizeIndex]}-${productData.images[colorIndex].id}`) ? 'remove to card' : 'Add to card'}
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
                                {
                                    colorInfo.map((elem, index) => {
                                        if (index !== colorInfo.length - 1) {
                                            return <span key={'info' + index}>
                                                {elem}{', '}
                                             </span>
                                        } else {
                                            return <span key={'info' + index}>
                                                {elem}
                                             </span>
                                        }
                                        
                                    })
                                }    
                            </span>
                        </div>
                        <div className="info-container">
                            Size:{' '}
                            <span className="info">
                                {
                                    sizeArray.map((elem, index) => {
                                        if (index !== sizeArray.length - 1) {
                                            return <span key={'info' + index}>
                                                {elem}{', '}
                                             </span>
                                        } else {
                                            return <span key={'info' + index}>
                                                {elem}
                                             </span>
                                        }
                                        
                                    })
                                }
                            </span>
                        </div>
                        <div className="info-container">
                            Material:{' '}
                            <span className="info">
                                {productData.material}
                            </span>
                        </div>
                    </div>
                    <div className="reviews-block">
                        <div className="title">REVIEWS</div>
                        <div className='reviews-info'>
                            <div className='block'>
                                <Rating activeStars={productData.rating} size={22} />
                                <div className='reviews-content'>2 Reviews</div>
                            </div>
                            <div className='block'>
                                <img className='annotation-icon' src={annotation} alt='annotation-icon' />
                                <div className='reviews-content'>Write a review</div>
                            </div>
                        </div>
                                {
                                    productData.reviews.map((element,index) => {
                                        return <Review 
                                            key={'review' + index}
                                            name={element.name} 
                                            content={element.text} 
                                            activeStars={element.rating}
                                        />
  
                                    })
                                }
                    </div>     
                </div>
            </div>
            <RelatedProducts meta={productData} allProducts={allProducts} />
        </div>
        
    )
};

export default ProductCard; 