const NewsCardImage = ({ src, alt }) => {
  return (
    <div className='relative block w-full h-0 pb-[65%] rounded-lg overflow-hidden border border-gray bg-gray-200 mb-4'>
      <img
        src={src}
        alt={alt}
        className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-75'
      />
    </div>
  );
};

export default NewsCardImage;
