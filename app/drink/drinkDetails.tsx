import SizeSelector from "@/components/SizeSelector";
import icons from "@/constants/icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const drinkDetails = () => {
  const params = useLocalSearchParams();
  const { id, name, type, price, rating, description, image } = params;
  const handlePress = () => {};

  return (
    <SafeAreaView className="bg-[#fcfcfc] h-full">
      <ScrollView className="px-10">
        <View className="flex flex-row items-center justify-between mt-10">
          <Image source={icons.arrowLeft} />
          <Text className="font-sora text-xl">Detail</Text>
          <TouchableOpacity>
            <Image source={icons.heart} />
          </TouchableOpacity>
        </View>
        <View className="mt-10">
          <View>
            <Image source={image} className="rounded-2xl w-full" />
          </View>
          <View className="mt-10 flex flex-col">
            <Text className="font-sora-bold text-2xl">{name}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-sora-light text-md mt-2 text-grey">
                {type}
              </Text>
              <View className="flex flex-row gap-10">
                <Image source={icons.rider} className="size-6" />
                <Image source={icons.coffeeBean} className="size-6" />
                <Image source={icons.milk} className="size-6" />
              </View>
            </View>
            <View className="flex flex-row mt-3">
              <Image source={icons.star} className="size-6" />
              <Text className="font-sora-bold pl-2 pt-1">{rating}</Text>
              <Text className="font-sora-light text-grey pl-2 pt-1">(230)</Text>
            </View>
          </View>
          <View className="h-px bg-gray-300 w-full my-5" />
          <View>
            <Text className="font-sora-semibold text-lg">Description</Text>
            <Text className="text-grey mt-3">{description}</Text>
          </View>
          <View className="mt-3">
            <Text className="font-sora-semibold text-lg">Size</Text>
            <View className="flex flex-row justify-between items-center">
              <SizeSelector />
            </View>
          </View>
          <View className="flex flex-row mt-5 justify-between">
            <View className="flex flex-col">
              <Text className="text-grey font-sora-light">Price</Text>
              <Text className="text-primary font-sora-bold text-2xl">
                $ {price}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handlePress}
              className="bg-primary rounded-3xl w-64 py-3"
            >
              <Text className="text-white text-xl font-sora-semibold text-center py-2">
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default drinkDetails;
