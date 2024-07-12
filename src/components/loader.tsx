import LoaderLogo from "@/assets/icons/logo";
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size={60} color="#1A1F71" />
      </View>
      <View style={styles.logoContainer}>
        <LoaderLogo height={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 7,
  },
  indicatorContainer: {
    position: "absolute",
    top: "50%",
    marginTop: -30, // Half of the ActivityIndicator size (60 / 2)
  },
  logoContainer: {
    position: "absolute",
    bottom: 20, // Adjust as needed
  },
});

export default Loading;
