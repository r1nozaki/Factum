import { title } from 'motion/react-client';
import DutiesCard from './DutiesCard';

const duties = [
  {
    title: 'Our Mission',
    text: 'Our mission is to deliver news that matters, to provide our readers with timely, accurate, and comprehensive coverage of the latest events and developments. We strive to inform, inspire, and engage our audience with quality journalism that upholds the principles of accuracy, fairness, and integrity.',
  },
  {
    title: 'Our Vision',
    text: 'Our vision is to be a leading force in journalism, shaping the future of news by delivering innovative and compelling content that resonates with our readers. We aspire to be a trusted source of information, inspiring positive change through our reporting.',
  },
  {
    title: 'Our Values',
    text: 'Our values define who we are and guide everything we do. We stand for honesty, responsibility, and respect for our readers. We are committed to transparency and fairness, ensuring that every story we tell upholds the highest standards of journalism. These principles shape our work and strengthen the trust we build with our audience.',
  },
  {
    title: 'Our Story',
    text: 'Our story is one of passion for truth and dedication to meaningful reporting. Founded on the belief that information has the power to transform society, we have grown into a platform that connects people with the news that matters most. Through constant innovation and unwavering commitment, we continue to evolve, driven by the stories that inspire and inform.',
  },
];

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
