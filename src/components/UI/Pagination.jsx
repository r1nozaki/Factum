import { ArrowLeft, ArrowRight } from 'lucide-react';
import { lenis } from '../../lenisInstance';
import { pagesArray } from '../../utils/pages';

const Pagination = ({ page, totalPages, setPage, nextPage, prevPage }) => {
  if (totalPages <= 1) return null;

  const pages = pagesArray(totalPages);

  const handleChangePage = p => {
    setPage(p);
    lenis.scrollTo(0);
  };

  const handleNext = () => {
    nextPage();
    lenis.scrollTo(0);
  };

  const handlePrev = () => {
    prevPage();
    lenis.scrollTo(0);
  };

  return (
    <div className='flex items-center justify-center gap-2 mt-8'>
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className='px-3 py-1 transition-colors duration-300 border rounded disabled:opacity-50 hover:bg-gray-100 hover:cursor-pointer'
      >
        <ArrowLeft />
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => handleChangePage(p)}
          className={`px-3 py-1 border border-gray-300 rounded text-black transition-colors duration-300 hover:text-white hover:cursor-pointer hover:bg-red-500 ${
            p === page ? 'bg-red-500 text-white border-none' : ''
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className='px-3 py-1 transition-colors duration-300 border rounded disabled:opacity-50 hover:bg-gray-100 hover:cursor-pointer'
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
