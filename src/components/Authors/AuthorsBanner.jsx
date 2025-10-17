import { useParams, Link } from 'react-router';
import { allAuthors } from '../../data/Authors';
const AuthorsBanner = () => {
  const { id } = useParams();

  const authorsById = allAuthors.find(item => String(item.id) === id);

  if (!authorsById) {
    return (
      <p className='flex flex-col gap-5 mt-10 text-3xl font-semibold text-center text-black'>
        Author not found.
        <Link
          to='/authors'
          className='text-lg text-black underline transition-colors duration-300 hover:text-red-500'
        >
          Back to authors
        </Link>
      </p>
    );
  }

  return (
    <>
      <section className='relative flex flex-col items-center justify-center w-full px-5 py-8 mt-10 mb-10 text-center bg-gray-200 rounded-md md:px-10 md:py-12 lg:py-16 sm:mb-12 lg:mb-20 xl:mb-24'>
        <div className='w-12 h-12 mb-3 overflow-hidden rounded-full'>
          <div className='w-full bg-gray-200'>
            <div className='object-cover object-center w-full h-full '>
              <img
                src={authorsById.ava}
                alt={authorsById.name}
                loading='lazy'
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>
        </div>
        <h3 className='w-full mb-3 text-2xl font-semibold'>
          {authorsById.name}
        </h3>
        <div className='flex flex-col w-full gap-2'>
          <p className='text-base'>
            <span className='font-semibold'>Position: </span>
            <span className='italic'>{authorsById.position}</span>
          </p>
          <p className='text-base'>
            <span className='font-semibold'>Email: </span>
            <span className='italic'>{authorsById.email}</span>
          </p>
          <p className='text-base'>
            <span className='font-semibold'>Location: </span>
            <span className='italic'>{authorsById.location}</span>
          </p>
          <p className='text-base'>
            <span className='font-semibold'>Published News: </span>
            <span className='italic'>{authorsById.published}</span>
          </p>
        </div>
        <div className='w-full mt-5'>
          <Link
            to='/authors'
            className='text-lg transition-colors duration-300 hover:text-red-500 hover:underline'
          >
            Back to all authors
          </Link>
        </div>
      </section>
    </>
  );
};

export default AuthorsBanner;
