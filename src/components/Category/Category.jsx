import BtnCategory from './BtnCategory';
import categoryContent from '../../data/CategoryContent';

const Category = () => {
  return (
    <section className='relative w-full mb-12 lg:mb-20 xl:mb-28'>
      <h2 className='w-full font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 lg:mb-7'>
        Explore by Categories
      </h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 xl:gap-5 w-full'>
        {categoryContent.map(category => (
          <BtnCategory
            key={category.title}
            link={category.link}
            categoryIcon={category.icon}
          >
            {category.title}
          </BtnCategory>
        ))}
      </div>
    </section>
  );
};

export default Category;
