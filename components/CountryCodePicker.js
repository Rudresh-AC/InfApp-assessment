import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const countryCodes = [
  { country: "Afghanistan", code: "+93" },
  { country: "Albania", code: "+355" },
  { country: "Algeria", code: "+213" },
  { country: "Andorra", code: "+376" },
  { country: "Angola", code: "+244" },
  { country: "Argentina", code: "+54" },
  { country: "Armenia", code: "+374" },
  { country: "Australia", code: "+61" },
  { country: "Austria", code: "+43" },
  { country: "Azerbaijan", code: "+994" },
  { country: "Bahamas", code: "+1-242" },
  { country: "Bahrain", code: "+973" },
  { country: "Bangladesh", code: "+880" },
  { country: "Barbados", code: "+1-246" },
  { country: "Belarus", code: "+375" },
  { country: "Belgium", code: "+32" },
  { country: "Belize", code: "+501" },
  { country: "Benin", code: "+229" },
  { country: "Bhutan", code: "+975" },
  { country: "Bolivia", code: "+591" },
  { country: "Bosnia and Herzegovina", code: "+387" },
  { country: "Botswana", code: "+267" },
  { country: "Brazil", code: "+55" },
  { country: "Brunei", code: "+673" },
  { country: "Bulgaria", code: "+359" },
  { country: "Burkina Faso", code: "+226" },
];
function CountryCodePicker() {
  const [selectedValue, setSelectedValue] = useState(countryCodes[0].code);

  const getPickerItems = () => {
    return countryCodes.map((item) => (
      <Picker.Item
        key={item.code}
        label={`${item.code}  ${item.country} `}
        value={item.code}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {getPickerItems()}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 20,
    width: 130,
    color: "white",
  },
});

export default CountryCodePicker;
