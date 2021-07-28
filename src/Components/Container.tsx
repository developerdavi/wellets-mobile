import { Box } from 'native-base';
import React from 'react';
import styles from '../Config/Styles';

const Container: React.FC = ({ children }) => {
  return <Box style={styles.container}>{children}</Box>;
};

export default Container;
