import { Link } from 'react-router';
import BtnDate from '../UI/BtnDate';

const NewsCardContent = ({ publishedDate, description, id }) => {
  return (
    <div className='w-full'>
      <div className='w-full mb-4 sm:mb-5'>
        <BtnDate link={`/news/date/${publishedDate}`}>{publishedDate}</BtnDate>
        <p className='text-base font-medium line-clamp-2'>
          <Link to={`/news/${id}`} className='block-link group-hover:underline'>
            {description}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsCardContent;
