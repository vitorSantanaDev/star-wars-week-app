import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props
  return StyleSheet.create({
    bottomBarWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: theme.metrics.pixel(64),
      backgroundColor: theme.colors.backDarK,
    },
    routeTouchableStyle: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textRouteTouchable: {
      fontFamily: theme.fonts.semiBold,
      fontSize: theme.metrics.pixel(10),
    },
  })
}
