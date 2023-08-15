import React from 'react';
import {SafeAreaView} from 'react-native';
import {PositionScreen} from './src/screens/PositionScreen';
/* import {HolaMundoScreen} from './src/screens/HolaMundoScreen'; */
/* import {ContadorScreen} from './src/screens/ContadorScreen'; */
/* import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen'; */
/* import {DimensionesScreen} from './src/screens/DimensionesScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*   <HolaMundoScreen /> */}
      {/*     <ContadorScreen /> */}
      {/*   <BoxObjectModelScreen /> */}
      {/*     <DimensionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
