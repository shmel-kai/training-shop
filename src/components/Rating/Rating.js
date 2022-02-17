import './styles.scss';

import ActiveStar from '../../assets/icons/star-active.png'
import UnActiveStar from '../../assets/icons/star.png'

const Rating = ({ 
    size = 14,
    stars = 5,
    activeStars = 5,
}) => {
    return (
        <div className='stars-container'>
            {
                new Array(stars)
                .fill(1)
                .map((_, index) => `key_${index}`) // item ['key_0', 'key_1', ...]
                .map((item, index) => (
                    <img 
                        key={item}
                        style={{ width: size, height: size }}
                        className="star" 
                        src={index <= activeStars - 1 ? ActiveStar : UnActiveStar} 
                        alt="star icon" 
                    />
                ))
            }
        </div>
    );
};

export default Rating;

