import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Label from '../UI/Label';
import Btn from '../UI/Btn';
import emailjs from '@emailjs/browser';
import { Mail, MailPlus, ArchiveRestore } from 'lucide-react';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Missing email')
    .email('Please enter a valid email address'),
});

const SubscribeForm = ({}) => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);

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
        setTimeout(() => {
          setIsSending(false);
        }, 3000);
        reset();
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col sm:flex-row gap-3 w-full sm:gap-2 md:w-[50%] xl:w-[45%]'
    >
      <Label className='w-full'>
        <div className='flex items-center w-full mb-2'>
          <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
          <input
            {...register('email')}
            placeholder='Enter your email'
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 pl-9 lg:pl-10'
          />
        </div>
        {errors.email && (
          <div className='text-white text-sm'>{errors.email.message}</div>
        )}
      </Label>
      <Btn type='submit' disabled={isSending} className='bg-black text-white'>
        {isSending ? (
          <ArchiveRestore />
        ) : (
          <>
            Subscribe <MailPlus />
          </>
        )}
      </Btn>
    </form>
  );
};

export default SubscribeForm;
