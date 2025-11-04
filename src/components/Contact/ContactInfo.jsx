import ContactInfoCard from './ContactInfoCard';
import cardInfo from '../../data/ContactInfoCard';
const ContactInfo = () => {
  return (
    <section className='relative grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 w-full mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
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
