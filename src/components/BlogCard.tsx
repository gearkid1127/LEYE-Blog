import { Image, Pressable, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Blog } from "../types/blog";

type Props = {
  blog: Blog;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function BlogCard({ blog, navigation }: Props) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("BlogDetail", {
          blog,
        });
      }}
    >
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Image
          source={{ uri: blog.featured_image.url }}
          style={{
            width: 150,
            height: 100,
            borderRadius: 4,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 8,
            }}
          >
            {blog.title}
          </Text>

          <Text>{blog.created_at}</Text>
        </View>
      </View>
    </Pressable>
  );
}
