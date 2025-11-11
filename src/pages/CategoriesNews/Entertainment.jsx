import CategoryNews from '../../components/News/CategoryNews';

const Entertainment = () => {
  return (
    <>
      <title>Entertainment News</title>
      <meta name='content' description='Entertainment News' />
      <CategoryNews
        category='entertainment'
        title='Entertainment News'
        totalCount={20}
      />
    </>
  );
};

export default Entertainment;
