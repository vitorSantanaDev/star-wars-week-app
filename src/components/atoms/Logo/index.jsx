import React from 'react'
import PropTypes from 'prop-types'

import LogoEmpire from '../../../../assets/images/LogoEmpire.svg'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function Logo({ size }) {
  const styles = styleSheet({ size })
  const sizeMetric = theme.metrics.pixel(size)

  return (
    <LogoEmpire
      width={sizeMetric}
      height={sizeMetric}
      style={styles.LogoStyle}
    />
  )
}

Logo.propTypes = {
  size: PropTypes.number,
}
