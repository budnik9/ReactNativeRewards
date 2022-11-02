import React, {useCallback} from 'react';
import {StyleSheet, View, TextInput, Text, Platform} from 'react-native';

import {colors, gap} from '../../../../styles';
import {platforms} from '../../../constants';

const invalidColor = 'red';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  label: {
    marginLeft: gap(0.5),
    marginBottom: 6,
    fontSize: 16,
    color: colors.brandSecondary,
  },
  textField: {
    paddingVertical: Platform.OS === platforms.ANDROID ? gap(0.5) : 0,
    borderWidth: 1,
    borderColor: colors.brandSecondary,
    color: 'white',
  },
  textFieldInvalid: {
    borderColor: invalidColor,
  },
  labelInvalid: {
    color: invalidColor,
  },
  errorMessage: {
    position: 'absolute',
    left: gap(0.5),
    bottom: gap(-1),
    fontSize: 12,
    color: invalidColor,
  },
});

const TextField = ({
  label,
  name,
  isValid = true,
  errorMessage,
  style,
  autoCapitalize = 'none',
  autoCorrect = false,
  multiline = false,
  numberOfLines = 1,
  onChangeText,
  ...props
}) => {
  const handleChangeText = useCallback(text => onChangeText(text, name), [onChangeText, name]);

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, !isValid && styles.labelInvalid]}>{label}</Text>
      <TextInput
        {...props}
        onChangeText={handleChangeText}
        style={[styles.textField, !isValid && styles.textFieldInvalid]}
        multiline={multiline}
        height={gap(numberOfLines + 1)}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        textAlignVertical="top"
      />
      {errorMessage && !isValid && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default TextField;
