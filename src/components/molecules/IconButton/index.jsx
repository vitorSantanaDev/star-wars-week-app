import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function IconButton({ iconName, label, onPressHandler }) {
  const styles = styleSheet({})
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.ButtonContainer}>
      <Ionicons
        name={iconName}
        color={theme.colors.white}
        size={theme.metrics.pixel(24)}
      />
      <Text style={styles.LabelStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  OnPressHandler: PropTypes.func.isRequired,
}
