import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

const BuyButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          style={styles.icon}
          name="shoppingcart"
          color="#FFF"
          size={22}
        />
        <Text style={styles.buttonText}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyButton;
