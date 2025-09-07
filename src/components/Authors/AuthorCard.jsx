import { Link } from 'react-router';

const AuthorCard = ({ ava, name, position }) => {
  return (
    <div className='relative w-full flex flex-col items-center'>
      <div className='w-11 h-11 rounded-full mb-3 overflow-hidden'>
        <div className='w-full bg-gray-200'>
          <Link
            to=''
            className='w-full h-full object-cover object-center will-change-transform transition-all duration-300 hover:scale-110 hover:brightness-90'
          >
            <img
              src={ava}
              alt={name}
              loading='lazy'
              className=' w-full h-full object-cover object-center'
            />
          </Link>
        </div>
      </div>
      <div className='w-full text-center'>
        <p className='text-red-400 line-clamp-1 hover:underline text-base md:text-lg'>
          <Link to=''>{name}</Link>
        </p>
        <p className='line-clamp-1 text-sm'>{position}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
