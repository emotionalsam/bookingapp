import React from "react";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//creating Tab
const Tab = createBottomTabNavigator();

//screens
import { Home } from "../screens";
import { COLORS, ICONS } from "../contants";

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          backgroundColor: COLORS.white,
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.secondary;

          switch (route.name) {
            case "Main":
              return (
                <Image
                  style={{ height: 30, width: 30, tintColor: tintColor }}
                  source={ICONS.home}
                />
              );
            case "Search":
              return (
                <Image
                  style={{ height: 30, width: 30, tintColor: tintColor }}
                  source={ICONS.search}
                />
              );
            case "BookMark":
              return (
                <Image
                  style={{ height: 30, width: 30, tintColor: tintColor }}
                  source={ICONS.bookmark}
                />
              );
            case "Profile":
              return (
                <Image
                  style={{ height: 30, width: 30, tintColor: tintColor }}
                  source={ICONS.user}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="BookMark" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
