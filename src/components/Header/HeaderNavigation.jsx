import { NavLink } from 'react-router';

const HeaderNavigation = ({ ...props }) => {
  const navItems = [
    { path: '/sports', label: 'sports' },
    { path: '/technology', label: 'technology' },
    { path: '/business', label: 'business' },
    { path: '/health', label: 'health' },
    { path: '/entertainment', label: 'entertainment' },
  ];
  return (
    <>
      {navItems.map(({ path, label }) => (
        <NavLink
          key={label}
          to={path}
          {...props}
          className='mb-6 sm:w-full lg:mb-0'
        >
          {({ isActive }) => (
            <span
              className={`font-semibold text-sm lg:text-base uppercase ${
                isActive ? 'text-red-500' : 'text-black'
              } transition-colors duration-300 hover:text-red-500`}
            >
              {label}
            </span>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default HeaderNavigation;
