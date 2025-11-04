import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BtnLink from '../UI/BtnLink';

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
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

  const onSubmit = data => {
    console.log(data);

    reset();
  };
  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid lg:grid-cols-2 gap-4 lg:gap-5 w-full mb-5'>
        <div className='flex flex-col'>
          <input
            {...register('firstName')}
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 mb-2 last:mb-0'
            placeholder='First Name'
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>{errors.firstName.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('lastName')}
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 mb-2 last:mb-0'
            placeholder='Last Name'
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm'>{errors.lastName.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('email')}
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 mb-2 last:mb-0'
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            {...register('phone')}
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 mb-2 last:mb-0'
            placeholder='Phone'
          />
          {errors.phone && (
            <p className='text-red-500 text-sm'>{errors.phone.message}</p>
          )}
        </div>
        <textarea
          className='relative w-full h-36 text-base px-5 py-3 rounded outline-none resize-none border border-gray-200 bg-white focus:border-black transition-all duration-300 col-span-2'
          placeholder='Type Your Message'
        ></textarea>
      </div>
      <BtnLink
        type='submit'
        className='relative flex items-center justify-center gap-1 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 bg-red-500'
      >
        Send
      </BtnLink>
    </form>
  );
};

export default ContactForm;
