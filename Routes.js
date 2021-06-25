import React from "react";
import { Router, Scene } from "react-native-router-flux";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "./src/screens/SplashScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from './src/screens/HomeScreen';
const AuthStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      title: " ",
    },
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      title: "SignInScreen",
    },
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "SignUpScreen",
    },
  },
});
const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: " ",
    },
  },


});
export default createAppContainer(AppStack);
