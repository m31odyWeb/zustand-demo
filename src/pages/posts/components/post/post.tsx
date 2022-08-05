import { FC } from 'react';

import { IPost } from '../../../../@types/entities';

import './index.scss';

interface IProps {
  post: IPost;
}

export const Post: FC<IProps> = ({ post }) => {
  const { userId, title, body } = post;
  return (
    <div className="post">
      <div className="post__user">{userId}</div>
      <div className="post__title">{title}</div>
      <div className="post__body">{body}</div>
    </div>
  );
};
