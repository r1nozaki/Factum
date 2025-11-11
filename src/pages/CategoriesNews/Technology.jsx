import CategoryNews from '../../components/News/CategoryNews';

const Technology = () => {
  return (
    <>
      <title>Technology News</title>
      <meta name='content' description='Technology News' />
      <CategoryNews
        category='technology'
        title='Technology News'
        totalCount={10}
      />
    </>
  );
};

export default Technology;
