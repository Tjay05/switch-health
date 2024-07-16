import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing, Modal } from "react-native";
import Svg, { Circle, G, Defs, LinearGradient, Stop } from "react-native-svg";
import LoaderLogo from "@/assets/icons/logo"; // Ensure the path to your logo is correct

const RotatingLoader = ({ size, color }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startRotation = () => {
      rotateValue.setValue(0);
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    const startScaling = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startRotation();
    startScaling();
  }, [rotateValue, scaleValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.loaderContainer}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <LoaderLogo height={60} width={60} />
      </Animated.View>
      <Animated.View style={{ transform: [{ rotate }], position: "absolute" }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={color} stopOpacity="1" />
              <Stop offset="100%" stopColor={color} stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="url(#grad)"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference / 2.5}, ${circumference}`}
              fill="none"
            />
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
};

const Loading = ({ visible }) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <RotatingLoader size={40} color="#1A1F71" />
      </View>
    </Modal>
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
    backgroundColor: "rgba(0,0,0,0.09)"
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
