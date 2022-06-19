import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    ButtonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      height: theme.metrics.pixel(36),
      width: theme.metrics.pixel(100),
      borderRadius: theme.metrics.pixel(8),
      backgroundColor: theme.colors.white,
    },
    TextStyle: {
      color: theme.colors.backDarK,
      fontFamily: theme.fonts.bold,
      fontSize: theme.metrics.pixel(14),
    },
  })
}
