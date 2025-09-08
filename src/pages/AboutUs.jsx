import Banner from '../components/Banner';
import AboutInfo from '../components/About/AboutInfo';
import WhoWeAre from '../components/About/WhoWeAre';
import TopAuthors from '../components/Authors/TopAuthors';
import Category from '../components/Category/Category';
import Subscribe from '../components/Subscribe/Subscribe';
import { About1, About2 } from '../assets/AboutImg';
import { aboutContent1, aboutContent2 } from '../data/About';
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
      <TopAuthors />
      <Category />
      <Subscribe />
    </>
  );
};

export default AboutUs;
