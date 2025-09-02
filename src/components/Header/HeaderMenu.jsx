import { Menu } from 'lucide-react';

const HeaderMenu = () => {
  return (
    <button className='hover:text-red-500 transition-colors duration-300 hover:cursor-pointer'>
      <Menu size={28} />
    </button>
  );
};

export default HeaderMenu;
