import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    CardWrapper: {
      overflow: 'hidden',
      width: theme.metrics.pixel(88),
      height: theme.metrics.pixel(124),
      marginRight: theme.metrics.pixel(12),
      borderRadius: theme.metrics.pixel(8),
    },
    CardImage: {
      width: '100%',
      height: '100%',
    },
  })
}
