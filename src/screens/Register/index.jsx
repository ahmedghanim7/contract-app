import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import InputFeild from "../../components/InputFeild";
import { apiInstance } from "../../apiInstance";

const RegisterScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { mutate, isLoading } = useMutation(sighnup);

  async function sighnup(
    firstName,
    lastName,
    confirmPassword,
    email,
    password
  ) {
    await apiInstance.post("/users/sighnup", {
      firstName,
      lastName,
      confirmPassword,
      email,
      password,
    });
  }

  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}
    >
      <InputFeild
        lable={"First name"}
        placeholder="Enter first name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <InputFeild
        lable={"Last name"}
        placeholder="Enter last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <InputFeild
        lable={"Email"}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <InputFeild
        lable={"Password"}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword={true}
      />
      <InputFeild
        lable={"Confirm Password"}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword={true}
      />
      <Pressable
        style={{
          paddingHorizontal: 15,
          paddingVertical: 4,
          backgroundColor: "orange",
        }}
        onPress={() =>
          mutate(firstName, lastName, confirmPassword, email, password)
        }
      >
        <Text style={{ fontSize: 22 }}>{isLoading ? "..." : "Signup"}</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;
