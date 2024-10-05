import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Layout from '@/components/Layout';
import About from '@/pages/About';
import Profile from '@/pages/profile/[id]';
import NotFound from '@/pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'profile/:id',
        element: <Profile />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
