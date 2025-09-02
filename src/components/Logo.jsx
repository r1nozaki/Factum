import { Link } from 'react-router';
import { Newspaper } from 'lucide-react';

const Logo = () => {
  return (
    <Link
      to='/'
      className='flex items-center gap-2 transition-opacity duration-300 hover:opacity-75 xl:min-w-60'
    >
      <Newspaper size={28} />
      <h1 className='font-bold text-xl lg:text-2xl uppercase text-black'>Factum</h1>
    </Link>
  );
};

export default Logo;
