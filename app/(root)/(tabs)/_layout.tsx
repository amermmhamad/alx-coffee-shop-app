import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

import icons from "@/constants/icons";

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => (
  <View className="flex-1 mt-6 flex-col items-center relative">
    {focused && (
      <View className="absolute top-8 w-4 h-1.5 bg-primary rounded-full" />
    )}
    <Image
      source={icon}
      tintColor={focused ? "#C67C4E" : "#A2A2A2"}
      resizeMode="contain"
      className="size-6"
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopWidth: 1,
          minHeight: 99,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.heart} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.bag} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.notification} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
