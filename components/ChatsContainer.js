import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const ChatsContainer = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-4"
      >
        <View className="flex-row space-x-4 p-5">
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/paul-ruzzo.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Paul Ruzzo
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/wendy-king.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
              <View
                className="bg-green-500 w-3 h-3 rounded-full ml-5"
                position="absolute"
                bottom={3}
                right={3}
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Wendy King
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/matt-bat.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Matt Bat
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/joan-carver.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 w-full text-center"
            >
              Joan Carver
            </Text>
          </View>
          <View className="flex-col justify-around">
            {/* add rounded image of people icon */}
            <View className="flex-col">
              {/* add round solid purple background around user group icon */}

              {/* image of random person */}
              <Image
                source={require("../assets/images/lilly-patten.jpg")}
                className="w-16 h-16 rounded-full bg-opacity-90"
              />
            </View>
            {/* text saying discover people */}
            <Text
              numberOfLines={1}
              className="text-white text-xs font-semibold pt-2 text-center w-full"
            >
              Lilly Patten
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="flex-col space-y-3">
        <TouchableOpacity>
          <View className="flex-row space-x-5 items-center px-5 pb-5">
            <Image
              source={require("../assets/images/joan-carver.jpg")}
              className="w-16 h-16 rounded-full bg-opacity-90"
            />
            <View className="flex-col">
              <Text
                className="text-white text-md font-semibold"
                numberOfLines={1}
              >
                Joan Carver
              </Text>
              <Text className="text-slate-300 text-sm w-3/4" numberOfLines={1}>
                🤣 Good one! Let me know when you are back online?
              </Text>
            </View>
            <Text className="text-slate-300 text-xs absolute right-0 top-3">
              Feb 14, 2024
            </Text>
          </View>
          <View
            className="border-b-slate-600 w-full absolute bottom-0"
            style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row space-x-5 items-center px-5 pb-5">
            <Image
              source={require("../assets/images/matt-bat.jpg")}
              className="w-16 h-16 rounded-full bg-opacity-90"
            />
            <View className="flex-col">
              <Text
                className="text-white text-md font-semibold"
                numberOfLines={1}
              >
                Matt Bat
              </Text>
              <Text className="text-slate-300 text-sm w-3/4" numberOfLines={1}>
                Let's hit some balls at the golf course. ⛳️
              </Text>
            </View>
            <Text className="text-slate-300 text-xs absolute right-0 top-3">
              Jan 1, 2024
            </Text>
          </View>
          <View
            className="border-b-slate-600 w-full absolute bottom-0"
            style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row space-x-5 items-center px-5 pb-5">
            <Image
              source={require("../assets/images/wendy-king.jpg")}
              className="w-16 h-16 rounded-full bg-opacity-90"
            />
            <View className="flex-col">
              <Text
                className="text-white text-md font-semibold"
                numberOfLines={1}
              >
                Wendy King
              </Text>
              <Text className="text-slate-300 text-sm w-3/4" numberOfLines={1}>
                I'm ready to go out for dinner. 🍽
              </Text>
            </View>
            <Text className="text-slate-300 text-xs absolute right-0 top-3">
              Dec 24, 2023
            </Text>
          </View>
          <View
            className="border-b-slate-600 w-full absolute bottom-0"
            style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row space-x-5 items-center px-5 pb-5">
            <Image
              source={require("../assets/images/paul-ruzzo.jpg")}
              className="w-16 h-16 rounded-full bg-opacity-90"
            />
            <View className="flex-col">
              <Text
                className="text-white text-md font-semibold"
                numberOfLines={1}
              >
                Paul Ruzzo
              </Text>
              <Text className="text-slate-300 text-sm" numberOfLines={1}>
                👍 Sounds good
              </Text>
            </View>
            <Text className="text-slate-300 text-xs absolute right-0 top-3">
              Feb 1, 2024
            </Text>
          </View>
          <View
            className="border-b-slate-600 w-full absolute bottom-0"
            style={{ borderBottomWidth: StyleSheet.hairlineWidth }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatsContainer;
