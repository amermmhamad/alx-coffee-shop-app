import icons from "@/constants/icons";
import { useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-2xl bg-[#242222] mt-5 py-6">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={search}
          onChange={handleSearch}
          placeholder="Search for coffee.."
          placeholderTextColor="#A2A2A2"
          className="text-sm font-sora text-white ml-3 flex-1"
        />
      </View>
    </View>
  );
};

export default Search;
