import { Link } from 'react-router';

const FooterBottom = () => {
  return (
    <div className='w-full p-4 sm:p-5 border-t border-white/40 text-white/80'>
      <div className='flex justify-between w-full text-center md:text-left max-w-screen-2xl m-auto'>
        <p className='text-sm w-full md:w-auto mb-2.5 md:mb-0'>
          <span>Design by </span>
          <Link to='/' className='underline'>
            Factum
          </Link>
          <span>. Powered by </span>
          <a
            href='https://github.com/r1nozaki'
            className='underline'
            target='_blank'
          >
            Ivan Zahorui
          </a>
        </p>
        <p className='text-sm w-full md:w-auto'>
          Copyright © 2025 Factum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
