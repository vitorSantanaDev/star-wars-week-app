import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export function styleSheet(props) {
  const { size = 28, weight, color = theme.colors.white } = props;

  return StyleSheet.create({
    HeadingStyle: {
      fontSize: size,
      fontWeight: weight,
      color: color,
      marginVertical: 8,
    },
  });
}
