import create from 'zustand';
import { IPost, IResponseErr } from '../../@types/entities';
import { getPosts as getPostsRequest } from '../../services';

interface IPostsStore {
  loading: boolean;
  error: string | null;
  posts: IPost[] | null;
  getPosts: () => void;
  clear: () => void;
}
export const usePostsStore = create<IPostsStore>((set) => ({
  loading: false,
  error: null,
  posts: null,
  getPosts: async () => {
    set((state) => ({ ...state, loading: true }));

    try {
      const posts = await getPostsRequest();
      set((state) => ({ ...state, loading: false, error: null, posts }));
    } catch (error: any) {
      const { message } = error as IResponseErr;
      set((state) => ({
        ...state,
        loading: false,
        error: message,
      }));
    }
  },
  clear: () => {
    set((state) => ({ ...state, error: null, loading: false, posts: null }));
  },
}));
