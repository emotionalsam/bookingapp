import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, IMAGES } from "../contants";
import { LinearGradient } from "expo-linear-gradient";

const OnBoard = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={{ height: "60%" }}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={IMAGES.onboardingImage}
        />
      </View>
      <View style={{ height: "25%" }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            padding: 20,
            color: COLORS.darkGray,
          }}
        >
          Digital Ticket
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: COLORS.lightGray,
            textAlign: "center",
            paddingHorizontal: 20,
          }}
        >
          Easy solution to buy tickets to your travel, business trips,
          transportation, lodging and culinary
        </Text>
      </View>
      <View
        style={{
          height: "15%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "70%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <LinearGradient
              colors={[COLORS.base, COLORS.primary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                Start !
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
