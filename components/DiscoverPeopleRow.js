import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { fetchDiscoverPeopleData } from "../services/discoverPeople.js";

const DiscoverPeopleRow = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDiscoverPeopleData()
      .then((response) => {
        console.log("[DiscoverPeopleRow] response", response);
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {Array.isArray(data) && data.length > 0 && (
        <View>
          {/* new section called discover people, with horizontal scrolling cards that contain profile pictures and names for people to add as friends */}
          <View className="flex-row justify-between px-5 pt-2">
            <Text className="text-white text-xl font-bold">
              Discover People
            </Text>
            <TouchableOpacity>
              <Text className="text-gray-500 text-lg font-semibold">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="py-5 px-2">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="flex-row space-x-3"
            >
              {data.map(
                (item, index) => (
                  console.log("[SpotlightRow] index:item", index, item),
                  (
                    <View className="flex-col bg-slate-800 rounded-2xl">
                      {/* add an x in the top right corner to dismiss the current card */}
                      <TouchableOpacity>
                        <View className="flex-row justify-end">
                          <XMarkIcon
                            position="absolute"
                            right={15}
                            top={15}
                            color={"rgb(100, 116, 139)"}
                          ></XMarkIcon>
                        </View>
                      </TouchableOpacity>
                      <View className="flex-row justify-around ml-8 mr-8">
                        <Image
                          source={
                            item.user.profilePicture
                              ? { uri: item.user.profilePicture }
                              : {
                                  uri: `https://ui-avatars.com/api/?name=${item.user.username}&background=random`,
                                }
                          }
                          className="w-20 h-20 rounded-full bg-opacity-90 m-4"
                        />
                      </View>
                      <View className="flex-row justify-around">
                        <Text
                          numberOfLines={1}
                          className="text-white text-md font-semibold"
                        >
                          {item.user.username.length > 10
                            ? item.user.username.substring(0, 10) + "..."
                            : item.user.username}
                        </Text>
                      </View>
                      <View className="flex-row justify-around">
                        <Text
                          numberOfLines={1}
                          className="text-gray-200 text-xs pt-1"
                        >
                          Suggested for you
                        </Text>
                      </View>
                      {/* follow button */}
                      <View className="flex-row justify-center bg-slate-500 rounded-2xl mx-3 mt-7 py-2 mb-3">
                        <TouchableOpacity>
                          <Text className="text-white text-md font-semibold p-2">
                            Follow
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                )
              )}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default DiscoverPeopleRow;
