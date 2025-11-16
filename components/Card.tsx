import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-2 rounded-2xl bg-white relative"
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 p-1 z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-sora-bold text-white ml-0.5">4.4</Text>
      </View>
      <Image source={images.coffee2} className="w-full h-36 rounded-2xl" />
      <View className="flex flex-col mt-2">
        <Text className="text-base font-sora-medium text-black">
          Caffe Mocha
        </Text>
        <Text className="text-base font-sora-light text-grey">Deep Foam</Text>
        <View className="flex flex-row items-center justify-between mt-1">
          <Text className="text-base font-sora-bold text-black">$4.95</Text>
          <TouchableOpacity>
            <Image source={icons.addButton} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
