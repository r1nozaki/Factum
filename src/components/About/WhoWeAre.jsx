import DutiesCard from './DutiesCard';
import duties from '../../data/Duties';

const WhoWeAre = () => {
  return (
    <section className='w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl pb-2 sm:pb-3 border-b-2 border-black mb-4 sm:mb-6 md:mb-7 last:mb-0'>
        Who We Are
      </h2>
      <div className='grid md:grid-cols-2 gap-6 md:gap-6 lg:gap-10 w-full'>
        {duties.map(({ title, text }) => (
          <DutiesCard key={title} title={title} text={text} />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
