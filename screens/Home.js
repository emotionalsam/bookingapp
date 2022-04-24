import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { COLORS, ICONS, IMAGES } from "../contants";

//dump data
const DATA = [
  { id: 1, img: IMAGES.photo1, title: "Ski Villa" },
  { id: 2, img: IMAGES.photo2, title: "Climbing Hills" },
  { id: 3, img: IMAGES.photo3, title: "Frozen Hills" },
  { id: 4, img: IMAGES.photo4, title: "Beach" },
];

const Icon = ({ colors, icon }) => (
  <View
    style={{
      shadowColor: colors[1],
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowRadius: 16.0,

      elevation: 24,
    }}
  >
    <LinearGradient
      colors={colors}
      style={{
        height: 60,
        width: 60,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 25, width: 25, tintColor: COLORS.white }}
        source={icon}
      />
    </LinearGradient>
  </View>
);

const Home = ({ navigation }) => {
  //render flatlist data
  const renderData = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("TripDetails")}
      >
        <Image
          style={{ height: 130, width: 100, borderRadius: 10 }}
          source={item.img}
        />
        <Text
          style={{ fontWeight: "bold", color: COLORS.darkGray, fontSize: 16 }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, padding: 30 }}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
          source={IMAGES.homeBanner}
        />
        <View
          style={{
            position: "absolute",
            top: "40%",
            left: 30,
            padding: 20,
            width: "60%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: COLORS.white,
              textShadowColor: "#585858",
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 10,
            }}
          >
            Are you ready for adventure?
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Icon colors={["#96D5F4", "#638CFE"]} icon={ICONS.airplane} />
          <Icon colors={["#FEE18B", "#FBDB09"]} icon={ICONS.train} />
          <Icon colors={["#EB75AC", "#DA5DF5"]} icon={ICONS.bus} />
          <Icon colors={["#FDA9AA", "#FC65BA"]} icon={ICONS.taxi} />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Icon colors={["#FEC564", "#FDA261"]} icon={ICONS.bed} />
          <Icon colors={["#7DF2FB", "#4DBEFC"]} icon={ICONS.eat} />
          <Icon colors={["#7EEC93", "#46CAAE"]} icon={ICONS.compass} />
          <Icon colors={["#FCA496", "#FD7C6C"]} icon={ICONS.event} />
        </View>
      </View>
      <View
        style={{
          flex: 1.3,
          backgroundColor: COLORS.white,
          padding: 20,
          paddingHorizontal: 35,
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: "bold", color: COLORS.darkGray }}
        >
          Destination
        </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderData}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
