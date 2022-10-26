import { StyleSheet } from "react-native";

export const stylesFactory = (width) =>
  StyleSheet.create({
    card: {
      width: width / 2 - 35,
      height: width / 2 - 30,
      backgroundColor: "white",
      justifyContent: "space-evenly",
      alignItems: "center",
      elevation: 3,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 12,
    },
    icon: {
      width: 60,
      height: 60,
      borderRadius: 35,
      backgroundColor: "orange",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      color: "#606060",
    },
  });
