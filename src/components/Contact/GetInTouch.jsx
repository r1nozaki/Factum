import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const GetInTouch = () => {
  return (
    <section className='relative grid md:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-5 lg:gap-10 w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='w-full'>
        <div className='w-full mb-5 lg:mb-8'>
          <h3 className='w-full font-semibold text-2xl mb-2'>Get in touch</h3>
          <p className='w-full sm:max-w-[90%] lg:max-w-[80%] text-base'>
            Select layout follower boolean editor flows. Scrolling variant move
            font group variant layout device share.
          </p>
        </div>
        <ContactForm />
      </div>
      <ContactMap />
    </section>
  );
};

export default GetInTouch;
