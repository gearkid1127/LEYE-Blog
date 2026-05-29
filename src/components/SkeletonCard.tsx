import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export default function SkeletonCard() {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        gap: 12,
      }}
    >
      <Animated.View
        style={{
          width: 150,
          height: 100,
          borderRadius: 4,
          backgroundColor: "#E5E7EB",
          opacity,
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            height: 20,
            width: "90%",
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
            marginBottom: 8,
            opacity,
          }}
        />

        <Animated.View
          style={{
            height: 20,
            width: "70%",
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
            marginBottom: 12,
            opacity,
          }}
        />

        <Animated.View
          style={{
            height: 14,
            width: "40%",
            backgroundColor: "#E5E7EB",
            borderRadius: 4,
            opacity,
          }}
        />
      </View>
    </View>
  );
}
