/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Splash from "./src/screens/splash";
import HelloWorld from "./src/screens/helloWorld";
import SignIn from "./src/screens/signin.js";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "Roboto",
    },
    medium: {
      fontFamily: "Roboto",
    },
    light: {
      fontFamily: "Roboto",
    },
    thin: {
      fontFamily: "Roboto",
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    surface: "#0091FF",
    text: "#E9F1F7",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          <Stack.Screen name="HelloWorld" component={HelloWorld} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
