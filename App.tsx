import { View } from "react-native";
import GarageScreen from "./src/screens/GarageScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <GarageScreen />
      <StatusBar style="inverted" />
    </>
  );
}
