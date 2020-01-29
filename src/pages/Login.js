import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image source={require("../assets/logo.png")}></Image>
      </View>
      <View styles={styles.viewInputs}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f4",
    padding: 30
  },
  viewLogo: {
    flex: 1,
    justifyContent: "center"
  },
  viewInputs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  btnSubmit: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#efcc1a",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Login;
