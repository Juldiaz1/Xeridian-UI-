import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { brand } from "../config/brand";

type Props = TextInputProps & { label: string; error?: string };

export default function TextField({ label, error, ...rest }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? { borderColor: brand.colors.error } : null]}
        placeholderTextColor={brand.colors.muted}
        autoCapitalize="none"
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 12 },
  label: { color: brand.colors.text, marginBottom: 6, fontWeight: "500" },
  input: {
    borderWidth: 1,
    borderColor: brand.colors.border,
    borderRadius: 10,
    padding: 12,
    color: brand.colors.text,
  },
  error: { color: brand.colors.error, marginTop: 4, fontSize: 13 },
});
