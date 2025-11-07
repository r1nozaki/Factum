import SubscribeForm from './SubscribeForm';

const SubscribeContent = ({ className = '' }) => {
  return (
    <>
      <div
        className={`w-full text-white mb-5 md:mb-0 md:w-[45%] lg:w-[40%] xl:w-[35%]`}
      >
        <h3 className='w-full font-semibold text-2xl mb-2'>
          Subscribe Our Newsletter
        </h3>
        <p className={`text-base ${className}`}>
          Stay updated with the latest news and exclusive content by subscribing
          to our newsletter.
        </p>
      </div>
      <SubscribeForm />
    </>
  );
};

export default SubscribeContent;
