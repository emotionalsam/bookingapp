import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//styling
import { COLORS, ICONS } from "./contants";

//screens
import { OnBoard, TripDetails } from "./screens";

//navigations
import { HomeTab } from "./navigation";

//stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"OnBoard"}>
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => console.log("Pressed")}>
                  <Image
                    style={{ height: 25, width: 25 }}
                    source={ICONS.barMenu}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={({ navigation }) => ({
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("OnBoard")}>
                <Image style={{ height: 25, width: 25 }} source={ICONS.back} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Image style={{ height: 25, width: 25 }} source={ICONS.menu} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
