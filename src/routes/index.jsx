import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BottomBar } from '~/components'

import { SplashScreen, Home, Detail, Search, Favorites } from '~/screens'
import { routeName } from './routesName'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  const defaultOptionsScreen = {
    header: (_) => null,
  }

  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          header: defaultOptionsScreen.header,
          tabBarLabel: 'Pesquisar',
        }}
      />
      <Tab.Screen options={defaultOptionsScreen} name="Home" component={Home} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          header: defaultOptionsScreen.header,
          tabBarLabel: 'Favoritos',
        }}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  const Stack = createNativeStackNavigator()

  const defaultOptionsScreen = {
    header: (_) => null,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName.SPLASH_SCREEN}>
        <Stack.Screen
          component={SplashScreen}
          name={routeName.SPLASH_SCREEN}
          options={defaultOptionsScreen}
        />
        <Stack.Screen
          name={routeName.HOME}
          component={BottomRoute}
          options={defaultOptionsScreen}
        />
        <Stack.Screen
          component={Detail}
          name={routeName.DETAIL}
          options={defaultOptionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
