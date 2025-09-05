const Banner = ({ title, description }) => {
  return (
    <section className='relative w-full text-center px-5 md:px-10 py-12 md:py-16 lg:py-20 rounded-md bg-gray-200  mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0'>
      <h1 className='w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] mb-3 md:mb-4 last:mb-0'>
        {title}
      </h1>
      <p className='sm:max-w-[500px] sm:m-auto text-base'>{description}</p>
    </section>
  );
};

export default Banner;
