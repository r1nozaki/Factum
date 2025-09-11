import { Link } from 'react-router';
import BtnDate from '../UI/BtnDate';

const NewsCardContent = ({ publishedDate, snippet, link }) => {
  return (
    <div className='w-full'>
      <div className='w-full mb-4 sm:mb-5'>
        <BtnDate>{publishedDate}</BtnDate>
        <p className='font-medium sm:line-clamp-2 text-base'>
          <Link to={link} className='block-link group-hover:underline'>
            {snippet}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewsCardContent;
