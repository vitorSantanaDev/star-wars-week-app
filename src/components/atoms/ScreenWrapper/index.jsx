import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from './styles'

export default function ScreenWrapper({
  children,
  direction,
  alignItem,
  justifyContent,
}) {
  const styles = styleSheet({ direction, alignItem, justifyContent })
  return (
    <ScrollView style={styles.ScrollViewWrapper}>
      <View style={styles.ScreenWrapper}>{children}</View>
    </ScrollView>
  )
}

ScreenWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  alignItem: PropTypes.string,
  justifyContent: PropTypes.string,
}
