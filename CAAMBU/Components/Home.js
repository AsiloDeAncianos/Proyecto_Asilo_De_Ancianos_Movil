import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomMenu from "./BottomMenu";

export default function Home(){
  return(
    <NavigationContainer independent={true}>
      <BottomMenu/>
    </NavigationContainer>
  );
}