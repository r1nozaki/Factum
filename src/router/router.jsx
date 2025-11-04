import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

export const ROUTER_PATHS = {
  HOME: '/',
  ABOUTUS: '/about',
  AUTHORS: '/authors',
  AUTHOR: '/authors/:id',
  NEWS: '/news/:id',
  CONTACT: '/contact',
  SPORTS: '/sports',
  TECHNOLOGY: '/technology',
  BUSINESS: '/business',
  HEALTH: '/health',
  ENTERTAINMENT: '/entertainment',
};

const AppLayout = lazy(() => import('../App'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutUsPage = lazy(() => import('../pages/AboutUs/AboutUs'));
const AuthorsPage = lazy(() => import('../pages/OurAuthors/Authors'));
const AuthorPage = lazy(() => import('../pages/AboutAuthor/AboutAuthor'));
const SportsNewsPage = lazy(() => import('../pages/CategoriesNews/Sports'));
const TechnologysNewsPage = lazy(() =>
  import('../pages/CategoriesNews/Technology'),
);
const BusinessNewsPage = lazy(() => import('../pages/CategoriesNews/Business'));
const HealthNewsPage = lazy(() => import('../pages/CategoriesNews/Health'));
const EntertainmentNewsPage = lazy(() =>
  import('../pages/CategoriesNews/Entertainment'),
);
const NewsByIdPage = lazy(() => import('../pages/NewsDetails/AboutNews'));
const ContactPage = lazy(() => import('../pages/ContactUs/ContactUs'));
const NotFoundPage = lazy(() => import('../pages/404Page/404'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTER_PATHS.ABOUTUS, element: <AboutUsPage /> },
      { path: ROUTER_PATHS.AUTHORS, element: <AuthorsPage /> },
      { path: ROUTER_PATHS.AUTHOR, element: <AuthorPage /> },
      { path: ROUTER_PATHS.SPORTS, element: <SportsNewsPage /> },
      { path: ROUTER_PATHS.TECHNOLOGY, element: <TechnologysNewsPage /> },
      { path: ROUTER_PATHS.BUSINESS, element: <BusinessNewsPage /> },
      { path: ROUTER_PATHS.HEALTH, element: <HealthNewsPage /> },
      { path: ROUTER_PATHS.ENTERTAINMENT, element: <EntertainmentNewsPage /> },
      { path: ROUTER_PATHS.NEWS, element: <NewsByIdPage /> },
      { path: ROUTER_PATHS.CONTACT, element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
