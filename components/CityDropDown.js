import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const cities = [
  { label: "Kabul", value: "KBL" },
  { label: "Tirana", value: "TIA" },
  { label: "Algiers", value: "ALG" },
  { label: "Palikir", value: "PNI" },
  { label: "Monaco", value: "MON" },
  { label: "Ulaanbaatar", value: "ULN" },
  { label: "Podgorica", value: "TGD" },
  { label: "Rabat", value: "RBA" },
  { label: "Maputo", value: "MPM" },
  { label: "Naypyidaw", value: "NYT" },
  { label: "Windhoek", value: "WDH" },
  { label: "Yaren", value: "YRN" },
  { label: "Kathmandu", value: "KTM" },
  { label: "Amsterdam", value: "AMS" },
  { label: "Wellington", value: "WLG" },
  { label: "Managua", value: "MGA" },
  { label: "Niamey", value: "NIM" },
  { label: "Abuja", value: "ABV" },
  { label: "New Delhi", value: "DEL" },
];

const CityDropdown = ({ defaultValue }) => {
  const [selectedCity, setSelectedCity] = useState(defaultValue || "");

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  return (
    <Picker
      selectedValue={selectedCity}
      onValueChange={handleCityChange}
      dropdownIconColor="#ffffff"
    >
      <Picker.Item label="Select a City" value="" />
      {cities.map((city) => (
        <Picker.Item
          key={city.value}
          label={city.label}
          value={city.value}
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

export default CityDropdown;
