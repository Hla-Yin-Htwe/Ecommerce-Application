import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

const VisitPanel = () => {
const [visit, setVisit] = React.useState(null); 
  const [noVisit, setNoVisit] = React.useState(null);
  const [comment, setComment] = React.useState("");

  return (
    <View style={styles.content}>

        <ThemedText
          darkColor="#fff"
          lightColor="#777"
           style={[styles.title]}
        >
          {"Have you visited to Thailand?"}
        </ThemedText>
        <View style={styles.iconRow}>
      <TouchableOpacity
        style={styles.iconRow}
        onPress={() => setVisit(!visit)}
      >
        <Ionicons
          name={visit ? "checkmark-circle" : "ellipse-outline"}
          size={22}
          color={visit ? "#1CABE2" : "#777"}
        />
        <ThemedText
          darkColor="#f1f1f1"
          lightColor="#777"
          // style={[styles.iconText, visit && styles.selectedText]}
        >
          {"Yes"}
        </ThemedText>
      </TouchableOpacity>
      </View>
      {visit && (
        <TextInput
          multiline={true}
          placeholder="Enter Comment"
          // placeholderTextColor={
          // //   mode === "dark" ? Colors.dark.text : Colors.light.text
          // }
          value={comment}
          onChangeText={setComment}
          style={[
            styles.input,
            //   {
            //     backgroundColor:
            //     // //   mode === "dark"
            //     //     ? Colors.dark.inputBackground
            //     //     : Colors.light.inputBackground,
            //     // color: mode === "dark" ? Colors.dark.text : Colors.light.text,
            //   }
          ]}
        />
      )}
      <View style={styles.iconRow}>
      <TouchableOpacity
        style={styles.iconRow}
        onPress={() => setNoVisit(!noVisit)}
      >
        <Ionicons
          name={noVisit ? "checkmark-circle" : "ellipse-outline"}
          size={22}
          color={noVisit ? "#1CABE2" : "#777"}
        />
        <ThemedText
          darkColor="#f1f1f1"
          lightColor="#777"
          // style={[styles.iconText, visit && styles.selectedText]}
        >
          {"No"}
        </ThemedText>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default VisitPanel;
const styles = StyleSheet.create({
  content: {
    margin: 24,
    padding: 24,
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 8,
    borderRadius: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  
  iconText: {
    marginLeft: 8,
    fontSize: 16,
  },
  selectedText: { fontWeight: "bold", color: "#1CABE2" },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 12  },
});
