import icons from "@/constants/icons";
import images from "@/constants/images";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function DeliveryTrackingScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 relative">
        <View className="flex-1 bg-gray-100">
          <Image
            source={images.map}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-6 rounded-full py-3 px-3 bg-white items-center justify-center shadow-md mt-24"
        >
          <Image source={icons.arrowLeft} />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-10 right-6 p-1 bg-white rounded-full items-center justify-center shadow-md mt-24">
          <Image source={icons.target} />
        </TouchableOpacity>
      </View>

      <View className="w-full items-center mt-5">
        <View className="w-12 h-2 bg-gray-300 rounded-full" />
      </View>
      <View className="bg-white rounded-t-3xl mt-2 mb-10 px-6 shadow-2xl overflow-hidden">
        <Text className="text-xl font-sora-bold text-center text-gray-900 pt-5">
          10 minutes left
        </Text>
        <Text className="font-sora-regular text-sm text-grey text-center mt-1">
          Delivery to{" "}
          <Text className="font-sora-semibold text-black">
            90 Street, 5th Settlement, New Cairo
          </Text>
        </Text>

        <View className="flex-row justify-between items-center mt-6 mb-6 px-12">
          <View className="w-16 h-2 bg-primary rounded-full justify-center items-center mt-2" />
          <View className="w-16 h-2 bg-primary rounded-full justify-center items-center mt-2" />
          <View className="w-16 h-2 bg-primary rounded-full justify-center items-center mt-2" />
          <View className="w-16 h-2 bg-gray-100 rounded-full justify-center items-center mt-2" />
        </View>

        <View className="mb-5 flex-row items-center bg-white p-4 rounded-2xl border border-gray-300">
          <View className="w-12 h-12 bg-orange-50 border border-gray-300 ml-2 rounded-xl items-center justify-center mr-4">
            <Image source={icons.rider} />
          </View>
          <View className="flex-1">
            <Text className="text-base font-sora-bold mt-2 text-black">
              Delivered your order
            </Text>
            <Text className="text-sm font-sora-light text-grey mt-1 mb-2">
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        <View className="flex-row items-center bg-white p-4 rounded-2xl">
          <Image
            source={images.courier}
            className="w-14 h-16 rounded-2xl mr-4"
          />
          <View className="flex-1">
            <Text className="font-sora font-bold text-black">Amer Hamad</Text>
            <Text className="text-sm text-sora-light text-grey mt-1">
              Personal Courier
            </Text>
          </View>
          <TouchableOpacity className="w-12 h-12 bg-white rounded-xl items-center justify-center border border-gray-300">
            <Image source={icons.phone} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
