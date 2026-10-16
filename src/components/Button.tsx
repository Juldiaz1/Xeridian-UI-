import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { brand } from "../config/brand";

type Props = { title: string; onPress: () => void; variant?: "primary" | "outline" };

export default function Button({ title, onPress, variant = "primary" }: Props) {
  const outline = variant === "outline";
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, outline ? styles.outline : styles.primary]}
    >
      <Text style={[styles.label, outline && { color: brand.colors.primary }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { paddingVertical: 14, borderRadius: 10, alignItems: "center", marginTop: 12 },
  primary: { backgroundColor: brand.colors.primary },
  outline: { borderWidth: 1, borderColor: brand.colors.primary },
  label: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});
