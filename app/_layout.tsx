import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";

import "react-native-reanimated";

export default function RootLayout() {
  useFonts({
    'roboto-regular': require('@/assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  });
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarStyle: { display: 'none'}
        }}
      />
    </Tabs>
  );
}
