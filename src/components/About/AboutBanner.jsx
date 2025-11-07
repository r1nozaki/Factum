import BtnLink from '../UI/BtnLink';
import Socials from '../../components/common/Socials';

const AboutBanner = () => {
  return (
    <section className='relative flex items-center w-full p-5 md:p-10 rounded-md overflow-hidden bg-[#DA4934] mb-12 lg:mb-20 xl:mb-28'>
      <div className='w-full'>
        <div className='flex flex-col-reverse w-full gap-5 lg:flex-row lg:gap-10'>
          <div className='w-full'>
            <p className='mb-5 text-base text-white/90'>
              We believe every idea deserves to shine. From innovative solutions
              to personalized experiences, we’re here to make your vision a
              reality. Curious how we make it happen?
            </p>
            <BtnLink link={'/about'} className='text-white bg-black'>
              About Us
            </BtnLink>
          </div>
          <div className='w-full'>
            <p className='mb-5 text-base text-white/90'>
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
