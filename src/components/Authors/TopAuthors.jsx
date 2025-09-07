import AuthorCard from './AuthorCard';
import BtnLink from '../UI/BtnLink';
import { topAuthors } from '../../data/Authors';

const TopAuthors = () => {
  return (
    <section className='relative w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='flex items-center justify-between w-full pb-2 sm:pb-3 border-b-2 border-black mb-10'>
        <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl block sm:max-w-[60%]'>
          Top Authors
        </h2>
        <BtnLink className='bg-black text-white' link='/authors'>
          Go to Authors
        </BtnLink>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full'>
        {topAuthors.map(({ ava, name, position }) => (
          <AuthorCard key={name} ava={ava} name={name} position={position} />
        ))}
      </div>
    </section>
  );
};

export default TopAuthors;
