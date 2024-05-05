import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./styles";
import { handleNextItem, handlePreviousItem } from "../CardView/actions";
import { CarModel } from "../CardView/props";

interface PriceControlsProps {
  carData: CarModel | null;
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>;
}

const PriceControls = ({ carData, setCarData }: PriceControlsProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem(carData, setCarData)}
      />
      <Text style={styles.label}>{carData?.price || "$0,00"}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );
};

export default PriceControls;
