import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function interpolateColor(color1, color2, factor) {
  if (!color1 || !color2) return [0, 0, 0]; // Default color if input is invalid
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
  }
  return result;
}

function rgbToHex(rgb) {
  return (
    "#" +
    ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
}

function hexToRgb(hex) {
  if (!hex || hex.length !== 7) return [0, 0, 0]; // Default to black if invalid input
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

const GradientLine = ({ bmi, onColorChange }) => {
  const [position, setPosition] = useState(0);

  const gradientColors = ["#B5D4F1", "#81E5DB", "#E8D284", "#E2798E"];
  const minRange = 15;
  const maxRange = 40;
  const width = 150;

  useEffect(() => {
    const newPosition = ((bmi - minRange) / (maxRange - minRange)) * width;
    setPosition(newPosition);

    const colorIndex = Math.min(
      Math.floor(
        ((bmi - minRange) / (maxRange - minRange)) * (gradientColors.length - 1)
      ),
      gradientColors.length - 2
    );
    const colorFactor =
      ((bmi - minRange) / (maxRange - minRange)) * (gradientColors.length - 1) -
      colorIndex;
    const color = interpolateColor(
      hexToRgb(gradientColors[colorIndex]),
      hexToRgb(gradientColors[colorIndex + 1]),
      colorFactor
    );

    onColorChange(rgbToHex(color));
  }, [bmi]);

  const renderMarkers = () => {
    const markers = [15, 18.5, 25, 30, 35, 40];
    return markers.map((marker) => {
      const markerPosition =
        ((marker - minRange) / (maxRange - minRange)) * width;
      return (
        <View
          key={marker}
          style={[styles.marker, { left: markerPosition - 7 }]}
        >
          <Text style={styles.markerText}>{marker}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {renderMarkers()}
          <View style={[styles.indicator, { left: position - 2.5 }]} />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  gradientContainer: {
    position: "relative",
    width: 150,
    borderRadius: 25,
    marginVertical: 20,
  },
  gradient: {
    width: 150,
    height: 15,
    borderRadius: 25,
    justifyContent: "center",
    position: "relative",
  },
  marker: {
    position: "absolute",
    top: 20,
    alignItems: "center",
  },
  markerText: {
    fontSize: 12,
    color: "white",
  },
  indicator: {
    position: "absolute",
    width: 5,
    height: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "white",
    top: -7,
  },
});

export default GradientLine;
