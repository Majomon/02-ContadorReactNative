import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>W: {width}</Text>
      <Text style={styles.title}>H: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
