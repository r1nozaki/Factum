import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Page404 from '../pages/404';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/sports', component: Page404 },
  { path: '/politics', component: Page404 },
  { path: '/entertainment', component: Page404 },
  { path: '/business', component: Page404 },
  { path: '/health', component: Page404 },
  { path: '/science', component: Page404 },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Page404 },
  { path: '/authors', component: Page404 },
  { path: '*', component: Page404 },
];
