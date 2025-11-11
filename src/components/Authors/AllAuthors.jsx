import { useEffect, useState } from 'react';
import { allAuthors } from '../../data/Authors';
import useDebounce from '../../hooks/useDebounce';
import usePagination from '../../hooks/usePagination';
import Pagination from '../UI/Pagination';
import AuthorCard from './AuthorCard';
import AuthorsSearch from './AuthorsSearch';

const TopAuthors = () => {
  const [searchResult, setSearchResult] = useState('');
  const [query, setQuery] = useState('');
  const { page, totalPages, nextPage, prevPage, setPage } = usePagination({
    totalCount: allAuthors.length,
    limit: 18,
  });

  const startIndex = (page - 1) * 18;
  const endIndex = startIndex + 18;
  const currentAuthors = allAuthors.slice(startIndex, endIndex);

  const search = value => {
    if (!value.trim()) {
      setSearchResult([]);
      return;
    }

    const result = allAuthors.filter(author =>
      author.name.toLowerCase().includes(value.toLowerCase()),
    );

    setSearchResult(result);
  };

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  const authorsToRender =
    searchResult.length > 0 || query ? searchResult : currentAuthors;

  return (
    <section className='relative w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='flex items-center justify-between w-full pb-2 mb-10 border-b-2 border-black sm:pb-3'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          All Authors
        </h2>
        <AuthorsSearch query={query} setQuery={setQuery} />
      </div>
      <div className='grid w-full grid-cols-2 gap-5 mb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 xl:gap-8 md:mb-10 lg:mb-12'>
        {authorsToRender.map(({ id, ava, name, position }) => (
          <AuthorCard
            key={id}
            id={id}
            ava={ava}
            name={name}
            position={position}
          />
        ))}
      </div>
      {!query && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </section>
  );
};

export default TopAuthors;
