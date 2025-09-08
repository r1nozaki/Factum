import Label from '../UI/Label';
import Btn from '../UI/Btn';
import { Mail, MailPlus } from 'lucide-react';

const SubscribeForm = ({ setIsFormSubmitted }) => {
  const handeSubmit = () => {
    setIsFormSubmitted(true);
  };
  return (
    <form
      onSubmit={handeSubmit}
      className='flex flex-col sm:flex-row gap-3 w-full sm:gap-2 md:w-[50%] xl:w-[45%]'
    >
      <Label className='w-full'>
        <div className='flex items-center w-full mb-2'>
          <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray-200 bg-white focus:border-black transition-all duration-300 pl-9 lg:pl-10'
          />
        </div>
      </Label>
      <Btn className='bg-black text-white'>
        Subscribe <MailPlus />
      </Btn>
    </form>
  );
};

export default SubscribeForm;
