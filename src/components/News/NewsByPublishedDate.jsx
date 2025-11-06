import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getNewsByPublishedDate } from '../../services/NewsServices';
import NewsCard from '../NewsCard/NewsCard';
import Banner from '../Banner';
import { PropagateLoader } from 'react-spinners';

const NewsByPublishedDate = () => {
  const { publishedDate } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getNewsByPublishedDate(publishedDate)
      .then(data => setNews(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [publishedDate]);

  if (error) {
    return (
      <div className='flex items-center justify-center mt-10 text-xl'>
        <p>Something went wrong. Try again later.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center h-20'>
        <PropagateLoader color='#000' />
      </div>
    );
  }

  if (!news || news.length === 0) {
    return (
      <div className='flex items-center justify-center mt-10 text-xl'>
        <p>No news found for {publishedDate}</p>
      </div>
    );
  }

  return (
    <section className='relative w-full mt-8 mb-10'>
      <Banner title='Search' description={`Published Date: ${publishedDate}`} />

      <div className='grid w-full gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
        {news.map(item => (
          <NewsCard
            key={item.id}
            id={item.id}
            src={item.image}
            publishedDate={item.publishedDate}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsByPublishedDate;
