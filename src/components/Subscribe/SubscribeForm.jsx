import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArchiveRestore, Mail, MailPlus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Btn from '../UI/Btn';
import Label from '../UI/Label';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Missing email')
    .email('Please enter a valid email address'),
});

const SubscribeForm = ({ setError, setSuccess }) => {
  const [isSending, setIsSending] = useState(false);

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
        setTimeout(() => {
          setSuccess(false);
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
          <Mail className='absolute z-10 w-5 h-5 stroke-1 left-2 lg:w-6 lg:h-6 text-black/50' />
          <input
            {...register('email')}
            placeholder='Enter your email'
            className='relative w-full h-10 px-5 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black pl-9 lg:pl-10'
          />
        </div>
        {errors.email && (
          <div className='text-sm text-white'>{errors.email.message}</div>
        )}
      </Label>
      <Btn type='submit' disabled={isSending} className='text-white bg-black'>
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
