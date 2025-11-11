import { useState } from 'react';
import Notification from '../common/Notification';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
const GetInTouch = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className='relative grid items-center w-full gap-8 mb-10 md:grid-cols-2 sm:gap-10 md:gap-5 lg:gap-10 sm:mb-12 lg:mb-20 xl:mb-24'>
      <div className='w-full'>
        <div className='w-full mb-5 lg:mb-8'>
          <h3 className='w-full mb-2 text-2xl font-semibold'>Get in touch</h3>
          <p className='w-full sm:max-w-[90%] lg:max-w-[80%] text-base'>
            Select layout follower boolean editor flows. Scrolling variant move
            font group variant layout device share.
          </p>
        </div>
        <ContactForm setSuccess={setSuccess} setError={setError} />
      </div>
      <ContactMap />
      {success && (
        <Notification
          type='success'
          message='Thank you for your message!'
          className='fixed z-10 -translate-x-1/2 bottom-5 left-1/2 md:left-auto md:right-5 md:translate-x-0 w-100 md:w-auto'
        />
      )}
      {error && (
        <Notification
          type='error'
          message='An error has occurred! Please try again.'
          className='fixed z-10 -translate-x-1/2 bottom-5 left-1/2 md:left-auto md:right-5 md:translate-x-0 w-100 md:w-auto'
        />
      )}
    </section>
  );
};

export default GetInTouch;
