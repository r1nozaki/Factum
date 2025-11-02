import { Outlet } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './helpers/ScrollToTop';

import './App.css';

const App = () => {
  return (
    <>
      <ScrollToTop />
      {<Header />}
      {
        <main className='pt-20 relative  w-full max-w-screen-2xl px-4 sm:px-5 min-h-screen'>
          <Outlet />
        </main>
      }
      {<Footer />}
    </>
  );
};

export default App;
