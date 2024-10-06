import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Layout from '@/components/Layout';
import NotFound from '@/pages/404';
import About from '@/pages/About';
import Profile from '@/pages/profile/[id]';
import Top from '@/pages/Top';

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
        path: 'top',
        element: <Top />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
