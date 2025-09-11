import { Link } from 'react-router';
import { Calendar1 } from 'lucide-react';

const BtnDate = ({ children, className = '', link, ...props }) => {
  return (
    <button
      {...props}
      className='relative w-fit rounded px-2.5 py-1.5 bg-gray transition-all duration-300 hover:brightness-90 z-10 mb-2'
    >
      <Link className='flex items-center gap-2 '>
        <Calendar1 /> {children}
      </Link>
    </button>
  );
};

export default BtnDate;
