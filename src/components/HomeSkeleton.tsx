import { View } from "react-native";

import SkeletonCard from "./SkeletonCard";

export default function HomeSkeleton() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 48,
          paddingBottom: 32,
        }}
      >
        <View
          style={{
            width: 170,
            height: 40,
            borderRadius: 6,
            backgroundColor: "#E5E7EB",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
        }}
      >
        {[80, 70, 55].map((width) => (
          <View
            key={width}
            style={{
              width,
              height: 18,
              borderRadius: 4,
              backgroundColor: "#E5E7EB",
              marginRight: 24,
              marginBottom: 8,
            }}
          />
        ))}
      </View>

      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </View>
  );
}