import React from 'react'
import PropTypes from 'prop-types'

import { styleSheet } from './styles'
import { Text, View } from 'react-native'

export default function Tag({ text, ...props }) {
  const styles = styleSheet({ ...props })
  return (
    <View style={styles.TagContainer}>
      <Text style={styles.TextStyle}>{text}</Text>
    </View>
  )
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
}
