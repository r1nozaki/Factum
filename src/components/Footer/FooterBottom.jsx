import { Link } from 'react-router';

const FooterBottom = () => {
  return (
    <div className='w-full p-4 border-t sm:p-5 border-white/40 text-white/80'>
      <div className='flex flex-col justify-between w-full m-auto text-center md:flex-row md:text-left max-w-screen-2xl'>
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
        <p className='w-full text-sm md:w-auto'>
          Copyright © 2025 Factum. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
