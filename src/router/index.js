import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Authors from '../pages/Authors';
import Sports from '../pages/CategoriesNews/Sports';
import Technology from '../pages/CategoriesNews/Technology';
import Business from '../pages/CategoriesNews/Business';
import Health from '../pages/CategoriesNews/Health';
import Science from '../pages/CategoriesNews/Science';
import Entertainment from '../pages/CategoriesNews/Entertainment';
import Page404 from '../pages/404';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/sports', component: Sports },
  { path: '/technology', component: Technology },
  { path: '/business', component: Business },
  { path: '/health', component: Health },
  { path: '/science', component: Science },
  { path: '/entertainment', component: Entertainment },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Page404 },
  { path: '/authors', component: Authors },
  { path: '*', component: Page404 },
];
