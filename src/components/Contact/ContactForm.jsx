import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import * as yup from 'yup';
import Btn from '../UI/Btn';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Missing first name')
    .min(2, 'The name must consist of at least 2 characters'),
  lastName: yup
    .string()
    .required('Missing last name')
    .min(2, 'The name must consist of at least 2 characters'),
  email: yup
    .string()
    .required('Missing email')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Missing phone')
    .matches(/^\+?[0-9\s\-()]{7,20}$/, 'Please enter a valid phone'),
  message: yup.string(),
});

const ContactForm = ({ setSuccess, setError }) => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

  const onSubmit = data => {
    setIsSending(true);

    emailjs
      .send(
        'service_js2zd84',
        'template_gyv1utb',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
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
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid w-full gap-4 mb-5 lg:grid-cols-2 lg:gap-5'>
        <div className='flex flex-col'>
          <input
            {...register('firstName')}
            className='relative w-full h-10 px-5 mb-2 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black last:mb-0'
            placeholder='First Name'
          />
          {errors.firstName && (
            <p className='text-sm text-red-500'>{errors.firstName.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('lastName')}
            className='relative w-full h-10 px-5 mb-2 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black last:mb-0'
            placeholder='Last Name'
          />
          {errors.lastName && (
            <p className='text-sm text-red-500'>{errors.lastName.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('email')}
            className='relative w-full h-10 px-5 mb-2 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black last:mb-0'
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-sm text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('phone')}
            className='relative w-full h-10 px-5 mb-2 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none lg:h-11 focus:border-black last:mb-0'
            placeholder='Phone'
          />
          {errors.phone && (
            <p className='text-sm text-red-500'>{errors.phone.message}</p>
          )}
        </div>
        <textarea
          {...register('message')}
          className='relative w-full col-span-2 px-5 py-3 text-base transition-all duration-300 bg-white border border-gray-200 rounded outline-none resize-none h-36 focus:border-black'
          placeholder='Type Your Message'
        ></textarea>
      </div>
      <Btn
        type='submit'
        disabled={isSending}
        className='relative flex items-center justify-center w-full h-10 gap-1 px-4 text-white transition-opacity duration-300 bg-red-500 rounded sm:w-fit sm:min-w-32 lg:min-w-36 lg:h-11 hover:opacity-80'
      >
        {isSending ? (
          <ClipLoader size={25} color='#ffffff' />
        ) : (
          <>
            Send <ArrowUpRight />
          </>
        )}
      </Btn>
    </form>
  );
};

export default ContactForm;
