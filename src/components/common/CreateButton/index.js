import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';

import {platforms} from '../../../constants';
import {heightPercentageToDpi} from '../../../services/responsive';
import ButtonRounded from '../ButtonRounded';

const TITLE_SIZE = heightPercentageToDpi(6);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 0,
    backgroundColor: 'black',
  },
  title: {
    position: 'relative',
    top: Platform.OS === platforms.ANDROID ? 4 : 0,
    fontSize: TITLE_SIZE,
    lineHeight: TITLE_SIZE,
    fontWeight: '300',
    color: 'white',
  },
});

const CreateButton = ({style, ...props}) => (
  <ButtonRounded
    {...props}
    style={[styles.button, style]}
  >
    <Text style={styles.title}>+</Text>
  </ButtonRounded>
);

export default CreateButton;
