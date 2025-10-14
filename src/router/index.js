import HomePage from '../pages/HomePage/HomePage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Authors from '../pages/OurAuthors/Authors';
import Sports from '../pages/CategoriesNews/Sports';
import Technology from '../pages/CategoriesNews/Technology';
import Business from '../pages/CategoriesNews/Business';
import Health from '../pages/CategoriesNews/Health';
import Entertainment from '../pages/CategoriesNews/Entertainment';
import Page404 from '../pages/404Page/404';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/sports', component: Sports },
  { path: '/technology', component: Technology },
  { path: '/business', component: Business },
  { path: '/health', component: Health },
  { path: '/entertainment', component: Entertainment },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Page404 },
  { path: '/authors', component: Authors },
  { path: '*', component: Page404 },
];
