import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={{ uri: 'https://lottie.host/246f358f-b241-4127-9024-f603d494cb1a/uWpW72wg0r.json' }}
        autoPlay
        loop
        speed={4}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    // flexDirection: 'column',
    alignItems: "center",
    zIndex: 7,
    backgroundColor: 'rgba(0, 0, 0, .07)',
  },
  animation: {
    width: 170,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;