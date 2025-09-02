import { Link } from 'react-router';

const HeaderNavigation = () => {
  const navItems = [
    { path: '/sports', label: 'sports' },
    { path: '/politics', label: 'politics' },
    { path: '/business', label: 'business' },
    { path: '/health', label: 'health' },
    { path: '/science', label: 'science' },
    { path: '/entertainment', label: 'entertainment' },
  ];
  return (
    <nav className='flex items-center'>
      <ul className='hidden lg:flex gap-6 xl:gap-10'>
        {navItems.map(link => (
          <Link key={link.label} to={link.path}>
            <li className='font-semibold uppercase text-sm text-black transition-colors duration-300 hover:text-red-500'>
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
