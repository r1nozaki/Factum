import { pagesArray } from '../../utils/pages';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Pagination = ({ page, totalPages, setPage, nextPage, prevPage }) => {
  if (totalPages <= 1) return null;

  const pages = pagesArray(totalPages);

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={prevPage}
        disabled={page === 1}
        className='px-3 py-1 border rounded disabled:opacity-50'
      >
        <ArrowLeft />
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border border-gray-300 rounded text-black transition-colors duration-300 hover:bg-red-500 ${
            p === page ? 'bg-red-500 text-white border-none' : ''
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={page === totalPages}
        className='px-3 py-1 border rounded disabled:opacity-50'
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
