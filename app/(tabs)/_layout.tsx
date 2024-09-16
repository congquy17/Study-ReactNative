import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from "@/constants/Colors";
export default function Tab() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "",
        tabBarActiveTintColor: Colors.colorPrimary,
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24}color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // <AntDesign name="home" size={24} color={color} />
            <FontAwesome5 name="wpexplorer" size={24} color={color} />
          ),
          
        }}
      />
    </Tabs>
  );
}
