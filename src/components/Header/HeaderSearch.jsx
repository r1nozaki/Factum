import { Search } from 'lucide-react';

const HeaderSearch = () => {
  return (
    <button className='hover:text-red-500 transition-colors duration-300 hover:cursor-pointer'>
      <Search size={28} />
    </button>
  );
};

export default HeaderSearch;
