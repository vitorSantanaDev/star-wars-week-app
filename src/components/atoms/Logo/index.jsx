import React from 'react'
import PropTypes from 'prop-types'

import LogoEmpire from '../../../../assets/images/LogoEmpire.svg'

import { styleSheet } from './styles'
import { theme } from '~/styles'

export default function Logo({ size }) {
  const styles = styleSheet({ size })

  const sizes = {
    small: 28,
    large: 64,
  }
  const sizeMetric = theme.metrics.pixel(sizes[size])

  return (
    <LogoEmpire
      width={sizeMetric}
      height={sizeMetric}
      style={styles.LogoStyle}
    />
  )
}

Logo.propTypes = {
  size: PropTypes.string,
}
