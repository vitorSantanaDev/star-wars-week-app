import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function PlayButton({ onPressHandler }) {
  const styles = styleSheet({})

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.ButtonContainer}>
      <Ionicons
        name="play"
        color={theme.colors.backDarK}
        size={theme.metrics.pixel(12)}
      />
      <Text style={styles.TextStyle}>Play</Text>
    </TouchableOpacity>
  )
}

PlayButton.propTypes = {
  onPressHandler: PropTypes.func.isRequired,
}
