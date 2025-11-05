import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // you can add other default options here
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
