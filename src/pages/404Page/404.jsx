import BtnLink from '../../components/UI/BtnLink';

const Page404 = () => {
  return (
    <>
      <title>Page 404</title>
      <meta name='content' description='Factum 404 page' />
      <section className='flex items-center min-h-screen'>
        <div className='flex-col w-full justify-items-center'>
          <h1 className='font-bold text-red-500 text-9xl '>404</h1>
          <span className='block mb-3 text-xl'>Page not found!</span>
          <BtnLink className='block text-white bg-red-500' link={'/'}>
            Back to home
          </BtnLink>
        </div>
      </section>
    </>
  );
};

export default Page404;
