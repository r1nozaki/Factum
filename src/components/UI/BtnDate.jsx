import { Link } from 'react-router';
import { Calendar } from 'lucide-react';

const BtnDate = ({ children, className = '', link, ...props }) => {
  return (
    <button
      {...props}
      className='relative w-fit px-2.5 py-1.5 rounded bg-gray-200 transition-all duration-300 hover:brightness-90 z-10 mb-2'
    >
      <Link className='flex items-center gap-2'>
        <Calendar /> {children}
      </Link>
    </button>
  );
};

export default BtnDate;
