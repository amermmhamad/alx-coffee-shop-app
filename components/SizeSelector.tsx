import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SizeSelector() {
  const [size, setSize] = React.useState<"S" | "M" | "L">("M");

  const sizes: ("S" | "M" | "L")[] = ["S", "M", "L"];

  return (
    <View className="flex-row gap-5 mt-3">
      {sizes.map((s) => {
        const selected = size === s;

        return (
          <TouchableOpacity
            key={s}
            onPress={() => setSize(s)}
            className={`
              px-12 py-3 rounded-2xl border justify-between
              ${selected ? "bg-[#f7efe9] border-[#C67C4E]" : "bg-white border-gray-300"}
            `}
          >
            <Text
              className={`
                font-sora-semibold text-base
                ${selected ? "text-[#C67C4E]" : "text-black"}
              `}
            >
              {s}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
