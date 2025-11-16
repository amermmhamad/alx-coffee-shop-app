import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeliveryToggle() {
  const [selected, setSelected] = React.useState<"deliver" | "pickup">(
    "deliver"
  );

  return (
    <View className="flex-row bg-white rounded-2xl p-1">
      <TouchableOpacity
        onPress={() => setSelected("deliver")}
        className={`
          flex-1 py-3 rounded-xl items-center
          ${selected === "deliver" ? "bg-[#C67C4E]" : "bg-grey"}
        `}
      >
        <Text
          className={`
            font-sora-semibold
            ${selected === "deliver" ? "text-white font-sora-bold" : "text-black"}
          `}
        >
          Deliver
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelected("pickup")}
        className={`
          flex-1 py-3 rounded-xl items-center
          ${selected === "pickup" ? "bg-[#C67C4E]" : "bg-transparent"}
        `}
      >
        <Text
          className={`
            font-sora-semibold
            ${selected === "pickup" ? "text-white" : "text-black"}
          `}
        >
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
