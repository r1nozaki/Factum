import { ArrowUpRight } from 'lucide-react';

const BtnLink = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`relative flex justify-center items-center gap-1 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 px-4 rounded  transition-opacity duration-300 hover:opacity-80 hover:cursor-pointer ${className}`}
    >
      {children}
      <ArrowUpRight />
    </button>
  );
};

export default BtnLink;
