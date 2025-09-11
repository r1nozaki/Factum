import NewsCardContent from './NewsCardContent';
import NewsCardImage from './NewsCardImage';

const NewsCard = ({ src, publishedDate, description, title, link }) => {
  return (
    <div className='relative group w-full block hover:cursor-pointer'>
      <NewsCardImage src={src} alt={title} />
      <NewsCardContent
        publishedDate={publishedDate}
        description={description}
        link={link}
      />
    </div>
  );
};

export default NewsCard;
