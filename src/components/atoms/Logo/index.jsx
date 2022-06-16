import React from "react";
import PropTypes from "prop-types";

import LogoEmpire from "../../../../assets/images/LogoEmpire.svg";

import { styleSheet } from "./styles";

export default function Logo({ size }) {
  const styles = styleSheet({ size });

  return <LogoEmpire style={styles.LogoStyle} width={size} height={size} />;
}

Logo.propTypes = {
  size: PropTypes.number,
};
