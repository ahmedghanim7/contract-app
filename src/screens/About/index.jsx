import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ABOUT_TEXT } from "../../utils/AboutText";

const About = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/image2.png")} />
      <Text style={styles.title}>من نحنٌ</Text>
      <View style={{ width: "85%"}}>
        {ABOUT_TEXT.map((item) => (
          <Text style={{ fontSize: 18, color: "#6f6f6f", marginBottom: 20 }} key={item.id}>
            {item.text}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default About;
