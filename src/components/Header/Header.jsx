import { useState } from 'react';
import { useNavigate } from 'react-router';
import HeaderNavigation from './HeaderNavigation';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderSubscribe from './HeaderSubscribe';
import Logo from '../../components/common/Logo';

const Header = () => {
  const [menu, setOpenMenu] = useState(false);
  const [search, setOpenSearch] = useState(false);
  const [subscribe, setOpenSubscribe] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const Search = () => {
    if (!query.trim()) {
      return;
    } else {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };
  return (
    <header className='fixed top-0 left-0 z-50 flex justify-between w-full h-20 px-4 bg-white border-b sm:px-5 border-b-gray-200'>
      <Logo />
      <nav className='items-center hidden lg:flex'>
        <ul className='flex-col items-center justify-center gap-6 lg:flex lg:flex-row xl:gap-10'>
          <HeaderNavigation />
        </ul>
      </nav>
      <div className='flex items-center justify-end gap-6 lg:gap-4 xl:gap-8 lg:min-w-52 xl:min-w-60'>
        <div className='hidden md:block'>
          <HeaderSubscribe
            subscribe={subscribe}
            setOpenSubscribe={setOpenSubscribe}
          />
        </div>
        <div className='flex items-center gap-3 lg:gap-4'>
          <HeaderSearch
            search={search}
            setOpenSearch={setOpenSearch}
            query={query}
            setQuery={setQuery}
            onSearch={Search}
          />
          <span className='w-[1px] h-8 bg-gray-200'></span>
          <HeaderMenu
            menu={menu}
            setOpenMenu={setOpenMenu}
            subscribe={subscribe}
            setOpenSubscribe={setOpenSubscribe}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
