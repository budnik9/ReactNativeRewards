import React from 'react';
import {StyleSheet, View} from 'react-native';

import {heightPercentageToDpi} from '../../services/responsive';
import ProfileInfo from '../ProfileInfo';

import {globalStyles} from '../../../styles';

const styles = StyleSheet.create({
  header: {
    minHeight: 100,
    height: heightPercentageToDpi(15),
  },
});

const Layout = ({children}) => (
  <View style={globalStyles.flex1}>
    <View style={styles.header}>
      <ProfileInfo />
    </View>
    <View style={globalStyles.flex1}>{children}</View>
  </View>
);

export default Layout;
