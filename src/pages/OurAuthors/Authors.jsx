import Banner from '../../components/Banner';
import AllAUthors from '../../components/Authors/AllAuthors';
import Category from '../../components/Category/Category';
import Subscribe from '../../components/Subscribe/Subscribe';
const Authors = () => {
  return (
    <>
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
