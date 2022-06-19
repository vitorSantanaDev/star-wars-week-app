import { StyleSheet } from 'react-native'
import { theme } from '~/styles'

export function styleSheet(props) {
  const {} = props

  return StyleSheet.create({
    HeroWrapper: {
      width: '100%',
      flexDirection: 'column',
      height: theme.metrics.pixel(460),
    },
    HeroImageBackground: {
      width: '100%',
      height: '100%',
    },
    GradientStyle: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      paddingTop: theme.metrics.pixel(56),
      paddingHorizontal: theme.metrics.pixel(24),
    },
    ButtonsWrapper: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: theme.metrics.pixel(12),
    },
  })
}
