import { BackWardButton } from "@/src/components/ui/BackWardButton";
import CustomDropdown from "@/src/components/ui/CustomDropdowns";
import VisitPanel from "@/src/components/ui/VisitPanel";
import { Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const SampleScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [visit, setVisit] = useState<string>("false");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const options = [
    { label: "Apple ", value: "apple" },
    { label: "Banana ", value: "banana" },
    { label: "Orange ", value: "orange" },
    { label: "Mango ", value: "mango" },
  ];
  const visitOptions = [
    { label: "Yes ", value: "true" },
    { label: "No ", value: "false" },
  ];
  const state = [
    { label: "California", value: "CA" },
    { label: "New York", value: "NY" },
    { label: "Texas", value: "TX" },
    { label: "Florida", value: "FL" },
    { label: "Illinois", value: "IL" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Ohio", value: "OH" },
  ];
  const durationYear = [
    { label: "Less than 6 months", value: "<6" },
    { label: "1 year", value: "1" },
    { label: "More than 1 year", value: ">1" },
  ]
  const [hasCard, setHasCard] = useState<boolean | null>(null);
  const [cardNumber, setCardNumber] = useState<boolean | null>(null);
  const handleSave = () => {
    // Handle save action here
    console.log("Selected Value:", selectedValue);
    console.log("Visit:", visit);
  };
  return (
    <View className="flex-1 bg-white">
      <BackWardButton title="Policy" />
      <Text h4 style={styles.title}>
        Custom Dropdown
      </Text>
      <View className="w-full mx-auto px-4">
        <CustomDropdown
          label="Select a fruit"
          data={options}
          value={selectedValue}
          onChange={(item) => setSelectedValue(item.value)}
          resetValue={() => setSelectedValue(null)}
          search
          disable={false}
          startValue
        />
      </View>
      <View className="w-full mx-auto px-4">
        <CustomDropdown
          label="Select Your State"
          data={state}
          value={selectedState}
          onChange={(item) => setSelectedState(item.value)}
          resetValue={() => setSelectedState(null)}
          search
          disable={false}
          startValue
        />
      </View>
      <View className="w-full mx-auto px-4">
        <CustomDropdown
          label="How long have you lived here?"
          data={durationYear}
          value={selectedState}
          onChange={(item) => setSelectedState(item.value)}
          resetValue={() => setSelectedState(null)}
          search
          disable={false}
          startValue
        />
      </View>
      

      <VisitPanel />
      {/* save button */}
      <View style={{ margin: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 30,
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
            elevation: 3,
            marginBottom: 30,
          }}
          onPress={handleSave}
        >
          <Text style={{ color: "#1CABE2", fontSize: 20, fontWeight: "bold" }}>
            {"Save"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* {selectedValue && (
        <Text style={styles.selectedText}>
          Selected Item: {selectedValue}
        </Text>


      )} */}
      {/* <View >
      <Text >Do you have a member card?</Text>

      <View>
        <Button title="Yes" onPress={() => setHasCard(true)} />
        <Button title="No" onPress={() => setHasCard(false)} />
      </View>

      {hasCard && (
        <View >
          <Text>Enter your member card number:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mt-2"
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="Card number"
          />
        </View>
      )}

      <View className="mt-4">
        <Button
          title="Submit"
          onPress={() => {
            console.log('Has Card:', hasCard);
            console.log('Card Number:', cardNumber);
          }}
        />
      </View>
    </View> */}
    </View>
  );
};

export default SampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: "green",
  },
});
