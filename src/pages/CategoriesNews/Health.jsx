import CategoryNews from '../../components/News/CategoryNews';

const Health = () => {
  return (
    <>
      <title>Health News</title>
      <meta name='content' description='Health News' />
      <CategoryNews category='health' title='Health News' totalCount={10} />
    </>
  );
};

export default Health;
