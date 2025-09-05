import Layout from './components/Layout';
import { routes } from './router/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                element={<route.component />}
                path={route.path}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
