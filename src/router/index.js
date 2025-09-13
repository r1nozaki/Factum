import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Authors from '../pages/Authors';
import Sports from '../pages/CategoriesNews/Sports';
import Page404 from '../pages/404';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/sports', component: Sports },
  { path: '/technology', component: Page404 },
  { path: '/entertainment', component: Page404 },
  { path: '/business', component: Page404 },
  { path: '/health', component: Page404 },
  { path: '/science', component: Page404 },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Page404 },
  { path: '/authors', component: Authors },
  { path: '*', component: Page404 },
];
