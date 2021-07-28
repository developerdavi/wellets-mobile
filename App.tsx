import React from 'react';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

import theme from './src/Config/Theme';
import LoginScreen from './src/Screens/Login';

export default function App(): JSX.Element {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <LoginScreen />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}
