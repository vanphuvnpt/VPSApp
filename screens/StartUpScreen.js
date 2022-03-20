import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StartUpScreen = (props) => {
  const tryLogin = useCallback(async () => {
    const authState = await AsyncStorage.getItem("userData");

    if (!authState) {
      props.navigation.navigate("Login");
      return;
    }

    // is token valid?
    props.navigation.navigate("HomePageTab");
  }, [props.navigation]);

  useEffect(() => {
    tryLogin();
  }, [tryLogin]);

  useEffect(() => {
    const sub = props.navigation.addListener("focus", () => {
      tryLogin();
    });
  }, [props.navigation, tryLogin]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartUpScreen;
