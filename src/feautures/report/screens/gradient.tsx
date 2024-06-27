import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ColorPicker } from "react-native-color-picker";

function GradientLine() {
  const [color, setColor] = useState("#00fe99");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>
        Development Dashboard
      </Text>

      {showColorPicker && (
        <ColorPicker
          onColorSelected={handleColorChange}
          style={{ height: 200, width: "100%" }}
        />
      )}

      <Button title="Toggle Color Picker" onPress={toggleColorPicker} />

      <View style={[styles.preview, { backgroundColor: color }]}>
        <Text style={styles.previewText}>Preview Color</Text>
      </View>
    </View>
  );
}

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
