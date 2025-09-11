import { Link } from 'react-router';

const BtnCategory = ({
  children,
  link,
  categoryIcon,
  className = '',
  ...props
}) => {
  return (
    <button className='relative w-full p-4 xl:p-5 rounded bg-gray-200 text-black transition-colors duration-300 hover:bg-red-500 hover:text-white hover:cursor-pointer'>
      <Link to={link} className='flex justify-center items-center gap-3'>
        {categoryIcon}
        <p className='text-base md:text-lg'>{children}</p>
      </Link>
    </button>
  );
};

export default BtnCategory;
