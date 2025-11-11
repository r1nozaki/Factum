import { Outlet } from 'react-router';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollToTop from './helpers/ScrollToTop';

import './App.css';

const App = () => {
  return (
    <>
      <ScrollToTop />
      {<Header />}
      {
        <main className='relative w-full min-h-screen px-4 pt-20 max-w-screen-2xl sm:px-5'>
          <Outlet />
        </main>
      }
      {<Footer />}
    </>
  );
};

export default App;
