import { Image } from "react-native";
import { styles } from "./styles";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";

interface CarImageProps {
  id?: number;
}

const CarImage = ({ id }: CarImageProps) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${id || 1}.png`,
      }}
    />
  );
};

export default CarImage;
