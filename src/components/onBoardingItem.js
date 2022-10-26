import React from "react";
import { View, useWindowDimensions, Image, StyleSheet } from "react-native";

const OnBoardingItem = ({ imageUrl }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width }]}>
      <Image source={imageUrl} />
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
