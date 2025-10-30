import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, RouterProvider } from 'react-router';
import { router } from './router/router.jsx';

import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={'Loading...'}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
