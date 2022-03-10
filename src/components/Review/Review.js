import './styles.scss';
import { Rating } from '../Rating';

const Review = ( {
    name='Ivan Ivanov',
    time='3 months ago',
    content='good',
    activeStars
}) => {
    return (
        <div className='review-container'>
            <div className='reviewer-info'>
                <div className='name'>{name}</div>
                <div className='more-info'>
                    <div className='time'>{time}</div>
                    <Rating size={14} activeStars={activeStars} />
                </div>
            </div>
            <div className='content'>{content}</div>
        </div>
    )
};

export default Review;