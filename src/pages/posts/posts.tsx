import { useEffect } from 'react';

import { Post } from './components/post/post';
import { usePostsStore } from './posts.store';
import { Loader } from '../../components/loader/loader';

import './index.scss';
import { Counter } from '../counter/components/counter/counter';

export const PostsPage = () => {
  const { loading, error, posts, getPosts, clear } = usePostsStore();

  useEffect(() => {
    getPosts();
    return () => clear();
  }, []);

  return (
    <div className="posts">
      <h1 className="posts__heading">Posts</h1>
      <Counter />
      <div className="posts__body">
        {error ? (
          <h2 className="posts__error">{error}</h2>
        ) : (
          <>
            {loading && !posts ? (
              <div className="posts__loader">
                <Loader />
              </div>
            ) : (
              <div className="posts__list">
                {posts?.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
