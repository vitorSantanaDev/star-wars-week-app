import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";
import { styleSheet } from "./styles";

export default function Heading({ text, size, weight, color }) {
  const styles = styleSheet({ size, weight, color });
  return <Text style={styles.HeadingStyle}>{text}</Text>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  weight: PropTypes.string,
  color: PropTypes.string,
};