import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
