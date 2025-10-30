import { useState, useEffect } from 'react';
import { getNewsByCategory } from '../../services/NewsServices';
import usePagination from '../../hooks/usePagination';
import NewsCard from '../NewsCard/NewsCard';
import Pagination from '../UI/Pagination';
import CategoryList from '../Category/CategoryList';
import AboutBanner from '../About/AboutBanner';
import { PropagateLoader } from 'react-spinners';

const SportsNews = () => {
  const [sportsNews, setSportsNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { page, totalPages, nextPage, prevPage, setPage } = usePagination({
    totalCount: 20,
    limit: 10,
  });

  useEffect(() => {
    setLoading(true);

    getNewsByCategory('sports', 10, page)
      .then(data => {
        setSportsNews(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [page]);

  if (error) {
    return (
      <div className='flex items-center justify-center mt-10 text-xl'>
        <p>Something went wrong. Try again later.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center h-10'>
        <PropagateLoader className='text-black' />
      </div>
    );
  }

  if (!sportsNews) {
    return null;
  }

  return (
    <>
      <section className='relative w-full mt-8 mb-10 sm:mb-12 lg:mb-20 xl:mb-24 sm:mt-0'>
        <div className='w-full pb-2 mb-6 border-b-2 border-black sm:pb-3 md:pb-4 lg:pb-5 sm:mb-8 lg:mb-10'>
          <h1 className='w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] mt-10'>
            Sports News
          </h1>
        </div>
        <div className='w-full lg:flex lg:items-start lg:justify-between'>
          <div className='relative w-full lg:w-[67%] xl:w-[70%] mb-10 sm:mb-12 lg:mb-0'>
            <div className='grid w-full gap-5 mb-8 sm:grid-cols-2 lg:gap-6 md:mb-10 lg:mb-12'>
              {sportsNews.map(news => (
                <NewsCard
                  key={news.title}
                  src={news.image || 'News preview'}
                  publishedDate={
                    news.published_at
                      ? news.published_at.slice(0, 10)
                      : 'Unknown date'
                  }
                  description={news.description || 'No description'}
                  title={news.title || ''}
                />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </div>
          <div className='sm:sticky sm:top-24 lg:top-28 w-full lg:w-[30%] xl:w-[25%]'>
            <h3 className='w-full mb-6 text-2xl font-semibold'>
              Explore by Categories
            </h3>
            <CategoryList />
          </div>
        </div>
      </section>
      <AboutBanner />
    </>
  );
};

export default SportsNews;
