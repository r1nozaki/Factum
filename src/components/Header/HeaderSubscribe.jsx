import { AnimatePresence, motion } from 'motion/react';
import useBlockScroll from '../../hooks/useBlockScroll';
import Btn from '../UI/Btn';
import { X, Mail, MailPlus } from 'lucide-react';
import Label from '../UI/Label';
import BtnLink from '../UI/BtnLink';

const HeaderSubscribe = ({ subscribe, setOpenSubscribe }) => {
  useBlockScroll(subscribe);

  const handleSubscribe = () => {
    setOpenSubscribe(!subscribe);
  };

  return (
    <>
      {!subscribe && (
        <Btn
          onClick={handleSubscribe}
          className='hidden lg:block text-black border hover:bg-black hover:text-white '
        >
          Subscribe
        </Btn>
      )}
      <AnimatePresence>
        {subscribe && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black'
              onClick={handleSubscribe}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='fixed z-10 top-[50%] left-[50%] w-[calc(100%-32px)] sm:w-[560px] md:w-[660px] p-6 lg:p-8 rounded-lg border border-gray-200 bg-white transition-all duration-300 -translate-x-[50%]  -translate-y-[50%]'>
                <button
                  onClick={handleSubscribe}
                  className='absolute top-2 sm:top-4 right-2 sm:right-4 outline-0 text-black transition-colors duration-300 hover:text-red-500 hover:cursor-pointer'
                >
                  <X size={28} />
                </button>
                <div className='w-full mb-5'>
                  <h3 className='w-full font-semibold text-2xl mb-1 sm:mb-2'>
                    Subscribe Our Newsletter
                  </h3>
                  <p className='text-base'>
                    Stay updated with the latest news and exclusive content by
                    subscribing to our newsletter.
                  </p>
                </div>
                <form className='flex flex-col sm:flex-row gap-3 w-full sm:gap-2'>
                  <Label className='flex items-center'>
                    <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 pl-9 lg:pl-10'
                    />
                  </Label>
                  <Btn className='bg-black text-white'>
                    Subcribe <MailPlus />
                  </Btn>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSubscribe;
