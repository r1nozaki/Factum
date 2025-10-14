import TopNews from '../../components/Hero/TopNews';
import AboutBanner from '../../components/About/AboutBanner';
import SportsSection from '../../components/Hero/SportsSection';
import TopAuthors from '../../components/Authors/TopAuthors';
import Category from '../../components/Category/Category';
import BusinessSection from '../../components/Hero/BusinessSection';
import Subscribe from '../../components/Subscribe/Subscribe';
const HomePage = () => {
  return (
    <>
      <TopNews />
      <AboutBanner />
      <SportsSection />
      <TopAuthors />
      <Category />
      <BusinessSection />
      <Subscribe />
    </>
  );
};

export default HomePage;
