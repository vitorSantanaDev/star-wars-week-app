import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const { marginTop, marginRight, marginBottom, marginLeft } = props

  return StyleSheet.create({
    TagContainer: {
      width: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      height: theme.metrics.pixel(24),
      maxWidth: theme.metrics.pixel(80),
      borderRadius: theme.metrics.pixel(24),
      backgroundColor: theme.colors.redPrimary,
      paddingHorizontal: theme.metrics.pixel(6),
      marginTop: theme.metrics.pixel(marginTop || 0),
      marginLeft: theme.metrics.pixel(marginLeft || 0),
      marginRight: theme.metrics.pixel(marginRight || 0),
      marginBottom: theme.metrics.pixel(marginBottom || 0),
    },
    TextStyle: {
      color: theme.colors.white,
      fontFamily: theme.fonts.bold,
      fontSize: theme.metrics.pixel(14),
    },
  })
}
