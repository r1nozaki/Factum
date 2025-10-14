import BtnLink from '../../components/UI/BtnLink';

const Page404 = () => {
  return (
    <section className='flex items-center min-h-screen'>
      <div className='w-full flex-col justify-items-center'>
        <h1 className='text-9xl text-red-500 font-bold '>404</h1>
        <span className='block mb-3 text-xl'>Page not found!</span>
        <BtnLink className='bg-red-500 text-white block' link={'/'}>
          Back to home
        </BtnLink>
      </div>
    </section>
  );
};

export default Page404;
