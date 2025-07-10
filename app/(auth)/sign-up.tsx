import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    const { name, email, password } = form;
    
    if (!name || !email || !password)
      return Alert.alert("Error", "Please fill all fields with valid data");
    setIsSubmitting(true);
    try {
      await createUser({
        email,
        password,
        name,
      });

      router.replace("/");
    } catch {
      Alert.alert("Error", "An error occurred while signing up");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 rounded-lg bg-white p-5 mt-5">
      <CustomInput
        label={"Full Name"}
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        placeholder={"Enter your full name"}
        secureTextEntry={false}
        keyboardType={"default"}
      />
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
      />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account ?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign in
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
