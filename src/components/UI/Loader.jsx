import { Newspaper } from 'lucide-react';

const Loader = () => {
  return (
    <section className='flex items-center justify-center w-full min-h-screen'>
      <div className='flex items-center justify-center w-30 h-30 animate-ping'>
        <h1 className='flex items-center text-xl font-bold uppercase lg:text-2xl'>
          Factum <Newspaper />
        </h1>
      </div>
    </section>
  );
};

export default Loader;
