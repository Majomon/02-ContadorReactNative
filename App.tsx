import React from 'react';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
/* import {HolaMundoScreen} from './src/screens/HolaMundoScreen'; */
/* import {ContadorScreen} from './src/screens/ContadorScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*   <HolaMundoScreen /> */}
      {/*     <ContadorScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
