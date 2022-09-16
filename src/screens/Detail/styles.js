import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    titleDetails: {
      color: theme.colors.white,
      fontFamily: theme.fonts.balck,
      fontSize: theme.metrics.pixel(18),
      marginLeft: theme.metrics.pixel(24),
    },
    textDetails: {
      color: theme.colors.white,
      fontFamily: theme.fonts.regular,
      fontSize: theme.metrics.pixel(14),
      lineHeight: theme.metrics.pixel(20),
      marginVertical: theme.metrics.pixel(12),
      marginHorizontal: theme.metrics.pixel(24),
    },
  })
}
