import React from 'react'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  SourceSansPro_700Bold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
  SourceSansPro_600SemiBold,
} from '@expo-google-fonts/source-sans-pro'

import Routes from '~/routes'

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

  return <Routes />
}
