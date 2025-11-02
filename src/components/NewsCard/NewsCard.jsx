import NewsCardContent from './NewsCardContent';
import NewsCardImage from './NewsCardImage';

const NewsCard = ({ src, publishedDate, description, id, title }) => {
  return (
    <div className='relative block w-full group hover:cursor-pointer'>
      <NewsCardImage src={src} alt={title} id={id} />
      <NewsCardContent
        publishedDate={publishedDate}
        description={description}
        id={id}
        title={title}
      />
    </div>
  );
};

export default NewsCard;
