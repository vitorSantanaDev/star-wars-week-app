import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {
    size = 28,
    font,
    color = theme.colors.white,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
  } = props

  return StyleSheet.create({
    HeadingStyle: {
      color: color,
      fontFamily: theme.fonts[font],
      fontSize: theme.metrics.pixel(size),
      marginTop: theme.metrics.pixel(marginTop || 0),
      marginLeft: theme.metrics.pixel(marginLeft || 0),
      marginRight: theme.metrics.pixel(marginRight || 0),
      marginBottom: theme.metrics.pixel(marginBottom || 0),
    },
  })
}
