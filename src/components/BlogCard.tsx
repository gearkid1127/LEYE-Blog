import { Image, Pressable, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";
import { Blog } from "../types/blog";
import isNewPost from "../utils/isNewPost";

type Props = {
  blog: Blog;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function BlogCard({ blog, navigation }: Props) {
  const isNew = isNewPost(blog.created_at);
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("BlogDetail", { blog });
      }}
    >
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <View
          style={{
            position: "relative",
            width: 150,
            height: 100,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: blog.featured_image.url }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          {isNew && (
            <View
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                backgroundColor: "#168A3A",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 999,
                zIndex: 1,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                NEW!
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            flex: 1,
            
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "700",
              marginBottom: 16,
              color: "#3A3036",
            }}
          >
            {blog.title}
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: "#41424A",
              fontWeight: "400",
            }}
          >
            {blog.created_at}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}