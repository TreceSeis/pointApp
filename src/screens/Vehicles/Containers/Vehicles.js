import React, { Component } from "react";
import firebase from "firebase";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUser } from "../../../actions/authActions";
import List from "../Components/List";
import HorizontalCategory from "../Components/HorizontalCategory";
class Vehicles extends Component {
  state = {
    list: [
      {
        id: 1,
        make: "kia",
        model: "soul",
        year: "2019",
        price: 17490,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/soul/2020/overview/overview_mtf_soul_2020--original.png",
        gallery:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/gallery/CMS/vehicles/soul/2020/gallery/exterior/gallery_soul_2020_exterior_9--kia-1280x-jpg.jpg",
        cylinders: 4,
        maxPower: 147,
        transmissionType: "Intelligent Variable Transmission (IVT)",
        doors: 4,
        feCity: 27,
        feHwy: 33,
        feCombined: 30,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-LX.png",

            features: [
              "6 air bags",
              '16" alloy wheels',
              'Audio screen with 7 "color and Apple CarPlay connectivity and Android Auto',
              "Reverse camera with dynamic guides",
              "Front and rear USB socket"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Sou-EX.png",

            features: [
              "Projection type headlights",
              "Ambient lights with 8 tones and 6 themes to choose",
              '17" alloy wheels',
              "Charger with wireless induction for smartphones",
              "Two tone exterior colors"
            ]
          },
          {
            id: 2,
            version: "ex pack",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/soul_2020/Componente-Soul-EX-Pack.png",

            features: [
              "Lined leather seats",
              "Full LED headlights",
              "Electric adjustment of front seats",
              "HUD (Head-up Display)",
              '18" alloy wheels',
              "Sunroof"
            ]
          }
        ]
      },
      {
        id: 2,
        make: "kia",
        model: "niro",
        year: "2019",
        price: 23490,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/niro/2019/overview/overview_mtf_niro_2019--original.png",
        gallery:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
        cylinders: 4,
        maxPower: 139,
        transmissionType: "Dual Clutch 6-Speed Automatic with Sportmatic",
        doors: 4,
        feCity: 52,
        feHwy: 49,
        feCombined: 50,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/niro/2018_B/Trim_List/Componente-niro-lx.png",

            features: [
              "Motor 1.6L Hybrid",
              '7" screen with Android Auto® and Apple Car Play® connectivity',
              "Reverse camera",
              "camara",
              "7 airbags"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/niro/2018_B/Trim_List/Componente-niro-ex.png",

            features: [
              "Leather-covered seats",
              '18" sport wheels',
              "Blind spot detection system and cross traffic alert",
              "Wireless charger for Smartphone"
            ]
          }
        ]
      },
      {
        id: 3,
        make: "kia",
        model: "Sportage",
        year: "2019",
        price: 23750,
        category: "suv",
        front:
          "https://www.kia.com/us/k3/content/media/mediabin/vehicle/overview/CMS/vehicles/sportage/2019/overview/overview_mtf_sportage_2019--original.png",
        gallery:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Galeria/EXT/Detail_images/desktop/galeia_exterior_kia_sportage_w_6.jpg",
        cylinders: 4,
        maxPower: 181,
        transmissionType: "Dual Continuously Variable Valve Timing (CVVT)",
        doors: 4,
        feCity: 23,
        feHwy: 30,
        feCombined: 26,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-LX_PearlBlack.png",

            features: [
              "6 air bags",
              '7" touch screen with Android Auto ® and Apple Carplay ®',
              "Manual air conditioning with rear air outlet",
              "Normal / Sport Drive",
              "Rear sensors"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-EX_CoolSIlver.png",

            features: [
              "6 air bags",
              '7" touch screen with Android Auto ® and Apple Carplay ®',
              "Normal / Sport Drive",
              "Rear sensors",
              "Reverse camera",
              '17" sport wheels'
            ]
          },
          {
            id: 2,
            version: "ex pack",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-EX_Pack_DarkGray.png",

            features: [
              "6 air bags",
              '7" touch screen with Android Auto ® and Apple Carplay ®',
              "Normal / Sport Drive",
              "Smart trunk",
              "Reverse camera",
              '17" sport wheels'
            ]
          },
          {
            id: 3,
            version: "sxl awd",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new_sportage/2019/Componente-SXL_AWD_SparkingSilver.png",

            features: [
              "6 air bags",
              'Touch screen 8" with Android Auto ® and Apple Carplay ®',
              "Wireless charger",
              "Normal / Sport / ECO Drive",
              "Rain sensors",
              "Front and rear sensors",
              "Lane maintenance system",
              "Cross traffic alert",
              "Reverse camera",
              '19" sport wheels'
            ]
          }
        ]
      },
      {
        id: 4,
        make: "kia",
        model: "Sorento",
        year: "2019",
        price: 26290,
        category: "suv",
        front:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/kia-sorento-sh-icono.png",
        gallery:
          "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/galeria/ext/big/kia-sorento-sh-galeria-exterior-4-pc.jpg",
        cylinders: 4,
        maxPower: 185,
        transmissionType: "Dual Continuously Variable Valve Timing (CVVT)",
        doors: 4,
        feCity: 22,
        feHwy: 29,
        feCombined: 25,
        versions: [
          {
            id: 0,
            version: "lx",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/Trim_List/KIA-sorento-LXTA.png",

            features: [
              '7" touch screen',
              "Android Auto ® and Apple Carplay ® connectivity",
              "Reverse camera",
              "heated seats"
            ]
          },
          {
            id: 1,
            version: "ex",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/Trim_List/KIA-sorento-EXTA-2.png",

            features: [
              "front fog lights",
              "leather seats",
              "automatic A/C",
              "wireless smartphone charger"
            ]
          },
          {
            id: 2,
            version: "ex pack",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/Trim_List/KIA-sorento-EXPACKTA.png",

            features: [
              '8" touch screen with Android Auto ® and Apple Carplay ®',
              'supervision cluster with 7" screen',
              "electrically folding side mirrors",
              "panoramic ceiling"
            ]
          },
          {
            id: 3,
            version: "sxl",
            img:
              "https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/new-sorento/sorento_2018/Trim_List/KIA-sorento-SXLAWDTA.png",

            features: [
              "360º camera",
              "harman kardon premium audio",
              "nappa leather seats",
              "Front parking sensors"
            ]
          }
        ]
      }
    ]
  };

  logoutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <List list={this.state.list} />
        {/* <Text>Vehicles</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

Vehicles.propTypes = {
  getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUser }
)(Vehicles);
