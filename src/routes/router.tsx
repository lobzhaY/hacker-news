import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p> Error Page </p>,
    children: [
      {
        index: true,
        element: <p>Main Page </p>,
      },
      {
        path: ':id',
        element: <p>Info Page </p>,
      },
    ],
  },
  {
    path: '*',
    element: <p>Not Found Page </p>,
  },
]);

export default router;
