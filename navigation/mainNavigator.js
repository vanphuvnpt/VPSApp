import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import StartUpScreen from "../screens/StartUpScreen";

const HomePageStackNavigator = createNativeStackNavigator();

const HomePageNavigatorComponent = (props) => {
  return (
    <HomePageStackNavigator.Navigator>
      <HomePageStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Book Store" }}
      />
      <HomePageStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomePageStackNavigator.Navigator>
  );
};

const MainStackNavigator = createNativeStackNavigator();

const MainNavigationContainer = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Group>
          <MainStackNavigator.Screen
            name="StartUp"
            component={StartUpScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </MainStackNavigator.Group>

        <MainStackNavigator.Group>
          <MainStackNavigator.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </MainStackNavigator.Group>

        <MainStackNavigator.Group>
          <MainStackNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </MainStackNavigator.Group>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
