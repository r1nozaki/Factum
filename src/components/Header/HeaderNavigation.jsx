import { Link } from 'react-router';

const HeaderNavigation = () => {
  const navItems = [
    { path: '/sports', label: 'sports' },
    { path: '/technology', label: 'technology' },
    { path: '/business', label: 'business' },
    { path: '/health', label: 'health' },
    { path: '/science', label: 'science' },
    { path: '/entertainment', label: 'entertainment' },
  ];
  return (
    <>
      {navItems.map(({ path, label }) => (
        <li key={label} className='sm:w-full mb-6 lg:mb-0'>
          <Link
            to={path}
            className='font-semibold text-sm lg:text-base uppercase transition-colors duration-300 hover:text-red-500'
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default HeaderNavigation;
