import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ItemPage } from '../pages/item-page';
import { MainPage } from '../pages/main-page';
import { ErrorPage } from '../pages/error-page';
import { NotFoundPage } from '../pages/not-found-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ':id',
        element: <ItemPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
