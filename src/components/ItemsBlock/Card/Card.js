import { useNavigate } from 'react-router-dom'; //хук
import './styles.scss';
import Astra from './Asta.png';
import AstraY from './AstraY.png';

const Card = ({ data }) => {
    const navigateFunc = useNavigate();
    const onCardClick = () => {
        navigateFunc('/product', { state: data }); 
        // по клику открывается страница карточки и переносятся данные с метадата
    }; 

    return (
        <div 
            className='card-wraper'
            onClick={onCardClick}
        >
            <img src={data.img} alt='jeens'/>
            <span className='name'>{data.name}</span>
            <div className='info'>
                <span className='price'>{data.price}</span>
                <div className='rating'>
                    <img src={AstraY} alt='r'/>
                    <img src={AstraY} alt='r'/>
                    <img src={AstraY} alt='r'/>
                    <img src={AstraY} alt='r'/>
                    <img src={Astra} alt='r'/>
                </div>
            </div>
        </div>
        
    )
}

export default Card;