import BtnLink from '../UI/BtnLink';
import Socials from '../Socials';

const AboutBanner = () => {
  return (
    <section className='relative flex items-center w-full p-5 md:p-10 rounded-md overflow-hidden bg-[#DA4934] mb-12 lg:mb-20 xl:mb-28'>
      <div className='w-full'>
        <h3 className='w-full font-semibold text-2xl text-white mb-3'>
          Imagine your ad hear
        </h3>
        <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 w-full'>
          <div className='w-full'>
            <p className='text-white/90 mb-5 text-base'>
              We believe every idea deserves to shine. From innovative solutions
              to personalized experiences, we’re here to make your vision a
              reality. Curious how we make it happen?
            </p>
            <BtnLink link={'/about'} className='bg-black text-white'>
              About Us
            </BtnLink>
          </div>
          <div className='w-full'>
            <p className='text-white/90 mb-5 text-base'>
              Join our community and see the story behind our work. Follow us
              for insights, updates, and behind-the-scenes moments.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
