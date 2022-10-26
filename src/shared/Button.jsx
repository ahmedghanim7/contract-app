import { View, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={(e) => onPress(e)}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#7380a1",
        // width:70,
        alignSelf: "center",
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 28, color: "white" }}>{title}</Text>
    </Pressable>
  );
};

export default Button;
