import { ActivityIndicator, View } from 'react-native'
import { theme } from '~/styles'

export default function Loading() {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: theme.metrics.pixel(24),
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.redPrimary} />
    </View>
  )
}
