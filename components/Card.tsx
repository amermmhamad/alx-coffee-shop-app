import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Coffee = {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  description: string;
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

interface Props {
  item: Coffee;
  onPress?: () => void;
}

const Card = ({ item, onPress }: Props) => {
  const router = useRouter();
  const handleBuy = () => {
    router.push({
      pathname: "/drink/order",
      params: {
        id: String(item.id),
        name: item.name,
        description: item.description,
        type: item.type,
        price: String(item.price),
        rating: String(item.rating),
        image: item.image,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-2 rounded-2xl bg-white relative"
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 p-1 z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-sora-bold text-white ml-0.5">
          {item.rating.toFixed(1)}
        </Text>
      </View>
      <Image
        source={item.image}
        className="w-full h-36 rounded-2xl"
        resizeMode="cover"
      />
      <View className="flex flex-col mt-2">
        <Text className="text-base font-sora-medium text-black">
          {item.name}
        </Text>
        <Text className="text-base font-sora-light text-grey">{item.type}</Text>
        <View className="flex flex-row items-center justify-between mt-1">
          <Text className="text-base font-sora-bold text-black">
            ${item.price.toFixed(2)}
          </Text>
          <TouchableOpacity onPress={handleBuy}>
            <Image source={icons.addButton} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
