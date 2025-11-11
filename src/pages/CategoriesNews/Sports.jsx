import CategoryNews from '../../components/News/CategoryNews';

const Sports = () => {
  return (
    <>
      <title>Sports News</title>
      <meta name='content' description='Sports News' />
      <CategoryNews category='sports' title='Sports News' totalCount={20} />
    </>
  );
};

export default Sports;
