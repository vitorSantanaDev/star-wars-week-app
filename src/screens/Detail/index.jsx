import React from 'react'
import { Text } from 'react-native'

import { useDataStore } from '~/services/store'

import { APP_TEXT } from '~/util/appTexts'

import { ScreenWrapper, Hero, GoBack } from '~/components'

import { styleSheet } from './styles'

export default function SplashScreen() {
  const styles = styleSheet({})
  const { selectedData } = useDataStore()
  return (
    <ScreenWrapper>
      <Hero content={selectedData} onDetail />
      <Text style={styles.titleDetails}>{APP_TEXT.DETAILS_TITLE}</Text>
      <Text style={styles.textDetails}>{selectedData.description}</Text>
      <GoBack />
    </ScreenWrapper>
  )
}
