import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { signIn } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const { email, password } = form;

    if (!email || !password)
      return Alert.alert("Error", "Please fill all fields with valid data");
    setIsSubmitting(true);
    try {
      await signIn({ email, password });
      Alert.alert("Success", "You have signed in successfully");
      router.replace("/");
    } catch {
      Alert.alert("Error", "An error occurred while signing in");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 rounded-lg bg-white p-5 mt-5">
      <CustomInput
        label={"Email"}
        placeholder={"Enter your email"}
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        secureTextEntry={false}
        keyboardType={"default"}
      />
      <CustomInput
        label={"Password"}
        placeholder={"Enter your password"}
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        secureTextEntry={false}
        keyboardType={"default"}
      />
      <CustomButton
        title={"Sign In"}
        isLoading={isSubmitting}
        onPress={submit}
        style={undefined}
        textStyle={"text-semibold text-white-100"}
        leftIcon={undefined}
      />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account ?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
