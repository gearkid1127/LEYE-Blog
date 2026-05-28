import { Pressable, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Blog } from '../types/blog';



type Props = {
  blog: Blog;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Home'
  >;
};

export default function BlogCard({
  blog,
  navigation,
}: Props) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('BlogDetail', {
          blog,
        });
      }}
    >
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
        }}
      >
        <Text>{blog.title}</Text>
      </View>
    </Pressable>
  );
}