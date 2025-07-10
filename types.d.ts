export interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (value : string) => void;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
}

export interface CustomButtonProps {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  style?: string;
  textStyle?: string;
  leftIcon?: string;
}
