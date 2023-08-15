import React from 'react';
import {SafeAreaView} from 'react-native';
import {Tarea1Screen} from './src/screens/Tarea1Screen';
/* import {HolaMundoScreen} from './src/screens/HolaMundoScreen'; */
/* import {ContadorScreen} from './src/screens/ContadorScreen'; */
/* import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen'; */
/* import {DimensionesScreen} from './src/screens/DimensionesScreen'; */
/* import {PositionScreen} from './src/screens/PositionScreen'; */
/* import {FlexScreen} from './src/screens/FlexScreen'; */

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*   <HolaMundoScreen /> */}
      {/*     <ContadorScreen /> */}
      {/*   <BoxObjectModelScreen /> */}
      {/*     <DimensionesScreen /> */}
      {/*       <PositionScreen /> */}
      {/*   <FlexScreen /> */}
      <Tarea1Screen />
    </SafeAreaView>
  );
};

export default App;
