import NewsCardContent from './NewsCardContent';
import NewsCardImage from './NewsCardImage';

const NewsCard = ({ src, publishedDate, description, title }) => {
  return (
    <div className='relative block w-full group hover:cursor-pointer'>
      <NewsCardImage src={src} alt={title} />
      <NewsCardContent
        publishedDate={publishedDate}
        description={description}
        title={title}
      />
    </div>
  );
};

export default NewsCard;
