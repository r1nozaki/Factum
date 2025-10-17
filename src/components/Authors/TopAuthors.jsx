import AuthorCard from './AuthorCard';
import BtnLink from '../UI/BtnLink';
import { topAuthors } from '../../data/Authors';

const TopAuthors = () => {
  return (
    <section className='relative w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24 '>
      <div className='flex items-center justify-between w-full pb-2 mb-10 border-b-2 border-black sm:pb-3'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          Top Authors
        </h2>
        <BtnLink className='text-white bg-black' link='/authors'>
          Go to Authors
        </BtnLink>
      </div>
      <div className='grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 xl:gap-8'>
        {topAuthors.map(({ id, ava, name, position }) => (
          <AuthorCard
            key={id}
            id={id}
            ava={ava}
            name={name}
            position={position}
          />
        ))}
      </div>
    </section>
  );
};

export default TopAuthors;
