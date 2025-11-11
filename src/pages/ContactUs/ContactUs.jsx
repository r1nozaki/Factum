import ContactInfo from '../../components/Contact/ContactInfo';
import GetInTouch from '../../components/Contact/GetInTouch';
import Subscribe from '../../components/Subscribe/Subscribe';
import Banner from '../../components/UI/Banner';
const ContactUs = () => {
  return (
    <>
      <title>Contact us</title>
      <meta name='content' description='Factum contact' />
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
