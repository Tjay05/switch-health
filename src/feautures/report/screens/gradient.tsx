import React, { useState } from "react";
import { View, Text, StyleSheet, PanResponder } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const GradientLine = () => {
  const [color, setColor] = useState("#00fe99");
  const [position, setPosition] = useState(0);

  const gradientColors = ["#ff0000", "#00ff00", "#0000ff"];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const x = gestureState.moveX;
      const width = 300; // width of the gradient line
      if (x >= 0 && x <= width) {
        setPosition(x);
        const selectedColor = interpolateColor(x / width, gradientColors);
        setColor(selectedColor);
      }
    },
  });

  const interpolateColor = (value, colors) => {
    const numColors = colors.length;
    const scale = (numColors - 1) * value;
    const leftIndex = Math.floor(scale);
    const rightIndex = Math.ceil(scale);
    const blend = scale - leftIndex;

    const leftColor = hexToRgb(colors[leftIndex]);
    const rightColor = hexToRgb(colors[rightIndex]);
    const resultColor = {
      r: Math.round(leftColor.r + blend * (rightColor.r - leftColor.r)),
      g: Math.round(leftColor.g + blend * (rightColor.g - leftColor.g)),
      b: Math.round(leftColor.b + blend * (rightColor.b - leftColor.b)),
    };

    return rgbToHex(resultColor);
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }) => {
    const toHex = (value) => value.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>
        Development Dashboard
      </Text>

      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        {...panResponder.panHandlers}
      >
        <View
          style={[
            styles.indicator,
            { left: position - 15, backgroundColor: color },
          ]}
        />
      </LinearGradient>

      <View style={[styles.preview, { backgroundColor: color }]}>
        <Text style={styles.previewText}>Preview Color</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  gradient: {
    width: 300,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 20,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  preview: {
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    color: "white",
    fontSize: 16,
  },
});

export default GradientLine;
