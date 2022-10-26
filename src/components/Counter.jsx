import { View, Text, Button } from "react-native";
import React from "react";
import { useCounter } from "../context/counter";

const Counter = () => {
  const { counter = 17, increment, decrement } = useCounter();
  return (
    <View>
      <Button title="+" onPress={() => increment()} />
      <Text>{counter}</Text>
      <Button title="-" onPress={() => decrement()} />
    </View>
  );
};

export default Counter;
