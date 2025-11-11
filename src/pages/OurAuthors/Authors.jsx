import AllAUthors from '../../components/Authors/AllAuthors';
import Category from '../../components/Category/Category';
import Subscribe from '../../components/Subscribe/Subscribe';
import Banner from '../../components/UI/Banner';
const Authors = () => {
  return (
    <>
      <title>Our Authors</title>
      <meta name='content' description='All news authors' />
      <Banner
        title={'Our Authors'}
        description={
          'Get the latest buzz on movies, TV shows, music, and more with our Entertainment coverage.'
        }
      />
      <AllAUthors />
      <Category />
      <Subscribe />
    </>
  );
};

export default Authors;
