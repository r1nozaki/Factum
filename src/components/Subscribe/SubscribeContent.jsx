import { useState } from 'react';
import Notification from '../common/Notification';
import SubscribeForm from './SubscribeForm';

const SubscribeContent = ({ className = '' }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <div
        className={`w-full text-white mb-5 md:mb-0 md:w-[45%] lg:w-[40%] xl:w-[35%]`}
      >
        <h3 className='w-full mb-2 text-2xl font-semibold'>
          Subscribe Our Newsletter
        </h3>
        <p className={`text-base ${className}`}>
          Stay updated with the latest news and exclusive content by subscribing
          to our newsletter.
        </p>
      </div>
      <SubscribeForm setSuccess={setSuccess} setError={setError} />
      {success && (
        <Notification
          type='success'
          message='Thank you for subscribing to our newsletter!'
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
    </>
  );
};

export default SubscribeContent;
