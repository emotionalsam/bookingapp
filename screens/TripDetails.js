import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, IMAGES, ICONS } from "../contants";

const TripDetails = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          position: "absolute",
          height: "10%",
          width: "100%",
          backgroundColor: COLORS.transparent,
          top: 0,
          left: 0,
          elevation: 3,
          zIndex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ height: 25, width: 25 }} source={ICONS.back} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 25, width: 25 }} source={ICONS.menu} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "35%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={IMAGES.skiVillaBanner}
        />
      </View>
      <View
        style={{
          height: "65%",
          backgroundColor: COLORS.white,
          paddingHorizontal: 30,
          paddingTop: "32%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: 50, tintColor: COLORS.primary }}
              source={ICONS.home}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.darkGray,
              }}
            >
              Villa
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: 50, tintColor: COLORS.primary }}
              source={ICONS.parking}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.darkGray,
              }}
            >
              Parking
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: 50, tintColor: COLORS.primary }}
              source={ICONS.wind}
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: COLORS.darkGray,
              }}
            >
              4&#176;C
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.darkGray,
              marginVertical: 10,
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.lightGray,
              fontWeight: "bold",
            }}
          >
            Located in the Alps with an altitude of 1,702 meters. This ski area
            is the largest ski area in the world and is known as the best place
            to ski. Many other facilities, such as a fitness center, sauna,
            steam room to star-rated resturant.
          </Text>

          <LinearGradient
            colors={["#EFF1FE", "#D1DCFA"]}
            style={{
              flex: 1,
              marginVertical: 25,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={{ flex: 1.2, padding: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.darkGray,
                  fontWeight: "bold",
                }}
              >
                $1000
              </Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }}>
              <LinearGradient
                colors={["#46B2FF", "#5A83FE"]}
                style={{
                  flex: 1,
                  margin: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: COLORS.white,
                  }}
                >
                  BOOKING
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          height: 0.25 * height,
          width: 0.8 * width,
          backgroundColor: COLORS.white,
          top: 0.23 * height,
          left: 0.5 * width - 0.5 * 0.8 * width,
          padding: 25,
          elevation: 3,
          zIndex: 3,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 70, width: 70, borderRadius: 10, marginRight: 20 }}
            source={IMAGES.skiVilla}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.darkGray,
                fontWeight: "bold",
              }}
            >
              Ski Villa
            </Text>
            <Text style={{ color: COLORS.lightGray }}>France</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 15, width: 15, margin: 2 }}
                source={ICONS.starFull}
              />

              <Image
                style={{ height: 15, width: 15, margin: 2 }}
                source={ICONS.starFull}
              />
              <Image
                style={{ height: 15, width: 15, margin: 2 }}
                source={ICONS.starFull}
              />
              <Image
                style={{ height: 15, width: 15, margin: 2 }}
                source={ICONS.starFull}
              />
              <Image
                style={{ height: 15, width: 15, margin: 2, marginRight: 5 }}
                source={ICONS.starHalf}
              />
              <Text style={{ color: COLORS.lightGray }}>4.5</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 17, color: COLORS.lightGray }}>
            Ski Villa offers simple rooms with mountain views in front of ski
            left to the Ski Resort
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TripDetails;
