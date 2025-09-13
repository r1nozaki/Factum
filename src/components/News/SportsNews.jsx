import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../../services/NewsServices';
import NewsCard from '../NewsCard/NewsCard';
import CategoryList from '../Category/CategoryList';
import AboutBanner from '../About/AboutBanner';
import { PropagateLoader } from 'react-spinners';

const SportsNews = () => {
  const [sportsNews, setSportsNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getNewsByCategory('sports')
      .then(data => {
        setSportsNews(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <div className='flex justify-center items-center'>
        <p>Something went wrong. Try again later.</p>
      </div>
    );
  }

  if (!sportsNews) {
    return null;
  }

  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-10'>
          <PropagateLoader className='text-black' />
        </div>
      ) : (
        <>
          <section className='relative w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-8 sm:mt-0'>
            <div className='w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10'>
              <h1 className='w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] '>
                Sports News
              </h1>
            </div>
            <div className='lg:flex lg:items-start lg:justify-between w-full'>
              <div className='relative w-full lg:w-[67%] xl:w-[70%] mb-10 sm:mb-12 lg:mb-0'>
                <div className='grid sm:grid-cols-2 gap-5 lg:gap-6 w-full mb-8 md:mb-10 lg:mb-12'>
                  {sportsNews.map(news => (
                    <NewsCard
                      key={news.id}
                      src={news.image || 'News preview'}
                      publishedDate={
                        news.publishedAt
                          ? news.publishedAt.slice(0, 10)
                          : 'Unknown date'
                      }
                      description={news.description || 'No description'}
                      title={news.title || ''}
                      link={'/sports'}
                    />
                  ))}
                </div>
              </div>
              <div className='sm:sticky sm:top-24 lg:top-28 w-full lg:w-[30%] xl:w-[25%]'>
                <h3 className='w-full font-semibold text-2xl mb-6 '>
                  Explore by Categories
                </h3>
                <CategoryList />
              </div>
            </div>
          </section>
          <AboutBanner />
        </>
      )}
    </>
  );
};

export default SportsNews;
