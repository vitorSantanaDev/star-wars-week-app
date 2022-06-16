import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export function styleSheet(props) {
  const {} = props;

  return StyleSheet.create({
    Wrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.backLight,
    },
  });
}
