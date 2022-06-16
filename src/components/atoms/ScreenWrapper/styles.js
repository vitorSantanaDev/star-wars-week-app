import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const { direction, alignItem, justifyContent } = props

  return StyleSheet.create({
    ScreenWrapper: {
      flex: 1,
      backgroundColor: theme.colors.backLight,
      flexDirection: direction ? direction : 'column',
      alignItems: alignItem ? alignItem : 'flex-start',
      justifyContent: justifyContent ? justifyContent : 'flex-start',
    },
  })
}
