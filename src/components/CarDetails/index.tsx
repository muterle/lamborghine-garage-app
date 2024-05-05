import { View, Text } from "react-native";
import { styles } from "./styles";

interface CarDetailsProps {
  carName?: string;
}

const CarDetails = ({ carName }: CarDetailsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carName}</Text>
    </View>
  );
};

export default CarDetails;
