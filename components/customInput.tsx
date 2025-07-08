import { CustomInputProps } from "@/types";
import React from "react";
import { Text, View } from "react-native";

const CustomInput = ({
  label,
  placeholder = "Enter a Text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  );
};

export default CustomInput;
