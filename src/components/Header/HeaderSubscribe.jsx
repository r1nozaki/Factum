import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArchiveRestore, Mail, MailPlus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useBlockScroll from '../../hooks/useBlockScroll';
import { lenis } from '../../lenisInstance';
import Btn from '../UI/Btn';
import Label from '../UI/Label';
import Notification from '../common/Notification';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Missing email')
    .email('Please enter a valid email address'),
});

const HeaderSubscribe = ({ subscribe, setOpenSubscribe, dark }) => {
  useBlockScroll(subscribe, lenis);

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = () => {
    setOpenSubscribe(!subscribe);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = data => {
    setIsSending(true);

    emailjs
      .send(
        'service_js2zd84',
        'template_mgy2igb',
        { email: data.email },
        'dY6zhES0umbcp97PU',
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        reset();
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 3000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      {!subscribe && (
        <Btn
          onClick={handleSubscribe}
          className={` border lg:block ${
            dark ? 'text-white bg-black' : 'text-black '
          } hover:bg-black hover:text-white`}
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
              <div className='fixed z-10 top-[50%] left-[50%] w-[calc(100%-32px)] sm:w-[560px] md:w-[660px] p-6 lg:p-8 rounded-lg border border-gray-200 bg-white transition-all duration-300 -translate-x-[50%] -translate-y-[50%]'>
                <button
                  onClick={handleSubscribe}
                  className='absolute text-black transition-colors duration-300 top-2 sm:top-4 right-2 sm:right-4 outline-0 hover:text-red-500 hover:cursor-pointer'
                >
                  <X size={28} />
                </button>

                <div className='w-full mb-5'>
                  <h3 className='w-full mb-1 text-2xl font-semibold sm:mb-2'>
                    Subscribe Our Newsletter
                  </h3>
                  <p className='text-base'>
                    Stay updated with the latest news and exclusive content by
                    subscribing to our newsletter.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col w-full gap-3 sm:flex-row sm:gap-2'
                >
                  <Label className='w-full'>
                    <div className='flex items-center w-full mb-2'>
                      <Mail className='absolute z-10 w-5 h-5 stroke-1 left-2 lg:w-6 lg:h-6 text-black/50' />
                      <input
                        {...register('email')}
                        placeholder='Enter your email'
                        className='relative w-full h-10 px-5 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black pl-9 lg:pl-10'
                      />
                    </div>
                    {errors.email && (
                      <div className='text-sm text-red-500'>
                        {errors.email.message}
                      </div>
                    )}
                  </Label>

                  <Btn
                    type='submit'
                    disabled={isSending}
                    className='text-white bg-black'
                  >
                    {isSending ? (
                      <ArchiveRestore />
                    ) : (
                      <>
                        Subscribe <MailPlus />
                      </>
                    )}
                  </Btn>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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

export default HeaderSubscribe;
