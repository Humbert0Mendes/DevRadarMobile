import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -8.080811, longitude: -34.9431267 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars3.githubusercontent.com/u/33851334?s=460&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", {
                github_username: "humbert0mendes"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Humberto Mendes</Text>
              <Text style={styles.devBio}>
                Software development analyst, seeking to develop solutions to
                improve the life of users. A passion for technology innovation.
              </Text>
              <Text style={styles.devTechs}>ReactJS, React-Native, NodeJS</Text>
            </View>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: -8.0802308, longitude: -34.9440938 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars2.githubusercontent.com/u/6799343?s=460&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", {
                github_username: "gisomarjr"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Gisomar Junior</Text>
              <Text style={styles.devBio}>
                Software development analyst, seeking to develop solutions to
                improve the life of users. A passion for technology innovation.
              </Text>
              <Text style={styles.devTechs}>ReactJS, React-Native, NodeJS</Text>
            </View>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: -8.0812555, longitude: -34.9467676 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars3.githubusercontent.com/u/34212293?s=460&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", {
                github_username: "samuelffn"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Gisomar Junior</Text>
              <Text style={styles.devBio}>
                Software development analyst, seeking to develop solutions to
                improve the life of users. A passion for technology innovation.
              </Text>
              <Text style={styles.devTechs}>ReactJS, React-Native, NodeJS</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Estacionamento..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF"
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16
  },

  devBio: {
    color: "#666",
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  },

  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row"
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#0c912f",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});

export default Main;
