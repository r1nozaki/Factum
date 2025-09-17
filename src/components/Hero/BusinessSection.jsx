import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../../services/NewsServices';
import BtnLink from '../UI/BtnLink';
import NewsCard from '../NewsCard/NewsCard';
import { PropagateLoader } from 'react-spinners';

const BusinessSection = () => {
  const [newsCategory, setNewsCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);

    getNewsByCategory('business', 8)
      .then(data => setNewsCategory(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-10 m-20'>
        <PropagateLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center'>
        <p>Something went wrong. Try again later.</p>
      </div>
    );
  }

  if (!newsCategory) {
    return null;
  }

  return (
    <section className='relative w-full mb-12 lg:mb-20 xl:mb-28'>
      <div className='flex items-center justify-between w-full pb-2 sm:pb-3 border-b-2 border-black mb-4 sm:mb-5 lg:mb-6'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          Business
        </h2>
        <BtnLink className='bg-black text-white' link={'/sports'}>
          Go to Business
        </BtnLink>
      </div>

      <div className='grid gap-6  sm:gap-4 xl:gap-5 w-full sm:grid-cols-2 lg:grid-cols-4'>
        {newsCategory.map(newsCard => (
          <NewsCard
            key={newsCard.id}
            src={newsCard.image || 'News preview'}
            publishedDate={
              newsCard.publishedAt
                ? newsCard.publishedAt.slice(0, 10)
                : 'Unknown date'
            }
            description={newsCard.description || 'No description'}
            title={newsCard.title || ''}
            link={'/business'}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
