import { Link } from 'react-router';
import Logo from '../Logo';
import Socials from '../Socials';

const FooterTop = () => {
  const categoriesLink = [
    { path: '/sports', label: 'Sports' },
    { path: '/politics', label: 'Politics' },
    { path: '/business', label: 'Business' },
    { path: '/health', label: 'Health' },
    { path: '/science', label: 'Science' },
    { path: '/entertainment', label: 'Entertainment' },
  ];

  const navLink = [
    { path: '/about', label: 'About' },
    { path: '/authors', label: 'Authors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className='w-full px-4 sm:px-5 py-8 sm:py-10 md:py-12 xl:py-16'>
      <div className='flex items-center justify-between w-full max-w-screen-2xl m-auto'>
        <div className='flex flex-col gap-20 w-full md:max-w-[400px] lg:max-w-[440px] mb-8 sm:mb-10 md:mb-0'>
          <div>
            <Logo white={true} />
            <p className='text-white/80 text-base mt-3 lg:mt-4'>
              A reporter gathers, investigates, and presents news and current
              events through various media platforms.
            </p>
          </div>
          <Socials />
        </div>
        <div className='flex gap-20 sm:gap-32 xl:gap-36 text-white/80'>
          <ul className='flex flex-col gap-3'>
            {categoriesLink.map(categories => (
              <li key={categories.label} className='w-full'>
                <Link
                  to={categories.path}
                  className='text-base hover:underline'
                >
                  {categories.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3'>
            {navLink.map(link => (
              <li>
                <Link to={link.path} className='text-base hover:underline'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
