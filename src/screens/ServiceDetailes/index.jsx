import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
const ServiceDetailes = () => {
  const { params } = useRoute();
  console.log("params", params);
  return (
    <View>
      <Text>ServiceDetailes</Text>
    </View>
  );
};

export default ServiceDetailes;
