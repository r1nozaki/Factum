import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getNewsById } from '../../services/NewsServices';
import BtnDate from '../UI/BtnDate';
import { PropagateLoader } from 'react-spinners';

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getNewsById(id)
      .then(data => {
        if (data) {
          setNews(data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-10'>
        <PropagateLoader className='text-black' />
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className='flex items-center justify-center mt-10 text-xl'>
        <p>News not found or something went wrong.</p>
      </div>
    );
  }

  return (
    <section className='relative w-full mt-5 mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='relative flex items-end w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] p-4 md:p-5 lg:p-8 xl:p-10 rounded-lg overflow-hidden bg-black mb-8 lg:mb-10'>
        <img
          src={
            news.image || 'https://via.placeholder.com/800x400?text=No+Image'
          }
          alt={news.title || 'News image'}
          className='absolute top-0 left-0 object-cover object-center w-full h-full brightness-50'
        />
        <div className='relative z-10 w-full'>
          <div className='w-full pb-5 mb-5 border-b border-white/95'>
            <div className='flex mb-3 md:mb-4 last:mb-0'>
              {news.category && (
                <span className='relative text-md px-3 py-1.5 rounded bg-red text-white bg-red-500'>
                  {news.category}
                </span>
              )}
            </div>
            <h1 className='w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] line-clamp-3 sm:line-clamp-2 text-white/95'>
              {news.title}
            </h1>
          </div>
          <div className='w-full mt-2'>
            {news.publishedDate && (
              <BtnDate
                to=''
                className='relative flex items-center gap-2 w-fit rounded px-2.5 py-1.5 bg-gray transition-all duration-300 hover:brightness-90'
              >
                {news.publishedDate.slice(0, 10)}
              </BtnDate>
            )}
          </div>
        </div>
      </div>
      <p className='mt-4 text-black text-base md:text-lg'>
        {news.description || 'No description available.'}
      </p>
    </section>
  );
};

export default NewsDetails;
