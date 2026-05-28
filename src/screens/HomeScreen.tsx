import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { fetchBlogs } from "../services/api";
import { Blog } from "../types/blog";
import BlogCard from "../components/BlogCard";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  BlogDetail: {
    blog: Blog;
  };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={blogs}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => (
        <BlogCard blog={item} navigation={navigation} />
      )}
    />
  );
}
