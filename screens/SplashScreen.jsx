import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>κουί<Text style={styles.highlight}>ζ</Text>u</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#184F78', // Dark blue background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: -30
  },
  logo: {
    fontSize: 55,
    fontFamily: 'RobotoSerif-BoldItalic', // Ensure this font is properly linked
    color: '#ffffff', // White text
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#FEDC62', // Yellow 'z'
  },
});

export default SplashScreen;
