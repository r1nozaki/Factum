import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Logo from '../Logo';
import { Link } from 'react-router';
import Socials from '../Socials';
import HeaderNavigation from './HeaderNavigation';
import useIsDesktop from '../../hooks/useIsDesktop';
import useBlockScroll from '../../hooks/useBlockScroll';

const menuLink = [
  { path: '/about', label: 'about us' },
  { path: '/authors', label: 'authors' },
  { path: '/contact', label: 'contact' },
];

const HeaderMenu = ({ menu, setOpenMenu }) => {
  const desktop = useIsDesktop();

  const handleMenu = () => setOpenMenu(!menu);

  useBlockScroll(menu);

  return (
    <>
      {!menu && (
        <button
          onClick={handleMenu}
          className='hover:text-red-500 transition-colors duration-300 hover:cursor-pointer'
        >
          <Menu size={28} />
        </button>
      )}

      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black '
              onClick={handleMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className='fixed z-10 top-0 right-0 w-full h-full sm:w-[450px] overflow-auto bg-white shadow-lg'
            >
              <div className='relative w-full p-6 lg:p-10 border-b border-gray-200'>
                <button
                  onClick={handleMenu}
                  className='absolute top-2 sm:top-4 right-2 sm:right-4 outline-0 text-black transition-colors duration-300 hover:text-red-500 hover:cursor-pointer'
                >
                  <X size={28} />
                </button>
                <Logo />
                <p className='text-base mt-3 lg:mt-4 mb-3 sm:mb-0'>
                  A reporter gathers, investigates, and presents news and
                  current events through various media platforms.
                </p>
              </div>

              <ul className='flex sm:block flex-col flex-grow items-center justify-center w-full p-6 lg:p-10'>
                {desktop ? null : <HeaderNavigation />}
                {menuLink.map(({ path, label }) => (
                  <li key={label} className='sm:w-full mb-6 lg:mb-8 last:mb-0'>
                    <Link
                      to={path}
                      onClick={handleMenu}
                      className='font-semibold text-sm lg:text-base uppercase transition-colors duration-300 hover:text-red-500'
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='border-t border-gray-200 p-6 lg:p-10'>
                <Socials dark={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMenu;
