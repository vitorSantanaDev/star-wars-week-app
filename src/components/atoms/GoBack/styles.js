import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    ButtonContainer: {
      position: 'absolute',
      top: theme.metrics.pixel(64),
      paddingLeft: theme.metrics.pixel(24),
    },
  })
}
