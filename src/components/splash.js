import React, { setState, useEffect } from "react";
import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

function Splash(props) {

  // The useEffect hook handles automatic navigation to the sign-in page
  const { navigate } = props.navigation;
  useEffect(() => {
    const timer = setTimeout(() => { navigate("SignIn"); }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Load the fonts needed on this page
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  // Render the screen
  if (fontsLoaded) {
    return (
      <View style={styles.page}>
        <Text style={styles.titleText}>PillSmart</Text>
        <Text style={styles.tagLine}>building healthy habits</Text>
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0091FF",
  },
  titleText: {
    fontSize: 46,
    height: 60,
    fontFamily: "Poppins_600SemiBold",
    padding: 0,
    margin: 0,
  },
  tagLine: {
    fontSize: 18,
    fontFamily: "Poppins_300Light",
    textAlign: "center",
    width: 250,
    padding: 0,
    margin: 0,
  },
});

export default Splash;
