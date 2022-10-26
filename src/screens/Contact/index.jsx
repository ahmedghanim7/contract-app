import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { styles } from "./styles";
import { CONTACT_TEXT } from "../../utils/ContactText";
const Contact = () => {
  const { width } = useWindowDimensions();

  return (
      <View style={styles.container}>
        <Image
          style={{ height: (width * 70) / 100, width: (width * 70) / 100 }}
          source={require("../../assets/image3.png")}
        />
        <View style={{ width: (width * 60) / 100 }}>
          <Text style={styles.mainTitle}>تواصل معنا على:</Text>
          {CONTACT_TEXT.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
        </View>
    </View>
  );
};

export default Contact;

const ContactItem = ({ item }) => {
  return (
    <View style>
      <Text style={styles.subTitle}>
        {item.contactBy} : {item.title}
      </Text>
    </View>
  );
};
