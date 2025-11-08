import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/Navigation/BottomTabs';
import './global.css'; // if you’re using Tailwind via NativeWind

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ title: 'Main' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
