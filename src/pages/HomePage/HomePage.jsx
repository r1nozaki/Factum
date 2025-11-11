import AboutBanner from '../../components/About/AboutBanner';
import TopAuthors from '../../components/Authors/TopAuthors';
import Category from '../../components/Category/Category';
import BusinessSection from '../../components/Hero/BusinessSection';
import SportsSection from '../../components/Hero/SportsSection';
import TopNews from '../../components/Hero/TopNews';
import Subscribe from '../../components/Subscribe/Subscribe';
const HomePage = () => {
  return (
    <>
      <title>Homepage</title>
      <meta name='content' description='Factum homepage' />
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
