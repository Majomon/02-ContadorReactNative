import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {contador}
      </Text>
      {/*     <Button title="Click" onPress={() => setContador(contador + 1)} /> */}
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={{backgroundColor: 'red', borderRadius: 100}}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
