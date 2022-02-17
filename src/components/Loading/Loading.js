import './styles.scss';
import loadImg from './loadImg.png';

const Loading = () => {
    return (
        <div className='load-block'>
            <img src={loadImg} alt='Loading' className='load-image' />
        </div>
    )
};

export default Loading;