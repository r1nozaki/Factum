import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Logo from '../../components/common/Logo';
import { lenis } from '../../lenisInstance';
import { Link } from 'react-router';
import Socials from '../../components/common/Socials';
import HeaderNavigation from './HeaderNavigation';
import useIsDesktop from '../../hooks/useIsDesktop';
import useBlockScroll from '../../hooks/useBlockScroll';
import HeaderSubscribe from './HeaderSubscribe';

const menuLink = [
  { path: '/about', label: 'about us' },
  { path: '/authors', label: 'authors' },
  { path: '/contact', label: 'contact' },
];

const HeaderMenu = ({ menu, setOpenMenu, subscribe, setOpenSubscribe }) => {
  const desktop = useIsDesktop();

  const handleMenu = () => setOpenMenu(!menu);

  useBlockScroll(menu, lenis);

  return (
    <>
      {!menu && (
        <button
          onClick={handleMenu}
          className='transition-colors duration-300 hover:text-red-500 hover:cursor-pointer'
        >
          <Menu size={28} strokeWidth={1} />
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
              className='fixed z-10 top-0 right-0 w-full h-full sm:w-[450px] overflow-auto bg-white shadow-lg flex flex-col justify-between'
            >
              <div className='relative w-full p-6 border-b border-gray-200 lg:p-10'>
                <button
                  onClick={handleMenu}
                  className='absolute text-black transition-colors duration-300 top-2 sm:top-4 right-2 sm:right-4 outline-0 hover:text-red-500 hover:cursor-pointer'
                >
                  <X size={28} />
                </button>
                <Logo />
                <p className='mt-3 mb-3 text-base lg:mt-4 sm:mb-0'>
                  A reporter gathers, investigates, and presents news and
                  current events through various media platforms.
                </p>
                {desktop ? null : (
                  <HeaderSubscribe
                    dark={true}
                    subscribe={subscribe}
                    setOpenSubscribe={setOpenSubscribe}
                  />
                )}
              </div>

              <ul className='flex flex-col items-center justify-center flex-grow w-full p-6 sm:block lg:p-10'>
                {desktop ? null : <HeaderNavigation onClick={handleMenu} />}
                {menuLink.map(({ path, label }) => (
                  <li key={label} className='mb-6 sm:w-full lg:mb-8 last:mb-0'>
                    <Link
                      to={path}
                      onClick={handleMenu}
                      className='text-sm font-semibold uppercase transition-colors duration-300 lg:text-base hover:text-red-500'
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='p-6 border-t border-gray-200 lg:p-10'>
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
