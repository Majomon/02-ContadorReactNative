import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Contador: {contador}</Text>
      {/*     <Button title="Click" onPress={() => setContador(contador + 1)} /> */}
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.buttonIncrement}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tittle: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  buttonIncrement: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
