import AuthorCard from './AuthorCard';
import BtnLink from '../UI/BtnLink';
import Pagination from '../UI/Pagination';
import usePagination from '../../hooks/usePagination';
import { allAuthors } from '../../data/Authors';
import { pre } from 'motion/react-client';

const TopAuthors = () => {
  const { page, totalPages, nextPage, prevPage, setPage } = usePagination({
    totalCount: allAuthors.length,
    limit: 18,
  });

  const startIndex = (page - 1) * 18;
  const endIndex = startIndex + 18;
  const currentAuthors = allAuthors.slice(startIndex, endIndex);

  return (
    <section className='relative w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='flex items-center justify-between w-full pb-2 sm:pb-3 border-b-2 border-black mb-10'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          All Authors
        </h2>
        <BtnLink className='bg-black text-white' link='/authors'>
          Go to Authors
        </BtnLink>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full mb-8 md:mb-10 lg:mb-12'>
        {currentAuthors.map(({ ava, name, position }) => (
          <AuthorCard key={name} ava={ava} name={name} position={position} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </section>
  );
};

export default TopAuthors;
