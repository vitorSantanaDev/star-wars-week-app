import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    ListContainer: {
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    ListContentStyle: {
      paddingBottom: theme.metrics.pixel(24),
      paddingHorizontal: theme.metrics.pixel(24),
    },
  })
}
