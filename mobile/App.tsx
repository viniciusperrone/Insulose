import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { SecularOne_400Regular } from '@expo-google-fonts/secular-one';
import AppLoading from 'expo-app-loading';

import ContextProvider from './src/hooks/';
import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    SecularOne_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }
  return (
    <ContextProvider>
      <StatusBar
        style="auto"
        translucent
      />
      <Routes />
    </ContextProvider>
  );
}

export default App;

