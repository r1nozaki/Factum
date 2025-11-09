const AboutInfo = ({ side, img, title, content, className = '' }) => {
  return (
    <section className='relative grid items-center w-full grid-cols-1 gap-5 mb-10 md:grid-cols-2 md:gap-8 lg:gap-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      {side === 'left' ? (
        <>
          <div className='w-full col-start-1'>
            <h2 className='w-full mb-2 text-2xl font-semibold sm:text-3xl lg:text-4xl sm:mb-3 lg:mb-4'>
              {title}
            </h2>
            <div className='grid gap-2.5 md:gap-3.5 w-full'>
              {content.map(p => (
                <p key={p.text}>{p.text}</p>
              ))}
            </div>
          </div>
          <div className='relative w-full h-0 pt-[85%] rounded-lg overflow-hidden'>
            <img
              src={img}
              alt={img}
              className='absolute top-0 right-0 object-cover object-center w-full h-full'
            />
          </div>
        </>
      ) : (
        <>
          <div className='relative w-full h-0 pt-[85%] rounded-lg overflow-hidden col-start-1'>
            <img
              src={img}
              alt={img}
              className='absolute top-0 right-0 object-cover object-center w-full h-full'
            />
          </div>
          <div className='w-full '>
            <h2 className='w-full mb-2 text-2xl font-semibold sm:text-3xl lg:text-4xl sm:mb-3 lg:mb-4'>
              {title}
            </h2>
            <div className='grid gap-2.5 md:gap-3.5 w-full'>
              {content.map(p => (
                <p key={p.text}>{p.text}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutInfo;
