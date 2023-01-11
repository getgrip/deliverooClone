import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TestSreen from './screens/TestSreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{ headerShown: false }}
          />
           <Stack.Screen
          name="Test"
          component={TestSreen} 
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

