const DutiesCard = ({ title, text }) => {
  return (
    <div className='relative w-full'>
      <h3 className='w-full font-semibold text-2xl mb-1.5'>{title}</h3>
      <p className='text-base'>{text}</p>
    </div>
  );
};

export default DutiesCard;
