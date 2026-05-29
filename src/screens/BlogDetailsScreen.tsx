import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "BlogDetail">;

export default function BlogDetailScreen({ route, navigation }: Props) {
  const { blog } = route.params;
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#3A3036" />
        </Pressable>
        <Image
          source={{ uri: blog.featured_image.url }}
          style={{
            width: "100%",
            height: 171,
            marginTop: 0,
            marginBottom: 8,
          }}
        />

        <View
          style={{
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#3A3036",
              marginBottom: 8,
              lineHeight: 28,
            }}
          >
            {blog.title}
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: "#41424A",
              marginBottom: 20,
            }}
          >
            {blog.created_at}
          </Text>

          <RenderHtml
            contentWidth={width - 32}
            source={{ html: blog.content }}
            baseStyle={{
              fontSize: 17,
              lineHeight: 22,
              color: "#3A3036",
              fontWeight: "400",
              letterSpacing: 0,
              marginBottom: 16,
            }}
            tagsStyles={{
              p: {
                fontSize: 17,
                lineHeight: 22,
                color: "#3A3036",
                marginBottom: 16,
                fontWeight: "400",
              },
              h2: {
                fontSize: 17,
                fontWeight: "700",
                color: "#3A3036",
                marginTop: 24,
                marginBottom: 17,
              },
              a: {
                color: "#258834",
                textDecorationLine: "none",
              },
              strong: {
                fontWeight: "700",
              },
              img: {
                marginTop: 24,
                marginBottom: 16,
              },
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
