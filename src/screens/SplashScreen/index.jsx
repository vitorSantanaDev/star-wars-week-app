import React, { useEffect } from 'react'

import { APP_TEXT } from '../../util/appTexts'

import { Heading, Logo, ScreenWrapper } from '~/components'
import { routeName } from '~/routes/routesName'

export default function SplashScreen({ navigation }) {
  function goToHomeScreen() {
    setTimeout(() => {
      navigation.navigate(routeName.HOME)
    }, 3000)
  }
  useEffect(goToHomeScreen, [navigation])

  return (
    <ScreenWrapper alignItem="center" justifyContent="center">
      <Logo size="large" />
      <Heading size={24} font="bold" text={APP_TEXT.SPLASH_SCREEN_TEXT} />
    </ScreenWrapper>
  )
}
