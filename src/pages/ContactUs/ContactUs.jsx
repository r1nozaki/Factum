import Banner from '../../components/Banner';
import ContactInfo from '../../components/Contact/ContactInfo';
import GetInTouch from '../../components/Contact/GetInTouch';
import Subscribe from '../../components/Subscribe/Subscribe';
const ContactUs = () => {
  return (
    <>
      <Banner
        title={'Contact Us'}
        description={
          'Have questions or suggestions? We’d love to hear from you! Share your feedback to help us improve your experience.'
        }
      />
      <ContactInfo />
      <GetInTouch />
      <Subscribe />
    </>
  );
};

export default ContactUs;
