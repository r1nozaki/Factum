import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { getTopOneNews } from '../../services/NewsServices';
import BtnLink from '../UI/BtnLink';

const TopNews = () => {
  const [topNews, setTopNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTopOneNews()
      .then(data => setTopNews(data))
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-10 m-20'>
        <PropagateLoader size={20} />
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

  if (!topNews) {
    return null;
  }

  return (
    <section className='relative flex flex-col-reverse items-center w-full gap-5 my-10 lg:flex-row md:gap-8 lg:gap-10 sm:my-12 lg:my-20 xl:my-24'>
      <div className='w-full'>
        <div className='flex mb-3 md:mb-4'>
          <span className='relative text-sm px-3 py-1.5 rounded bg-red-500 text-white'>
            Trending
          </span>
        </div>
        <h1 className='w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] mb-3'>
          {topNews.title}
        </h1>
        <p className='mb-4 text-base sm:line-clamp-5 md:mb-5'>
          {topNews.description}
        </p>
        <BtnLink className='text-white bg-red-500' link={`/news/${topNews.id}`}>
          More
        </BtnLink>
      </div>
      <div className='relative w-full h-0 pb-[65%] sm:pb-[60%] lg:pb-[35%] rounded-md overflow-hidden bg-gray'>
        <img
          src={topNews.image}
          alt='Photo news'
          className='absolute top-0 left-0 object-cover object-center w-full h-full'
        />
      </div>
    </section>
  );
};

export default TopNews;
