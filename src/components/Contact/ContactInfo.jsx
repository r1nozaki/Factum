import cardInfo from '../../data/ContactInfoCard';
import ContactInfoCard from './ContactInfoCard';
const ContactInfo = () => {
  return (
    <section className='relative grid w-full gap-4 mb-10 lg:grid-cols-3 sm:gap-5 lg:gap-4 xl:gap-5 sm:mb-12 lg:mb-20 xl:mb-24'>
      {cardInfo.map(card => (
        <ContactInfoCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          text={card.text}
          prePath={card.prePath}
        />
      ))}
    </section>
  );
};

export default ContactInfo;
