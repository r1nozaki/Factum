import { Link } from 'react-router';

const AuthorCard = ({ id, ava, name, position }) => {
  return (
    <div className='relative flex flex-col items-center w-full'>
      <div className='mb-3 overflow-hidden rounded-full w-11 h-11'>
        <div className='w-full bg-gray-200'>
          <Link
            to={`/authors/${id}`}
            className='object-cover object-center w-full h-full '
          >
            <img
              src={ava}
              alt={name}
              loading='lazy'
              className='object-cover object-center w-full h-full transition-all duration-300 will-change-transform hover:scale-110 hover:brightness-90'
            />
          </Link>
        </div>
      </div>
      <div className='w-full text-center'>
        <p className='text-base text-red-400 line-clamp-1 hover:underline md:text-lg'>
          <Link to={`/authors/${id}`}>{name}</Link>
        </p>
        <p className='text-sm line-clamp-1'>{position}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
