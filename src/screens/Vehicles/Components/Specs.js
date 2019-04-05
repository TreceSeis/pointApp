import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { Badge } from "react-native-elements";
import Empty from "./Empty";
import Separator from "./Separator";
import Icon from "react-native-vector-icons/FontAwesome";

import { ListItem } from "react-native-elements";

class Version extends Component {
  // renderItemList = ({ item }) => {
  //   return <Category {...item} />;
  // };
  renderEmpty = () => <Empty text="No Vehicles found :(" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item.id.toString();
  render() {
    const item = this.props.item;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.specsTitle}>Cylinders</Text>
          <Text style={styles.specsText}>{item.cylinders}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.specsTitle}>Doors</Text>
          <Text style={styles.specsText}>{item.doors}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.specsTitle}>Max Power</Text>
          <Text style={styles.specsText}>{item.maxPower} HP</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.specsTitle}>Transmission Type</Text>
          <Text style={styles.specsText}>{item.transmissionType}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.specsTitle}>
            Fuel Economy City, Highway, Combined
          </Text>
          <Text style={styles.specsText}>
            {item.feCity} / {item.feHwy} / {item.feCombined}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonWhiteText: {
    color: "white",
    fontWeight: "bold"
  },
  specsTitle: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#c4172b",
    borderRadius: 10,
    color: "white",
    padding: 5,
    fontSize: 18
  },
  specsText: { marginLeft: 5, fontSize: 16, padding: 5 },
  coverFront: {
    height: 200,
    width: width,
    resizeMode: "contain",
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    height: 250,
    width: width
  },
  category: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  categoryText: {
    color: "white",
    fontSize: 17
  },
  right: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  make: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold"
  },
  model: {
    color: "white"
  },
  pricingText: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  pricing: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    alignItems: "flex-end"
  },
  mb20: {
    marginBottom: 20
  },
  mb5: {
    marginBottom: 5
  },
  quoteButton: {
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderColor: "#c4172b",
    backgroundColor: "#c4172b",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 40,
    color: "white"
  }
});
export default Version;
