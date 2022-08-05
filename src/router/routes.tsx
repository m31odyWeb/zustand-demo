import { Navigate, RouteObject } from 'react-router-dom';
import { CounterPage } from '../pages/counter/counter';
import { PostsPage } from '../pages/posts/posts';

export enum RouterBook {
  'Home' = '/',
  'Counter' = 'counter',
  'Posts' = 'posts',
}

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={RouterBook.Counter} />,
  },
  {
    path: RouterBook.Counter,
    element: <CounterPage />,
  },
  {
    path: RouterBook.Posts,
    element: <PostsPage />,
  },
];
