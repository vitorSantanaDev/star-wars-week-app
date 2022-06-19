import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function GoBack() {
  const styles = styleSheet({})
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.ButtonContainer}
      onPress={() => navigation.goBack()}
    >
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.pixel(28)}
      />
    </TouchableOpacity>
  )
}
