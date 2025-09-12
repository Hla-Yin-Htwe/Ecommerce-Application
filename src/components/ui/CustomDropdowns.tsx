import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Icon, Text, useTheme } from "@rneui/themed";
import { CustomDropdownType } from "../../types/type";

const CustomDropdown = ({
  label,
  data,
  value,
  onChange,
  resetValue,
  search = false,
  disable = false,
  startValue = false,
}: CustomDropdownType) => {
  const theme = useTheme(); 

  const renderRightIcon = () => {
    if (value) {
      return (
        <TouchableOpacity onPress={resetValue}>
          <Icon
            name="circle-with-cross"
            type="entypo"
            size={24}
            color="red"
          />
        </TouchableOpacity>
      );
    }
    return (
      <Icon
        name="chevron-down"
        type="entypo"
        size={24}
        color={theme?.colors?.grey || "#888"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {startValue && <Text style={styles.required}>*</Text>}
      </View>

      <Dropdown
        disable={disable}
        style={[
          styles.dropdown,
          { backgroundColor: disable ? "#e0e0e0" : "#fff" },
        ]}
        containerStyle={styles.dropdownContainer}
        itemTextStyle={styles.itemText}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        maxHeight={250}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        search={search}
        searchPlaceholder="Search..."
        data={data}
        value={value}
        onChange={onChange}
        renderRightIcon={renderRightIcon}
      />
    </View>
  );
};

export default memo(CustomDropdown);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "#000",
  },
  required: {
    color: "red",
    marginLeft: 4,
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  placeholder: {
    fontSize: 14,
    color: "#888",
  },
  selectedText: {
    fontSize: 14,
    color: "#000",
  },
  itemText: {
    fontSize: 14,
    color: "#000",
  },
});
