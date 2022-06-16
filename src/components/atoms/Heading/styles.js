import { StyleSheet } from 'react-native'
import { theme } from '../../../styles'

export function styleSheet(props) {
  const { size = 28, font, color = theme.colors.white } = props

  return StyleSheet.create({
    HeadingStyle: {
      color: color,
      marginVertical: theme.metrics.pixel(12),
      fontSize: theme.metrics.pixel(size),
      fontFamily: theme.fonts[font],
    },
  })
}
