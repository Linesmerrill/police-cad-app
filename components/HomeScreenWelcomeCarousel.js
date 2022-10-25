import {
  View,
  Text,
  SafeAreaView,
  Animated,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React, { useRef } from "react";

const HomeScreenWelcomeCarousel = () => {
  //   const images = new Array(6).fill("https://picsum.photos/1000/1000");
  //   const activeRoleIcon = require("../assets/images/civilian-icon.png");
  const images = [
    require("../assets/images/community-welcome-card.png"),
    require("../assets/images/welcome-page-civilian-card.png"),
    require("../assets/images/welcome-page-police-card.png"),
    require("../assets/images/welcome-page-dispatch-card.png"),
    require("../assets/images/welcome-page-fire-ems-card.png"),
    require("../assets/images/welcome-page-community-card.png"),
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  return (
    <>
      <View style={styles.scrollContainer} className="-mb-20">
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
          className="mb-0 pb-0"
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, height: 350 }}
                key={imageIndex}
              >
                <ImageBackground source={image} style={styles.card}>
                  <View className="flex-row">
                    <View className="flex-1"></View>
                    <View className="">
                      <Text className="text-3xl font-extrabold">
                        {/* {imageText[imageIndex]} */}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer} className="absolute bottom-14">
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
  },
});

// <a href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>

export default HomeScreenWelcomeCarousel;
