import { View, Text, TextInput, ImageBackground } from "react-native";
import Expo from "expo";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  const image = {
    uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Text
        style={{
          color: "#FF8F83",
          fontSize: 47,
          textAlign: "center",
          paddingTop: 18,
        }}
      >
        Your own Vocab
      </Text>
      <ImageBackground
        source={image}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      ></ImageBackground>
    </View>
  );
}
