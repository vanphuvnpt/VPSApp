import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import StartUpScreen from "../screens/StartUpScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomePageStackNavigator = createNativeStackNavigator();

const HomePageNavigatorComponent = (props) => {
  return (
    <HomePageStackNavigator.Navigator>
      <HomePageStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Trang chủ" }}
      />
      {
        <HomePageStackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      }
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
            name="HomePageTab"
            component={HomePageTabNavigatorComponent}
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

const HomePageTabNavigator = createBottomTabNavigator();

const HomePageTabNavigatorComponent = (props) => {
  return (
    <HomePageTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomePageTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "chatbox" : "chatbox-ellipses";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1162b0",
      })}
    >
      <HomePageTabNavigator.Screen
        name="HomePageTab"
        component={HomePageNavigatorComponent}
        options={{
          title: "Trang chủ",
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <HomePageTabNavigator.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Thông báo",
        }}
      />
      <HomePageTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Người dùng",
        }}
      />
    </HomePageTabNavigator.Navigator>
  );
};

export default MainNavigationContainer;
