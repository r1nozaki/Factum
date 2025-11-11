import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { PropagateLoader } from 'react-spinners';
import NewsCard from '../../components/NewsCard/NewsCard';
import Pagination from '../../components/UI/Pagination';
import usePagination from '../../hooks/usePagination';
import { getNewsByTitle } from '../../services/NewsServices';
import Banner from '../UI/Banner';

const SearchedNews = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const { page, totalPages, nextPage, prevPage, setPage } = usePagination({
    totalCount: total,
    limit: 9,
  });

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    getNewsByTitle(query, 9, page)
      .then(response => {
        setNews(response.data);
        setTotal(response.total);
      })
      .catch(error => {
        console.error('Error searching news:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  return (
    <>
      <title>{query}</title>
      <meta name='content' description='News based on search results' />
      <section className='relative w-full mt-8 mb-10 sm:mb-12 lg:mb-20 xl:mb-24 sm:mt-0'>
        <Banner title={'Search'} description={`Title: ${query}`} />

        {loading ? (
          <div className='flex items-center justify-center h-20'>
            <PropagateLoader />
          </div>
        ) : news.length === 0 ? (
          <p>No news found for “{query}”.</p>
        ) : (
          <>
            <div className='grid w-full gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:mb-10 lg:mb-12'>
              {news.map(item => (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  src={item.image || 'News preview'}
                  publishedDate={item.publishedDate || 'Unknown date'}
                  description={item.description || 'No description'}
                  title={item.title || ''}
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
          </>
        )}
      </section>
    </>
  );
};

export default SearchedNews;
