import { View } from 'react-native'
import PropTypes from 'prop-types'

import { styleSheet } from './styles'

export default function ScreenWrapper({
  children,
  direction,
  alignItem,
  justifyContent,
}) {
  const styles = styleSheet({ direction, alignItem, justifyContent })
  return <View style={styles.ScreenWrapper}>{children}</View>
}

ScreenWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  alignItem: PropTypes.string,
  justifyContent: PropTypes.string,
}
