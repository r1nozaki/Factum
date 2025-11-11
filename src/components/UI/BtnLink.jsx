import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

const BtnLink = ({ children, className = '', link, ...props }) => {
  return (
    <button
      {...props}
      className={`relative w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 px-4 rounded  transition-opacity duration-300 hover:opacity-80 hover:cursor-pointer ${className}`}
    >
      <Link to={link} className='flex items-center justify-center gap-1'>
        {children}
        <ArrowUpRight />
      </Link>
    </button>
  );
};

export default BtnLink;
