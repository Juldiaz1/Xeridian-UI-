import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { brand } from "../config/brand";
import Button from "../components/Button";
import TextField from "../components/TextField";

type Props = { onSubmit?: (email: string, password: string) => void; onGoToSignUp: () => void };

export default function LoginScreen({ onSubmit, onGoToSignUp }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handle = () => {
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password of 6+ characters.");
      return;
    }
    setError("");
    onSubmit?.(email, password);
  };

  return (
    <View style={styles.container}>
      <Image source={brand.logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>{brand.text.loginTitle}</Text>
      <TextField label={brand.text.emailLabel} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextField label={brand.text.passwordLabel} value={password} onChangeText={setPassword} secureTextEntry error={error} />
      <Button title={brand.text.loginButton} onPress={handle} />
      <Pressable onPress={onGoToSignUp}>
        <Text style={styles.link}>{brand.text.toSignUp}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: brand.colors.background },
  logo: { width: 96, height: 96, alignSelf: "center", marginBottom: 12 },
  title: { fontSize: 24, fontWeight: "700", color: brand.colors.text, textAlign: "center" },
  link: { color: brand.colors.primary, textAlign: "center", marginTop: 20 },
});
