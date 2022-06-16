import React from 'react'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  SourceSansPro_700Bold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
  SourceSansPro_600SemiBold,
} from '@expo-google-fonts/source-sans-pro'

import SplashScreen from './src/screens/SplashScreen'

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_700Bold,
    SourceSansPro_400Regular,
    SourceSansPro_900Black,
    SourceSansPro_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>
      <SplashScreen />
    </View>
  )
}
