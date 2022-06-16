import React from 'react'
import { View } from 'react-native'

import { APP_TEXT } from '../../util/appTexts'

import { Heading, Logo } from '../../components'

import { styleSheet } from './styles'

export default function SplashScreen() {
  const styles = styleSheet({})

  return (
    <View style={styles.Wrapper}>
      <Logo size={64} />
      <Heading size={24} weight="700" text={APP_TEXT.SPLASH_SCREEN_TEXT} />
    </View>
  )
}
