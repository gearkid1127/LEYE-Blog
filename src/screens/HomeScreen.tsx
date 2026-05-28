import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { fetchBlogs } from '../services/api';
import { Blog } from '../types/blog';

export default function HomeScreen() {
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
          justifyContent: 'center',
          alignItems: 'center',
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
        <View
          style={{
            padding: 16,
            borderBottomWidth: 1,
          }}
        >
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}