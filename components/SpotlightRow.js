import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchSpotlightData } from "../services/spotlight.js";
import { formatDistanceToNow } from "date-fns";

const SpotlightRow = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSpotlightData()
      .then((response) => {
        console.log("[SpotlightRow] response", response);
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
          <View className="flex-row justify-between px-5">
            <Text className="text-white text-xl font-bold">Spotlight</Text>
            <TouchableOpacity>
              <Text className="text-gray-500 text-lg font-semibold">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="py-5">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="flex-row space-x-4"
            >
              {data.map(
                (item, index) => (
                  console.log("[SpotlightRow] index:item", index, item),
                  (
                    <TouchableOpacity key={index}>
                      <View className="flex-col pl-2">
                        <Image
                          source={{ uri: item.spotlight.image }}
                          className="w-96 h-60 rounded-3xl"
                        />

                        <Text
                          numberOfLines={1}
                          className="text-white text-lg font-semibold pt-2"
                        >
                          {item.spotlight.title}
                        </Text>
                        <Text
                          numberOfLines={1}
                          className="text-green-500 text-sm font-semibold"
                        >
                          {formatDistanceToNow(new Date(item.spotlight.time), {
                            addSuffix: true,
                          })}
                        </Text>
                      </View>
                    </TouchableOpacity>
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

export default SpotlightRow;
