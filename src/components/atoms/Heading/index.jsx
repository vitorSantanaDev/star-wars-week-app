import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'react-native'
import { styleSheet } from './styles'

export default function Heading({ text, size, font, color, ...props }) {
  const styles = styleSheet({ size, font, color, ...props })
  return <Text style={styles.HeadingStyle}>{text}</Text>
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  font: PropTypes.string,
  color: PropTypes.string,
}
