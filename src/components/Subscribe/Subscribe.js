import './styles.scss';
import Daco from './Daco.png';
import Jhon from './Jhon.png';

const Subscribe = () => {
    return (
        <div className='subscribe-wraper'>
            <div className='block'>
                <p className='title'>Special Offer</p>
                <p className='info'>Subscribe<br /> And 
                    <span className='color-info'> Get 10% Off</span>
                </p>
                <input type="email" placeholder={'Enter your email'} className='input-email'></input>
                <button className='button'>Subscribe</button>
            </div>
            <img src={Daco} className='wooman pic' alt='Woomen' />
            <img src={Jhon} className='man pic' alt='Man' />
        </div>
    );
};

export default Subscribe;