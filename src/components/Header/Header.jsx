import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderSubscribe from './HeaderSubscribe';
import Logo from '../Logo';

const Header = () => {
  const [menu, setOpenMenu] = useState(false);
  const [search, setOpenSearch] = useState(false);
  const [subscribe, setOpenSubscribe] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <header className='fixed top-0 left-0 z-50 flex justify-between w-full bg-white h-20 px-4 sm:px-5 border-b border-b-gray-200'>
      <Logo />
      <nav className=' hidden lg:flex items-center'>
        <ul className='lg:flex flex-col lg:flex-row gap-6 xl:gap-10 items-center justify-center'>
          <HeaderNavigation />
        </ul>
      </nav>
      <div className='flex items-center justify-end gap-6 lg:gap-4 xl:gap-8 lg:min-w-52 xl:min-w-60'>
        <HeaderSubscribe
          subscribe={subscribe}
          setOpenSubscribe={setOpenSubscribe}
        />
        <div className='flex items-center gap-3 lg:gap-4'>
          <HeaderSearch
            search={search}
            setOpenSearch={setOpenSearch}
            query={query}
            setQuery={setQuery}
          />
          <span className='w-[1px] h-8 bg-gray-200'></span>
          <HeaderMenu menu={menu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
