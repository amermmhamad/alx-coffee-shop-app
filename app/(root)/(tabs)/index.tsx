import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Card from "@/components/Card";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";

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
    price: 3.2,
    rating: 4.3,
    image: require("@/assets/images/3.png"),
  },
  {
    id: "4",
    name: "Cappuccino",
    description:
      "A cappuccino is an Italian coffee drink with a balanced ratio of espresso, steamed milk, and a thick layer of milk foam on top. It has a creamy, smooth texture and a bold but mildly sweet flavor from the combination of rich espresso and steamed milk.",
    type: "Machiato",
    price: 4.0,
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

export default function Index() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = React.useState("All Coffee");
  const filteredCoffees =
    activeCategory === "All Coffee"
      ? coffees
      : coffees.filter((c) => c.type === activeCategory);

  const handleCardPress = (item: Coffee) => {
    router.push({
      pathname: "/drink/drinkDetails",
      params: {
        id: item.id,
        name: item.name,
        description: item.description,
        type: item.type,
        price: item.price.toString(),
        rating: item.rating.toString(),
        image: item.image,
      },
    });
  };

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <FlatList
        data={filteredCoffees}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="flex gap-5 px-5 pt-5"
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="bg-[#313131] px-5 pt-10 pb-32">
              <Text className="text-base font-sora-light text-grey mt-10">
                Location
              </Text>
              <View className="pt-2 flex flex-row">
                <Text className="text-white text-xl">Cairo, Egypt</Text>
                <Image source={icons.arrowDown} className="ml-3 mt-3" />
              </View>
              <View className="flex flex-row pr-20 mt-5">
                <Search />
                <TouchableOpacity className="w-16 h-16 ml-3 mt-5 rounded-2xl bg-[#C67C4E] items-center justify-center">
                  <Image source={icons.filter} />
                </TouchableOpacity>
              </View>
              <View className="absolute top-64 right-10 mt-10">
                <Image source={images.banner} className="rounded-2xl" />
              </View>
            </View>
            <View className="pt-28 px-5">
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="space-x-2 gap-5 rounded-2xl"
              >
                {categories.map((cat) => {
                  const active = cat === activeCategory;
                  return (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl ${
                        active ? "bg-[#C67C4E]" : "bg-gray-100"
                      }`}
                    >
                      <Text
                        className={`text-sm font-sora-semibold ${
                          active ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
        }
      />
    </View>
  );
}
