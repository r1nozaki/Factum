import { NavLink } from 'react-router';
import categoryContent from '../../data/CategoryContent';

const CategoryList = () => {
  return (
    <ul className='relative w-full mb-8'>
      {categoryContent.map(category => (
        <NavLink
          key={category.title}
          to={category.link}
          className='mb-4 group '
        >
          {({ isActive }) => (
            <>
              <span
                to={category.link}
                className={`flex items-center gap-3 w-full pb-2 border-b-2 border-gray-200 group-last:pb-0 group-last:border-0 pointer-events-none text-base transition-colors duration-300  mb-4 ${
                  isActive ? 'text-red-500' : 'text-black'
                } group-hover:text-black/60`}
              >
                {category.icon}
                {category.title}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </ul>
  );
};

export default CategoryList;
