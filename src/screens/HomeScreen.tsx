import { useEffect, useState } from "react";
import { Pressable, FlatList, Text, View } from "react-native";

import { fetchBlogs } from "../services/api";
import { Blog } from "../types/blog";
import BlogCard from "../components/BlogCard";
import HomeSkeleton from "../components/HomeSkeleton";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

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
    return <HomeSkeleton />;
  }
  const filteredBlogs =
    selectedTopic === "All Articles"
      ? blogs
      : blogs.filter((blog) => blog.topics.includes(selectedTopic));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "700",
            color: "#3A3036",
            paddingHorizontal: 16,
            paddingTop: 48,
            paddingBottom: 16,
          }}
        >
          Newsfeed
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingTop: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#E5E5E5",
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
                    color: isActive ? "#258834" : "#194A23",
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
          ListEmptyComponent={
            <View
              style={{
                padding: 24,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#3A3036",
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                No articles found
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "#41424A",
                  textAlign: "center",
                  lineHeight: 22,
                }}
              >
                There are no articles for this topic right now. Check back soon
                for new updates.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
