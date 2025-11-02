import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../../services/NewsServices';
import BtnLink from '../UI/BtnLink';
import NewsCard from '../NewsCard/NewsCard';
import { PropagateLoader } from 'react-spinners';

const SportsSection = () => {
  const [newsCategory, setNewsCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);

    getNewsByCategory('sport', 8)
      .then(data => setNewsCategory(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-10 m-20'>
        <PropagateLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center'>
        <p>Something went wrong. Try again later.</p>
      </div>
    );
  }

  if (!newsCategory) {
    return null;
  }

  return (
    <section className='relative w-full mb-12 lg:mb-20 xl:mb-28'>
      <div className='flex items-center justify-between w-full pb-2 mb-4 border-b-2 border-black sm:pb-3 sm:mb-5 lg:mb-6'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          Sports
        </h2>
        <BtnLink className='text-white bg-black' link={'/sports'}>
          Go to Sports
        </BtnLink>
      </div>

      <div className='grid w-full gap-6 sm:gap-4 xl:gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {newsCategory.map(newsCard => (
          <NewsCard
            key={newsCard.title}
            src={newsCard.image || 'News preview'}
            publishedDate={
              newsCard.published_at
                ? newsCard.published_at.slice(0, 10)
                : 'Unknown date'
            }
            description={newsCard.description || 'No description'}
            title={newsCard.title || ''}
            link={'/sports'}
          />
        ))}
      </div>
    </section>
  );
};

export default SportsSection;
