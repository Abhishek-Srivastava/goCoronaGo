import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import CumulativeDataContextProvider from './shared/apiClient';
import StateDataContextProvider from './shared/apiDistrictwise';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
  'Nunito-Italic': require('./assets/fonts/Nunito/Nunito-Italic.ttf'),
  'Nunito-BoldItalic': require('./assets/fonts/Nunito/Nunito-BoldItalic.ttf'),
  'Nunito-SemiBold': require('./assets/fonts/Nunito/Nunito-SemiBold.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded]  = useState(false);
  
  if(fontsLoaded) {
    return (
      <CumulativeDataContextProvider>
        <StateDataContextProvider>
        <Navigator />
         </StateDataContextProvider>
       </CumulativeDataContextProvider>
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        />
    )
  }
}
