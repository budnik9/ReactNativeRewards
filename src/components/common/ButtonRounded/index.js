import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

import {gap, globalStyles} from '../../../../styles';
import {heightPercentageToDpi, widthPercentageToDpi} from '../../../services/responsive';

const styles = StyleSheet.create({
  button: {
    paddingVertical: gap(0.5),
    minWidth: widthPercentageToDpi(15),
    backgroundColor: 'white',
    borderRadius: 30,
  },
  buttonDisabled: {
    backgroundColor: '#a6a6a6',
  },
  title: {
    fontSize: heightPercentageToDpi(2.5),
    fontWeight: '600',
    color: 'black',
  },
});

const ButtonRounded = ({children, title, onPress, style, disabled = false}) => (
  <Pressable
    style={[globalStyles.columnCenteredContainer, styles.button, disabled && styles.buttonDisabled, style]}
    onPress={onPress}
    disabled={disabled}
  >
    {children || <Text style={styles.title}>{title}</Text>}
  </Pressable>
);

export default ButtonRounded;
