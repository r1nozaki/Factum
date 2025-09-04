import {
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Socials = ({ dark }) => {
  const SocialsIcon = [
    {
      icon: <FaTwitter />,
      link: 'https://x.com/r1nozaki',
      alt: 'Twitter',
    },
    {
      icon: <FaTelegramPlane />,
      link: 'https://web.telegram.org/k/#r1nozaki',
      alt: 'Telegram',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/_r1nozaki/?hl=ru',
      alt: 'Instagram',
    },
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw',
      alt: 'Youtube',
    },
  ];
  return (
    <div className='flex items-center justify-center lg:justify-start gap-4 w-full'>
      {SocialsIcon.map(social => (
        <a
          key={social.alt}
          href={social.link}
          alt={social.alt}
          target='_blank'
          className={`flex items-center justify-center rounded-full border-1 ${
            dark
              ? 'border-black hover:bg-black text-black hover:text-white'
              : 'border-white hover:bg-white text-white hover:text-black'
          } w-10 h-10 transition-colors duration-300 `}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
