import './styles.scss';
import Left from "./Left.jpeg";
import Right from "./Right.jpeg";

const Collection = () => {
    return (
        <div className='collection-wraper'>
            <div className='block left'>
                <img src={Left} className="img" alt="banner" />
                <div className='banner'>
                    <span className='title'>New Season</span>
                    <span className='description'>lookbook collection</span>
                </div>
            </div>
            <div className='block right'>
                <img src={Right} className="img" alt="banner" />
                <div className='banner'>
                    <span className='title'>Sale</span>
                    <span className='description'>Get UP to 50% off</span>
                </div>
            </div>
        </div>
    )
}
export default Collection;