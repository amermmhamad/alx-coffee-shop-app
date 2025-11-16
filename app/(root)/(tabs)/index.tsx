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
  type: string;
  price: number;
  rating: number;
  image: any;
};

const coffees: Coffee[] = [
  {
    id: "1",
    name: "Caffe Mocha",
    type: "Latte",
    price: 4.53,
    rating: 4.9,
    image: require("@/assets/images/1.png"),
  },
  {
    id: "2",
    name: "Flat White",
    type: "Espresso",
    price: 3.53,
    rating: 4.2,
    image: require("@/assets/images/1.png"),
  },
  {
    id: "3",
    name: "Americano",
    type: "Americano",
    price: 3.53,
    rating: 4.3,
    image: require("@/assets/images/3.png"),
  },
  {
    id: "4",
    name: "Cappuccino",
    type: "Machiato",
    price: 3.53,
    rating: 5.0,
    image: require("@/assets/images/4.png"),
  },
  {
    id: "5",
    name: "Double Shot",
    type: "Espresso",
    price: 6.23,
    rating: 5.0,
    image: require("@/assets/images/5.png"),
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
  const [activeCategory, setActiveCategory] = React.useState("All Coffee");
  return (
    <View className="flex-1 bg-[#f2eded]">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
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
