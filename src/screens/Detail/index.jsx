import React from 'react'

import { useDataStore } from '~/services/store'

import { ScreenWrapper, Hero, GoBack } from '~/components'

export default function SplashScreen() {
  const { selectedData } = useDataStore()
  return (
    <ScreenWrapper>
      <Hero content={selectedData} onDetail />
      <GoBack />
    </ScreenWrapper>
  )
}
