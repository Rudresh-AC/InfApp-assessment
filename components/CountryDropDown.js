import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const countries = [
  { label: "Afghanistan", value: "AF" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "Micronesia (Federated States of)", value: "FM" },
  { label: "Monaco", value: "MC" },
  { label: "Mongolia", value: "MN" },
  { label: "Montenegro", value: "ME" },
  { label: "Morocco", value: "MA" },
  { label: "Mozambique", value: "MZ" },
  { label: "Myanmar", value: "MM" },
  { label: "Namibia", value: "NA" },
  { label: "Nauru", value: "NR" },
  { label: "Nepal", value: "NP" },
  { label: "Netherlands", value: "NL" },
  { label: "New Zealand", value: "NZ" },
  { label: "Nicaragua", value: "NI" },
  { label: "Niger", value: "NE" },
  { label: "Nigeria", value: "NG" },
  { label: "India", value: "IN" },
];

const CountryDropdown = ({ defaultValue }) => {
  const [selectedCountry, setSelectedCountry] = useState(defaultValue || "");

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <Picker
      selectedValue={selectedCountry}
      onValueChange={handleCountryChange}
      dropdownIconColor="#ffffff"
    >
      <Picker.Item label="Select a Country" value="" />
      {countries.map((country) => (
        <Picker.Item
          key={country.value}
          label={country.label}
          value={country.value}
          style={styles.picker}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: "gray",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default CountryDropdown;
