import axios from "axios";
import { CAR_API_BASE_URL } from "../constants/car";
import { CarModel } from "../components/CardView/props";

interface ApiResponse {
  cars: CarModel[];
}

export const getCarData = async (id: number) => {
  try {
    const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);

    const carData = response.data.cars.find((car) => car.id === id) || null;

    return carData;
  } catch (error) {
    console.log("Error to get cars data:", error);
  }
};
