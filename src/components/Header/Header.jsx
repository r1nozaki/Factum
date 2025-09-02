import HeaderNavigation from './HeaderNavigation';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderSubscribe from './HeaderSubscribe';
import Logo from '../Logo';
const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 flex justify-between w-full bg-white h-20 px-4 sm:px-5 border-b border-b-gray-200'>
      <Logo />
      <HeaderNavigation />
      <div className='flex items-center justify-end gap-6 lg:gap-4 xl:gap-8 lg:min-w-52 xl:min-w-60'>
        <HeaderSubscribe />
        <div className='flex items-center gap-3 lg:gap-4'>
          <HeaderSearch />
          <span className='w-[1px] h-8 bg-gray-200'></span>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
