import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext'; // Importer le contexte
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import QRCodeScreen from './screens/QRCodeScreen';
import 'react-native-reanimated';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
