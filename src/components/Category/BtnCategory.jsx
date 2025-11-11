import { Link } from 'react-router';

const BtnCategory = ({
  children,
  link,
  categoryIcon,
  className = '',
  ...props
}) => {
  return (
    <button className='relative w-full p-4 text-black transition-colors duration-300 bg-gray-200 rounded xl:p-5 hover:bg-red-500 hover:text-white hover:cursor-pointer'>
      <Link to={link} className='flex items-center justify-center gap-3'>
        {categoryIcon}
        <p className='text-base md:text-lg'>{children}</p>
      </Link>
    </button>
  );
};

export default BtnCategory;
