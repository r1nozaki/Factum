import { Newspaper } from 'lucide-react';
import { Link } from 'react-router';

const Logo = ({ white }) => {
  return (
    <Link
      to='/'
      className='flex items-center gap-2 transition-opacity duration-300 hover:opacity-75 xl:min-w-60'
    >
      <Newspaper
        size={28}
        className={`${white ? 'text-white' : 'text-black'}`}
      />
      <h1
        className={`font-bold text-xl lg:text-2xl uppercase ${
          white ? 'text-white' : 'text-black'
        }`}
      >
        Factum
      </h1>
    </Link>
  );
};

export default Logo;
