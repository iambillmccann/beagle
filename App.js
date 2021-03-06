/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import Splash from './src/screens/splash';
import HelloWorld from './src/screens/helloWorld';
import SignIn from './src/screens/signin';
import SignUp from './src/screens/signup';
import Today from './src/screens/today';
import Meds from './src/screens/meds';
import Stats from './src/screens/stats';
import Regimen from './src/screens/regimen';
import Setup1 from './src/screens/setup1';
import Setup2 from './src/screens/setup2';
import Setup3 from './src/screens/setup3';
import Saving from './src/screens/saving';
import Success from './src/screens/success';
import theme from './src/theme'

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
          <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}} />
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}} />
          <Stack.Screen name='Today' component={Today} options={{headerShown: false}} />
          <Stack.Screen name='Meds' component={Meds} options={{headerShown: false}} />
          <Stack.Screen name='Stats' component={Stats} options={{headerShown: false}} />
          <Stack.Screen name='Regimen' component={Regimen} options={{headerShown: false}} />
          <Stack.Screen name='Setup1' component={Setup1} options={{headerShown: false}} />
          <Stack.Screen name='Setup2' component={Setup2} options={{headerShown: false}} />
          <Stack.Screen name='Setup3' component={Setup3} options={{headerShown: false}} />
          <Stack.Screen name='Saving' component={Saving} options={{headerShown: false}} />
          <Stack.Screen name='Success' component={Success} options={{headerShown: false}} />
          <Stack.Screen name='HelloWorld' component={HelloWorld} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
