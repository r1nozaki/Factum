import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      {<Header />}
      {<main className='bg-[#F1F2F3] pt-20'>{children}</main>}
      {<Footer />}
    </>
  );
};

export default Layout;
