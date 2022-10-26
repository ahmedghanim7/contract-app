import { View, Text, TextInput } from "react-native";
import React from "react";

const InputFeild = ({
  lable,
  placeholder,
  isPassword,
  value,
  onChangeText,
}) => {
  return (
    <View
      style={{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        width: "70%",
        marginVertical: 10
      }}
    >
      <Text>{lable}</Text>
      <TextInput
        style={{ height: 32, fontSize: 18 }}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default InputFeild;
