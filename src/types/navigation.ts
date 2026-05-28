import { Blog } from './blog';

export type RootStackParamList = {
  Home: undefined;

  BlogDetail: {
    blog: Blog;
  };
};