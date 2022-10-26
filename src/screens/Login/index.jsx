import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import InputFeild from "../../components/InputFeild";
import { useMutation } from "react-query";
import { apiInstance } from "../../apiInstance";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { mutate, isLoading } = useMutation(login);

  async function login(email, password) {
    await apiInstance.post("/users/login", { email, password });
  }

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 120 }}
    >
      <InputFeild
        lable={"Email"}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <InputFeild
        lable={"Password"}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        isPassword={true}
      />

      <Pressable
        style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
          backgroundColor: "orange",
        }}
        onPress={() => mutate(email, password)}
      >
        <Text style={{ fontSize: 22 }}>{isLoading ? "..." : "Login"}</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
