import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  //react.fragment 실제 렌더링에 반영안되는 추상 컨테이너
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Lotto Number</Text>
      <Text style={styles.text}></Text>
      <View style={styles.row}>
        <View style={styles.ball}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>11</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>21</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>31</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>41</Text>
        </View>
        <View style={styles.ball}>
          <Text style={styles.text}>45</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#000000",
    borderWidth: 1,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  ball: {
    width: 50,
    height: 50,
    backgroundColor: "#e5e5e5",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});
