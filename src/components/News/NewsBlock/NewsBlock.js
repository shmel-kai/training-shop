import './styles.scss';

const NewsBlock = ({data}) => {
    return (
        <div className='block-wraper'>
            <img src={data.img} alt='News Image' className='picter' />
            <div className='baner'>
                <p className='title'>{data.title}</p>
                <p className='info'>{data.info}</p>
            </div>
        </div>
    );
};

export default NewsBlock;