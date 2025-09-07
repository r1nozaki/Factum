import { Link } from 'react-router';

const BtnCategory = ({
  children,
  link,
  categoryIcon,
  className = '',
  ...props
}) => {
  return (
    <button className='relative w-full px-4 xl:px-5 rounded bg-gray-300 text-black transition-colors duration-300 hover:bg-red-500 hover:text-white '>
      <Link className='flex justify-center items-center gap-1'>
        {categoryIcon}
        <p className='text-base md:text-lg'>{children}</p>
      </Link>
    </button>
  );
};

export default BtnCategory;
