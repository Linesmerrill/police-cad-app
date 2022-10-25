import {
  View,
  Text,
  SafeAreaView,
  Animated,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";

const HomeScreenWelcomeCarousel = () => {
  const images = new Array(6).fill("https://picsum.photos/1000/1000");

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  const imageText = [
    "Welcome to Lines Police CAD! \nClick on a card below to get started",
    "Looking to play with friends? Create or Join a community here ->",
    "Crack down on crime in your city, hit the roads as an Officer ->",
    "Control the operations as a Dispatcher ->",
    "Role-play as a Civilian, don't go too easy on those officers 😜 ->",
    "Save lives, put out fires around the city as a Fire/EMS ->",
  ];

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
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>{imageText[imageIndex]}</Text>
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
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  scrollContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    // marginVertical: 4,
    // marginHorizontal: 16,
    borderRadius: 5,
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
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default HomeScreenWelcomeCarousel;
