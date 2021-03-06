import React from "react";
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import ResetScreen from "../screens/Reset";
import { createStackNavigator, createAppContainer } from "react-navigation";

const StackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup",
      headerStyle: {
        backgroundColor: "#c4172b",
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: "transparent"
      },
      headerTintColor: "#fff"
    }
  },
  Reset: {
    screen: ResetScreen,
    navigationOptions: {
      title: "Reset Password",
      headerStyle: {
        backgroundColor: "#c4172b",
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: "transparent"
      },
      headerTintColor: "#fff"
    }
  }
});

export default createAppContainer(StackNavigator);
