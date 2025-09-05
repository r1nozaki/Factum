import Banner from '../components/UI/Banner';
import AboutInfo from '../components/About/AboutInfo';
import WhoWeAre from '../components/About/WhoWeAre';
import { About1, About2 } from '../assets/AboutImg';

const aboutContent1 = [
  {
    text: 'Our journalism is guided by unwavering integrity, upholding the highest standards of accuracy, impartiality, and fairness.',
  },
  {
    text: 'We prioritize accuracy, impartiality, and transparency in our reporting, ensuring that our readers receive reliable and trustworthy news.',
  },
  {
    text: 'We strive to provide reliable news that our readers can trust, making sure that our reporting is based on facts and thorough research, and free from bias or sensationalism.',
  },
];

const aboutContent2 = [
  {
    text: 'Our story started with a passion for news and a commitment to delivering accurate and reliable information to our readers. Over the years, we have grown from humble beginnings into a trusted source of news, constantly evolving and adapting to the changing media landscape.',
  },
  {
    text: 'We prioritize accuracy, impartiality, and transparency in our reporting, ensuring that our readers receive reliable and trustworthy news.',
  },
];

const AboutUs = () => {
  return (
    <>
      <Banner
        title={'About Us'}
        description={
          'Learn more about our mission, values, and commitment to excellence. Together, we aim to make a difference in every community we serve!'
        }
      />
      <AboutInfo
        side={'left'}
        img={About1}
        title={'Journalism with Integrity'}
        content={aboutContent1}
      />
      <WhoWeAre />
      <AboutInfo
        side={'right'}
        img={About2}
        title={'From Humble Beginnings'}
        content={aboutContent2}
      />
    </>
  );
};

export default AboutUs;
