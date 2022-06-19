import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SplashScreen, Home, Detail } from '~/screens'
import { routeName } from './routesName'

export default function Routes() {
  const Stack = createNativeStackNavigator()

  const screenOptions = {
    header: (_) => null,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName.SPLASH_SCREEN}>
        <Stack.Screen
          name={routeName.SPLASH_SCREEN}
          component={SplashScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name={routeName.HOME}
          component={Home}
          options={screenOptions}
        />
        <Stack.Screen
          name={routeName.DETAIL}
          component={Detail}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
