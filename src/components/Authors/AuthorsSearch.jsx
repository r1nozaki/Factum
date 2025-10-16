import Label from '../UI/Label';
import { Search } from 'lucide-react';

const AuthorsSearch = ({ query, setQuery }) => {
  return (
    <Label className='flex items-center sm:max-w-80'>
      <Search
        className='absolute z-10 w-5 h-5 left-2 lg:w-6 lg:h-6 text-black/50"'
        strokeWidth={1}
      />
      <input
        className='relative w-full h-10 px-5 text-base transition-all duration-300 bg-white border border-gray-300 rounded outline-none lg:h-11 focus:border-black pl-9 lg:pl-10'
        placeholder='Search Author'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </Label>
  );
};

export default AuthorsSearch;
