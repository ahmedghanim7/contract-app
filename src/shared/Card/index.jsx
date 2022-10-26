import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useMemo } from "react";
import { SvgXml } from "react-native-svg";
import { stylesFactory } from "./styles";

const Card = ({ icon, title1, title2, onPress }) => {
  //ServiceDetailes
  const { width } = useWindowDimensions();

  const styles = useMemo(() => stylesFactory(width), [width]);
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.card}>
      <View style={styles.icon}>
        {icon && <SvgXml xml={icon} width={"60%"} height={"60%"} />}
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{title1}</Text>
        <Text style={styles.title}>{title2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
