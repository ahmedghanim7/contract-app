import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useCustomeThemne } from "../theme";
const Header = ({ title = "Home", containerStyle }) => {
  const { theme, ToggleTheme, themeVal } = useCustomeThemne();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 240,
    borderRadius: 240 / 2,
    backgroundColor: "#7380a1",
    transform: [{ scaleX: 3 }],
    marginTop: -160,
    marginLeft: 70,
  },
  title: {
    position: "absolute",
    bottom: 10,
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    transform: [{ scaleX: 0.3 }],

    fontSize: 27,
  },
  themeIcon: {
    position: "absolute",
    bottom: 40,
    right: 50,
    transform: [{ scaleX: 0.3 }],
  },
});
