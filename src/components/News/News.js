import './styles.scss';
import { NewsBlock } from './NewsBlock/index';

const News = ({ sections }) => {
    return (
        <div className='wraper'>
            <div className='top-part'>
                <p className='title'>LATEST FROM BLOG</p>
                <button className='button'>SEE ALL</button>
            </div>
            <div className='news'>
                {
                    sections.map(section => <NewsBlock key={section.id} data={section} />)
                }
            </div>

        </div>
    );
};

export default News;

