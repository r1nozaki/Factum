import { Newspaper } from 'lucide-react';

const Loader = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center w-30 h-30 animate-ping'>
        <h1 className='font-bold flex items-center text-xl lg:text-2xl uppercase'>
          Factum <Newspaper />
        </h1>
      </div>
    </section>
  );
};

export default Loader;
