import { Link } from 'react-router';
import Logo from '../../components/common/Logo';
import Socials from '../../components/common/Socials';

const FooterTop = () => {
  const categoriesLink = [
    { path: '/sports', label: 'Sports' },
    { path: '/technology', label: 'Technology' },
    { path: '/business', label: 'Business' },
    { path: '/health', label: 'Health' },
    { path: '/entertainment', label: 'Entertainment' },
  ];

  const navLink = [
    { path: '/about', label: 'About Us' },
    { path: '/authors', label: 'Authors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className='w-full px-4 py-8 sm:px-5 sm:py-10 md:py-12 xl:py-16'>
      <div className='flex flex-col items-center justify-between w-full m-auto md:flex-row max-w-screen-2xl'>
        <div className='flex flex-col gap-5 md:gap-10 lg:gap-20 w-full md:max-w-[400px] lg:max-w-[440px] mb-8 sm:mb-10 md:mb-0'>
          <div>
            <Logo white={true} />
            <p className='mt-3 text-base text-white/80 lg:mt-4'>
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
              <li key={link.label}>
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
