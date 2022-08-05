import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from './routes';

export const Router: FC = () => {
  const router = useRoutes(routes);
  return router;
};
