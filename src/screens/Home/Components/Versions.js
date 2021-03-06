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
import Empty from "./Empty";
import Separator from "./Separator";
import Icon from "react-native-vector-icons/FontAwesome";

import { ListItem } from "react-native-elements";

class Version extends Component {
  state = {
    versions: [
      {
        id: 0,
        version: "lx",
        img:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-LX.png",
        security: "6 bolsas de aire",
        wheels: "rines de aleación",
        technology: "pantalla de audio",
        camera: "cámara",
        radio: "toma de usb"
      },
      {
        id: 1,
        version: "lx",
        img:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-LX.png",
        security: "6 bolsas de aire",
        wheels: "rines de aleación",
        technology: "pantalla de audio",
        camera: "cámara",
        radio: "toma de usb"
      },
      {
        id: 2,
        version: "lx",
        img:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-LX.png",
        security: "6 bolsas de aire",
        wheels: "rines de aleación",
        technology: "pantalla de audio",
        camera: "cámara",
        radio: "toma de usb"
      }
    ]
  };

  renderItemList = ({ item }) => {
    return <Category {...item} />;
  };
  renderEmpty = () => <Empty text="No hay elementos en la lista" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item.id.toString();
  render() {
    return (
      <FlatList
        horizontal={true}
        keyExtractor={this.keyExtractor}
        data={this.state.versions}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={({ item }) => (
          <ScrollView>
            <View style={styles.container}>
              <Text
                style={{
                  fontSize: 20,
                  textTransform: "uppercase",
                  marginTop: 15
                }}
              >
                {item.version}
              </Text>
              <Image
                style={styles.coverFront}
                source={{
                  uri: item.img
                }}
              />
            </View>
            <Text style={{ marginLeft: 5 }}>
              <Icon
                style={{ marginRight: 17 }}
                name="chevron-right"
                type="font-awesome"
                color="#c4172b"
                size={17}
              />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 20,
                  textTransform: "capitalize"
                }}
              >
                {item.security}
              </Text>
            </Text>
            <Text style={{ marginLeft: 5 }}>
              <Icon
                style={{ marginLeft: 17 }}
                name="chevron-right"
                type="font-awesome"
                color="#c4172b"
                size={17}
              />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 20,
                  textTransform: "capitalize"
                }}
              >
                {item.wheels}
              </Text>
            </Text>
            <Text style={{ marginLeft: 5 }}>
              <Icon
                style={{ marginLeft: 17 }}
                name="chevron-right"
                type="font-awesome"
                color="#c4172b"
                size={17}
              />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 20,
                  textTransform: "capitalize"
                }}
              >
                {item.technology}
              </Text>
            </Text>
            <Text style={{ marginLeft: 5 }}>
              <Icon
                style={{ marginLeft: 17 }}
                name="chevron-right"
                type="font-awesome"
                color="#c4172b"
                size={17}
              />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 20,
                  textTransform: "capitalize"
                }}
              >
                {item.camera}
              </Text>
            </Text>
            <Text style={{ marginLeft: 5 }}>
              <Icon
                style={{ marginLeft: 17 }}
                name="chevron-right"
                type="font-awesome"
                color="#c4172b"
                size={17}
              />

              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 20,
                  textTransform: "capitalize"
                }}
              >
                {item.radio}
              </Text>
            </Text>
          </ScrollView>
        )}
      />
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonWhiteText: {
    color: "white",
    fontWeight: "bold"
  },
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
    fontSize: 20
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red"
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
