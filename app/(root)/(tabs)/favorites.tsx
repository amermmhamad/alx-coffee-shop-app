import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const favorites = () => {
  return (
    <SafeAreaView className="flex-1 justify-center align-center">
      <Text className="text-center font-sora-extrabold">
        You can find your favorite products here!
      </Text>
    </SafeAreaView>
  );
};

export default favorites;
