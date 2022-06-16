import React from 'react'

import { APP_TEXT } from '../../util/appTexts'

import { Heading, Logo, ScreenWrapper } from '../../components'

export default function SplashScreen() {
  return (
    <ScreenWrapper alignItem="center" justifyContent="center">
      <Logo size={64} />
      <Heading size={24} font="bold" text={APP_TEXT.SPLASH_SCREEN_TEXT} />
    </ScreenWrapper>
  )
}
