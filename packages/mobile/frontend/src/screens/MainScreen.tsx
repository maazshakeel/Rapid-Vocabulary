import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View, Button } from "react-native";

export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello!</Text>
      <Button title="" />
    </View>
  );
}
