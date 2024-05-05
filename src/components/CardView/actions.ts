import { getCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await getCarData(id);

    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Error:", error);
    setCarData(null);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData.id > 1) {
      await loadCarData(carData.id - 1, setCarData);
    }
  } catch (error) {
    console.log("Error:", error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    if (carData && carData.id < 10) {
      await loadCarData(carData.id + 1, setCarData);
    }
  } catch (error) {
    console.log("Error:", error);
    setCarData(null);
  }
};
