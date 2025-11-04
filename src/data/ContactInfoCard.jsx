import { MapPinned, MailPlus, PhoneCall } from 'lucide-react';

const cardInfo = [
  {
    icon: (
      <MapPinned className='w-10 lg:w-12 h-10 lg:h-12 stroke-1 m-auto text-[#DA4934]' />
    ),
    title: 'Visit Our Office',
    text: '93X Hilgard Ave, Los Angeles, CA 900XX, United States.',
    prePath: '',
  },
  {
    icon: (
      <MailPlus className='w-10 lg:w-12 h-10 lg:h-12 stroke-1 m-auto text-[#DA4934]' />
    ),
    title: 'Email Address',
    text: ['example@exdosstudio.com', 'info@exdosstudio.com'],
    prePath: 'mailto',
  },
  {
    icon: (
      <PhoneCall className='w-10 lg:w-12 h-10 lg:h-12 stroke-1 m-auto text-[#DA4934]' />
    ),
    title: 'Phone number',
    text: ['+1-2353-4352-555', '01 (541) 258 360'],
    prePath: 'tel',
  },
];

export default cardInfo;
