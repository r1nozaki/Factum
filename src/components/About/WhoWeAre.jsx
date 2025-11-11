import duties from '../../data/Duties';
import DutiesCard from './DutiesCard';

const WhoWeAre = () => {
  return (
    <section className='w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <h2 className='w-full pb-2 mb-4 text-2xl font-semibold border-b-2 border-black sm:text-3xl lg:text-4xl sm:pb-3 sm:mb-6 md:mb-7 last:mb-0'>
        Who We Are
      </h2>
      <div className='grid w-full gap-6 md:grid-cols-2 md:gap-6 lg:gap-10'>
        {duties.map(({ title, text }) => (
          <DutiesCard key={title} title={title} text={text} />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
