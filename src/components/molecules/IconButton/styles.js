import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    ButtonContainer: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    LabelStyle: {
      color: theme.colors.white,
      fontSize: theme.metrics.pixel(10),
      fontFamily: theme.fonts.semiBold,
    },
  })
}
