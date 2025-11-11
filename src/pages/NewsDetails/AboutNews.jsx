import TopAuthors from '../../components/Authors/TopAuthors';
import Category from '../../components/Category/Category';
import BusinessSection from '../../components/Hero/BusinessSection';
import NewsDetails from '../../components/News/NewsDetails';
import Subscribe from '../../components/Subscribe/Subscribe';
const AboutNews = () => {
  return (
    <>
      <NewsDetails />
      <BusinessSection />
      <Category />
      <TopAuthors />
      <Subscribe />
    </>
  );
};

export default AboutNews;
