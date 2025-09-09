import { AnimatePresence, motion } from 'motion/react';
import { Search } from 'lucide-react';
import Label from '../UI/Label';
import BtnLink from '../UI/BtnLink';
import useBlockScroll from '../../hooks/useBlockScroll';

const HeaderSearch = ({ search, setOpenSearch, query, setQuery }) => {
  const handleSearch = () => {
    setOpenSearch(!search);
  };

  useBlockScroll(search);

  return (
    <>
      {!search && (
        <button
          onClick={handleSearch}
          className='hover:text-red-500 transition-colors duration-300 hover:cursor-pointer'
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
              className='fixed z-10 top-0 right-0 w-full h-32 sm:h-16 lg:h-20 bg-white shadow-lg'
            >
              <div className='flex items-center justify-between w-full max-w-screen-2xl p-4 sm:p-5'>
                <form className='flex gap-3 flex-wrap sm:flex-nowrap sm:gap-4 w-full'>
                  <Label className='flex items-center'>
                    <Search className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 text-black/50' />
                    <input
                      type='text'
                      onChange={e => setQuery(e.target.value)}
                      value={query}
                      className='border border-gray-200 px-5 w-full h-10 lg:h-11 rounded outline-none focus:border-black transition-all duration-300 pl-9 lg:pl-10 text-base'
                      placeholder='Search on Factum'
                    />
                  </Label>
                  <BtnLink
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
