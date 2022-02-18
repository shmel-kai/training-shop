import './styles.scss';
import Truck from './img/truck.png';
import Refresh from './img/refresh.png';
import Support from './img/support.png';
const Details = () => {
    return (
        <div className='container-wraper'>
            <div className='container'>
                <div className='container-part'>
                    <img src={Truck} className="img-details" alt="Truck" />
                    <div className='span-container'>
                        <span className='tittle'>FREE SHIPPING</span>
                        <span className='description'>On all UA order or order above $100</span>
                    </div>
                </div>
                <div className='container-part'>
                    <img src={Refresh} className="img-details" alt="Refresh" />
                    <div className='span-container'>
                        <span className='tittle'>30 DAYS RETURN</span>
                        <span className='description'>Simply return it within 30 days for an exchange</span>
                    </div>
                </div>
                <div className='container-part'>
                    <img src={Support} className="img-details" alt="Support" />
                    <div className='span-container'>
                        <span className='tittle'>SUPPORT 24/7</span>
                        <span className='description'>Contact us 24 hours a day, 7 days a week</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
        

}

export default Details;