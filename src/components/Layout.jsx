import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      {<Header />}
      {
        <main className='pt-20 relative  w-full max-w-screen-2xl px-4 sm:px-5 min-h-screen'>
          {children}
        </main>
      }
      {<Footer />}
    </>
  );
};

export default Layout;
