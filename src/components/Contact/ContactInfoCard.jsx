const ContactInfoCard = ({ icon, title, text, prePath }) => {
  return (
    <div className='relative w-full text-center rounded-md px-4 py-6 lg:py-8 border border-gray-200'>
      <div className='w-full mb-4 md:mb-5'>{icon}</div>
      <div className='w-full'>
        <h3 className='w-full font-semibold text-2xl text-[#DA4934] mb-1 md:mb-2'>
          {title}
        </h3>
        {Array.isArray(text) ? (
          text.map((item, index) => (
            <span key={index} className='block w-full'>
              <a
                className='transition-opacity duration-300 hover:opacity-75'
                href={`${prePath}:${item}`}
              >
                {item}
              </a>
            </span>
          ))
        ) : (
          <p className='w-full lg:max-w-[80%] m-auto text-base'>{text}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoCard;
