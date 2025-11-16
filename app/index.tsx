import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/(root)/(tabs)");
  };
  return (
    <View className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <ImageBackground
          source={images.homescreenbg}
          resizeMode="cover"
          className="flex-1 w-full h-4/6"
        >
          <View className="flex-1 bg-black/40 justify-center items-center px-4 mt-96">
            <Text className="text-white text-4xl font-sora-bold text-center leading-relaxed">
              Fall in Love with Coffee in Blissful Delight!
            </Text>
            <Text className="mt-5 text-lg text-grey font-sora-regular text-center">
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
            <TouchableOpacity
              onPress={handlePress}
              className="bg-primary rounded-3xl w-full py-8 mt-10"
            >
              <Text className="text-white text-2xl font-sora-semibold text-center">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
