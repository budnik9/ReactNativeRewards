import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Avatar from '../../../common/Avatar';

import {globalStyles} from '../../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
  },
  rewardInfo: {
    color: '#96999c',
    fontSize: 12,
  },
});

const Reward = ({fromUser, toUser, message, date}) => (
  <View style={[globalStyles.innerGaps, styles.container]}>
    <Avatar url={toUser.avatarUrl} />
    <View style={[globalStyles.flex1, globalStyles.innerHorizontalGaps]}>
      <Text style={[globalStyles.textBlack, styles.message]}>{message}</Text>
      <View style={globalStyles.innerVerticalGaps}>
        <Text style={styles.rewardInfo}>
          <Text>{`${toUser.name} ${toUser.lastName} rewarded by ${fromUser.name} ${fromUser.lastName}`}</Text>
          <Text>{'\n'}</Text>
          <Text>{date}</Text>
        </Text>
      </View>
    </View>
  </View>
);

export default React.memo(Reward);
