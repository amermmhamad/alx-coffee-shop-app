import icons from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const DiscountRow = () => {
  return (
    <TouchableOpacity className="mt-4">
      <View className="flex-row items-center justify-between bg-white rounded-2xl px-4 py-6 shadow-sm shadow-black/5">
        <View className="flex-row items-center">
          <View className="w-7 h-7 rounded-full bg-[#ffffff] items-center justify-center">
            <Image source={icons.discount} />
          </View>

          <Text className="text-sm font-sora-semibold text-black ml-5">
            One Discount is Applied!
          </Text>
        </View>

        <Image source={icons.arrowRight} />
      </View>
    </TouchableOpacity>
  );
};

export default DiscountRow;
