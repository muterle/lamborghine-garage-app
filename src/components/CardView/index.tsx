import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import logo from "../../../assets/logo.png";
import Divider from "../Divider";
import CarDetails from "../CarDetails";
import CarImage from "../CarImage";
import BuyButton from "../BuyButton";
import PriceControls from "../PriceControls";
import { useEffect, useState } from "react";
import { CarModel } from "./props";
import { loadCarData } from "./actions";

const CardView = () => {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={logo} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderLogoBox()}
      <Divider />
      <CarDetails carName={carData?.carName} />
      <CarImage id={carData?.id} />
      <Divider />
      <BuyButton />
      <PriceControls carData={carData} setCarData={setCarData} />
    </View>
  );
};

export default CardView;
