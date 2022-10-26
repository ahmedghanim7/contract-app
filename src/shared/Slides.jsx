import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const Slides = ({
  numOfSlideCircle,
  activeIndex,
  // setActiveIndex,
  onSlideItemClickedHandler,
}) => {
  const items = new Array(numOfSlideCircle).fill("*");
  return (
    <View style={styles.slidesContainer}>
      {items.map((item, inx) => (
        <View key={inx}>
          <Pressable
            onPress={() => {
              console.log("Slide irtem ");
              onSlideItemClickedHandler(inx);
            }}
            style={[
              styles.slideCircle,
              activeIndex === inx && {
                backgroundColor: "#292828",
                width: 20,
                height: 20,
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slidesContainer: {
    width: "100%",
    height: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slideCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#a6a49f",
    marginHorizontal: 3,
  },
});
