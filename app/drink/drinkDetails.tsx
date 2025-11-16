import SizeSelector from "@/components/SizeSelector";
import icons from "@/constants/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Coffee = {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  rating: number;
  image: any;
};

const coffees: Coffee[] = [
  {
    id: "1",
    name: "Caffe Mocha",
    description:
      "A latte, or caffè latte, is an espresso-based coffee drink made with steamed milk and a light layer of frothed milk on top. It is known for its smooth, creamy texture, where the richness of the espresso is balanced by the mild, sweet flavor of the steamed milk.",
    type: "Latte",
    price: 4.53,
    rating: 4.9,
    image: require("@/assets/images/1.png"),
  },
  {
    id: "2",
    name: "Flat White",
    description:
      "Espresso is a concentrated coffee beverage brewed by forcing hot water under high pressure through finely ground coffee beans. It is characterized by its small, intense shot and a reddish-brown foam on top called crema.",
    type: "Espresso",
    price: 3.53,
    rating: 4.2,
    image: require("@/assets/images/2.png"),
  },
  {
    id: "3",
    name: "Americano",
    description:
      "An Americano is an espresso-based coffee drink made by adding hot water to a shot or two of espresso, which dilutes the intense flavor of the espresso to be more like a standard cup of coffee.",
    type: "Americano",
    price: 3.53,
    rating: 4.3,
    image: require("@/assets/images/3.png"),
  },
  {
    id: "4",
    name: "Cappuccino",
    description:
      "A cappuccino is an Italian coffee drink with a balanced ratio of espresso, steamed milk, and a thick layer of milk foam on top. It has a creamy, smooth texture and a bold but mildly sweet flavor from the combination of rich espresso and steamed milk.",
    type: "Machiato",
    price: 3.53,
    rating: 5.0,
    image: require("@/assets/images/4.png"),
  },
  {
    id: "5",
    name: "Double Shot",
    description:
      "Espresso is a concentrated coffee beverage brewed by forcing hot water under high pressure through finely ground coffee beans. It is characterized by its small, intense shot and a reddish-brown foam on top called crema.",
    type: "Espresso",
    price: 6.23,
    rating: 5.0,
    image: require("@/assets/images/5.png"),
  },
  {
    id: "6",
    name: "Black Coffee",
    description:
      "Black coffee is a brewed coffee drink made with ground coffee and water, served without any milk, cream, sugar, or other additives. It is known for its bold and slightly bitter flavor, which allows the natural taste of the coffee bean to come through.",
    type: "Dark",
    price: 2.95,
    rating: 3.8,
    image: require("@/assets/images/blackCoffee.jpeg"),
  },
];

const categories = [
  "All Coffee",
  "Machiato",
  "Latte",
  "Americano",
  "Espresso",
  "Other",
];

const drinkDetails = () => {
  const params = useLocalSearchParams();
  const { id, name, type, price, rating, description, image } = params;
  const router = useRouter();
  const handleBuyNow = () => {
    router.push({
      pathname: "/drink/order",
      params: {
        id: String(id),
        name: String(name),
        description: String(description),
        type: String(type),
        price: String(price),
        rating: String(rating),
        image: String(image),
      },
    });
  };

  return (
    <SafeAreaView className="bg-[#f9f9f9] h-full">
      <ScrollView className="px-10">
        <View className="flex flex-row items-center justify-between mt-10">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.arrowLeft} />
          </TouchableOpacity>
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
              onPress={handleBuyNow}
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
