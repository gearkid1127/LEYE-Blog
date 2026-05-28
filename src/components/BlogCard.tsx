import { Text, View } from 'react-native';

import { Blog } from '../types/blog';

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <View
      style={{
        padding: 16,
        borderBottomWidth: 1,
      }}
    >
      <Text>{blog.title}</Text>
    </View>
  );
}