import { Colors } from "@/constants/Colors";
import React from "react";
import { InputModeOptions, StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "../ThemedText"

interface ChildInfoProps {
  title: string;
  value: string | undefined;
  editable?: boolean;
  onChangeText?: (txt: string) => void;
  inputMode?: InputModeOptions | undefined;
  maxLength?: number
}

const ChildInfoRow = ({
  title,
  editable,
  value,
  onChangeText,
  inputMode,
  maxLength
}: ChildInfoProps) => {
  return (
    <View style={styles.informationRow}>
      <ThemedText
        darkColor={Colors.dark.text}
        lightColor={Colors.light.text}
        style={styles.informationText}
      >
        {title} :
      </ThemedText>
      <TextInput
        inputMode={inputMode}
        style={styles.textInput}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

export default ChildInfoRow;

const styles = StyleSheet.create({
  informationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  informationText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 30,
  },
  textInput: {
    flex: 1,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "#1CABE2",
    lineHeight: 30,
  },
});
