import { useNavigate } from 'react-router-dom'; //хук
import './styles.scss';
import { Rating } from '../../Rating';

const Card = ({ data, type, itemId }) => {
    const navigateFunc = useNavigate();
    const onCardClick = () => {
        navigateFunc(`/product/${type}/${itemId}`, { state: data }); 
        // по клику открывается страница карточки и переносятся данные с метадата
    }; 

    const isDiscount = data.discount;

    return (
        <div 
            className='card-wraper'
            onClick={onCardClick}
            data-test-id={`clothes-card-${type}`}
        >
            <img src={`https://training.cleverland.by/shop${data.images[0]?.url}`} alt='jeens'/>
            <span className='name'>{data.name}</span>
            <div className='info'>
                <span className='price'>$ {data.price}</span>
                <div className='rating'>
                    <Rating activeStars={data.rating} size={14} />
                </div>
                {
                    isDiscount && (
                        <div className='discount-block'>
                            <span className='discount'>{isDiscount}</span>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}

export default Card;