import './styles.scss';
import Close from './close.png';
import Slash from './slash.png';
import Trash from './trash.png';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrders } from '../../redux/action';
import { useEffect } from 'react';

import { changeQuantity } from '../../redux/action';
import { toggleCart } from '../../redux/action';

const ShoppingCart = () => { 

    const dispatch = useDispatch();
    const orders = useSelector(store => store.orders);
    const isCartOpen = useSelector(store => store.isCartOpen);
    const onCartClick = () => {
        dispatch(toggleCart())
    }
    const decreaseQuantity = (id) => {
         dispatch(changeQuantity(id, false))
    }

    const increaseQuantity = (id) => {
        dispatch(changeQuantity(id, true))
    }
    
    const clearOrder = (id) => {
        dispatch(clearOrders(id))
    }

    const totalPrice = orders.reduce((acc, element) => {
        acc += element.price * element.quantity
        return acc;
    }, 0) ;

    useEffect(() => {
        const body = document.querySelector('body');
        if (isCartOpen) {
            body.style.overflow = 'hidden';
        } else {
         body.style.overflow = 'auto';
        }
    }, [isCartOpen])

    return isCartOpen && (
        <div className={`${isCartOpen ? 'cart-block-wraper' : 'disabled'}`}>
            <div onClick={onCartClick} className={`${isCartOpen ? 'blur-window' : 'disabled'}`}>
            </div>
            <div className='shoppingCart-wraper'>
                <div className='shoppingCart-header'>
                    <div className='title'>
                        Shopping Cart
                    </div>
                    <button onClick={onCartClick} className='close-block'>
                        <img className='' src={Close} alt='close-item' />
                    </button>
                </div>
                
                {
                    orders.length > 0 ? (
                        <div className='shoppingCart-content-wraper'>
                            <div className='top-wraper'>
                                <div className='shoppingCart-content'>
                                    <div className='shoppingCart-menu ty'>
                                        <span>Item in Cart</span>
                                        <img className='slash' src={Slash} alt="slash" />
                                        <span>Delivery Info</span>
                                        <img className='slash' src={Slash} alt="slash" />
                                        <span>Payment</span>
                                    </div>
                                </div>
                                <div className='list-of-cart-item'>
                                    {
                                        orders.map((element, index) => (
                                            <div data-test-id='cart-card' className='cart-item' key={`elem${index}`}>
                                                <img className='img' src={`https://training.cleverland.by/shop${element?.meta.url}`} alt='Img' />
                                                <div className="cart-content">
                                                    <div className='name'>{element.name}</div>
                                                    <div className='info'>{element.meta.color}, {element.size}</div>
                                                    <div className='price-count-info'>
                                                        <div>
                                                            <div className='counter'>
                                                                <button data-test-id='minus-product' onClick={() => decreaseQuantity(element.customId)} className='minus'>-</button>
                                                                <div className='count'>{element.quantity}</div>
                                                                <button data-test-id='plus-product' onClick={() => increaseQuantity(element.customId)} className='plus'>+</button>
                                                            </div>
                                                            <div className='item-price'>
                                                                {(element.price * element.quantity).toFixed(2)}
                                                            </div>
                                                        </div>
                                                        <div data-test-id='remove-product' onClick={() => clearOrder(element.customId)}>
                                                            <img className='trash' src={Trash} alt='Trash' />
                                                        </div>   
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                                
                            </div>
                            <div className='bottom-wraper'>
                                <div className='total-price-block'>
                                    <span className='title'>Total</span>
                                    <span className='price'>{totalPrice.toFixed(2)}</span>
                                </div>
                                <button className='check-out'>Check Out</button>
                                <button onClick={onCartClick} className='view-cart'>View Cart</button>
                            </div>
                        </div>
                    ) : (
                        <div className='empty-cart'>
                            <div className='text'>
                                Sorry,<br/>
                                your cart<br/> 
                                is empty
                            </div>
                            <button onClick={onCartClick} className='back-to-shopping-button'>back to shopping</button>
                        </div>
                    )
                }
            </div>
        </div>
    )

};

export default ShoppingCart;