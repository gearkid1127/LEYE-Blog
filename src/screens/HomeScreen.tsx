import { useEffect, useState } from "react";
import { Pressable, FlatList, Text, View } from "react-native";

import { fetchBlogs } from "../services/api";
import { Blog } from "../types/blog";
import BlogCard from "../components/BlogCard";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const TOPICS = ["All Articles", "Openings", "Guides"];

export default function HomeScreen({ navigation }: Props) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("All Articles");

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
  const filteredBlogs =
    selectedTopic === "All Articles"
      ? blogs
      : blogs.filter((blog) => blog.topics.includes(selectedTopic));

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingTop: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
        }}
      >
        {TOPICS.map((topic) => {
          const isActive = selectedTopic === topic;

          return (
            <Pressable
              key={topic}
              onPress={() => setSelectedTopic(topic)}
              style={{
                marginRight: 24,
                paddingBottom: 8,
                borderBottomWidth: isActive ? 3 : 0,
                borderBottomColor: "#168A3A",
              }}
            >
              <Text
                style={{
                  color: isActive ? "#168A3A" : "#3A3036",
                  fontWeight: isActive ? "700" : "400",
                }}
              >
                {topic}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        data={filteredBlogs}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <BlogCard blog={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
