import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Empty(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 20
  }
});
export default Empty;
