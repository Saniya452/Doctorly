import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/src/Screens/login";
import SignupScreen from "./app/src/Screens/signup";
import InfoScreen from "./app/src/Screens/info";
import Mcqs from "./app/src/Screens/mcqs";
import Questions from "./app/src/Screens/questions";
import Onboarding from "./app/src/Screens/onboarding";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Mcqs" component={Mcqs} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
