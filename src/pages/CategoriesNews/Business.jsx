import CategoryNews from '../../components/News/CategoryNews';

const Business = () => {
  return (
    <>
      <title>Business News</title>
      <meta name='content' description='Business News' />
      <CategoryNews category='business' title='Business News' totalCount={20} />
    </>
  );
};

export default Business;
