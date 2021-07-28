import { StatusBar, StyleSheet } from 'react-native';
import constants from './Constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: constants.bgColor,
    paddingHorizontal: 20,
  },
});

export default styles;
