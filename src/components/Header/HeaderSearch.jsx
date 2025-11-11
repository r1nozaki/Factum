import { Search } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import useBlockScroll from '../../hooks/useBlockScroll';
import { lenis } from '../../lenisInstance';
import BtnLink from '../UI/BtnLink';
import Label from '../UI/Label';

const HeaderSearch = ({ search, setOpenSearch, query, setQuery, onSearch }) => {
  const handleSearch = () => {
    setOpenSearch(!search);
  };

  useBlockScroll(search, lenis);

  return (
    <>
      {!search && (
        <button
          onClick={handleSearch}
          className='transition-colors duration-300 hover:text-red-500 hover:cursor-pointer'
        >
          <Search size={28} strokeWidth={1} />
        </button>
      )}
      <AnimatePresence>
        {search && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black'
              onClick={handleSearch}
            />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='fixed top-0 right-0 z-10 w-full h-32 bg-white shadow-lg sm:h-16 lg:h-20'
            >
              <div className='flex items-center justify-between w-full p-4 max-w-screen-2xl sm:p-5'>
                <form className='flex flex-wrap w-full gap-3 sm:flex-nowrap sm:gap-4'>
                  <Label className='flex items-center'>
                    <Search className='absolute z-10 w-5 h-5 left-2 lg:w-6 lg:h-6 text-black/50' />
                    <input
                      type='text'
                      onChange={e => setQuery(e.target.value)}
                      value={query}
                      className='w-full h-10 px-5 text-base transition-all duration-300 border border-gray-200 rounded outline-none lg:h-11 focus:border-black pl-9 lg:pl-10'
                      placeholder='Search on Factum'
                    />
                  </Label>
                  <BtnLink
                    onClick={onSearch}
                    className={` text-white ${
                      query === '' ? 'bg-gray-200' : 'bg-red-500 '
                    }`}
                    disabled={query === ''}
                  >
                    Search
                  </BtnLink>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSearch;
