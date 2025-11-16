import DiscountRow from "@/components/DiscountRow";
import DeliveryToggle from "@/components/Switch";
import icons from "@/constants/icons";
import { router, useLocalSearchParams } from "expo-router";
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

const Order = () => {
  const params = useLocalSearchParams();
  const { id, name, type, price, rating, description, image } = params;
  const numericPrice = Number(price);
  return (
    <SafeAreaView className="bg-[#f9f9f9] h-full">
      <ScrollView className="px-10">
        <View className="flex flex-row items-center justify-between mt-10">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={icons.arrowLeft} />
          </TouchableOpacity>

          <Text className="text-xl font-sora-extrabold">Order</Text>
          <Text className="text-lg font-sora-extrabold"></Text>
        </View>
        <View className="mt-10">
          <DeliveryToggle />
        </View>
        <View className="mt-8">
          <Text className="font-sora-semibold text-xl">Delivery Address</Text>
          <View className="mt-5">
            <Text className="font-sora-semibold text-lg">Cairo, Egypt</Text>
            <Text className="font-sora-light text-grey text-base">
              90 Street, 5th Settlement, New Cairo, Egypt
            </Text>
            <View className="flex flex-row mt-5 gap-3">
              <TouchableOpacity className="flex flex-row border rounded-2xl py-1 px-4">
                <Image source={icons.address} className="size-4" />
                <Text className="font-sora-light ml-1 text-sm">
                  Edit Address
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row border rounded-2xl py-1 px-4">
                <Image source={icons.note} className="size-4" />
                <Text className="font-sora-light ml-1 text-sm">Add Note</Text>
              </TouchableOpacity>
            </View>
            <View className="h-px bg-gray-300 w-full my-5" />
            <View className="flex flex-row items-center">
              <Image
                source={image}
                className="w-20 h-20 rounded-3xl"
                resizeMode="cover"
              />
              <View className="flex-1 ml-3">
                <Text className="font-sora-bold text-lg">{name}</Text>
                <Text className="font-sora-light text-grey text-md">
                  {type}
                </Text>
              </View>
              <View className="flex flex-row gap-3">
                <TouchableOpacity className="p-2 rounded-3xl bg-white border-white">
                  <Image
                    source={icons.decrease}
                    className=" rounded-3xl bg-white"
                  />
                </TouchableOpacity>
                <Text className="font-sora-medium text-md">1</Text>
                <TouchableOpacity>
                  <Image
                    source={icons.orderPageAdd}
                    className="bg-white rounded-3xl"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="h-px bg-gray-300 w-full my-5" />
          </View>
          <View>
            <DiscountRow />
          </View>
          <View>
            <View className="mt-5">
              <Text className="font-sora-bold text-xl">Payment Summary</Text>
            </View>
            <View className="flex flex-row justify-between mt-3 ">
              <Text className="font-sora-regular">Price</Text>
              <Text className="font-sora-bold">$ {price}</Text>
            </View>
            <View className="flex flex-row justify-between mt-3">
              <Text className="font-sora-regular">Delivery Fee</Text>
              <Text className="font-sora-bold line-through">$1.0</Text>
            </View>
          </View>
          <View className="mt-10 flex flex-row items-center justify-between">
            <View className="flex-row items-center flex-1 gap-4">
              <Image source={icons.wallet} className="mt-3" />
              <View className="flex flex-col">
                <Text className="font-sora-bold text-md">Cash/Wallet</Text>
                <Text className="text-primary font-sora-bold">
                  $ {(numericPrice + 1).toFixed(2)}{" "}
                </Text>
              </View>
            </View>
            <View className="justify-between">
              <Image source={icons.arrowDownBlack} />
            </View>
          </View>
          <View className="mt-2">
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/drink/delivery",
                  params: {
                    id,
                    name,
                  },
                })
              }
              className="bg-primary rounded-2xl w-full py-3"
            >
              <Text className="text-white text-xl font-sora-semibold text-center py-2">
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
