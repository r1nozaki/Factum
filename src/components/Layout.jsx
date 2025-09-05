import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      {<Header />}
      {
        <main className='bg-[#F1F2F3] pt-20 relative  w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
          {children}
        </main>
      }
      {<Footer />}
    </>
  );
};

export default Layout;
