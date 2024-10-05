import {createBrowserRouter} from 'react-router-dom';

import App from '@/App';
import Layout from '@/components/Layout';
import About from '@/pages/About';

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
      }
    ]
  }
]);
