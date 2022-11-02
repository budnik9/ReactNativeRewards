import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {globalStyles, colors} from '../../../styles';
import useStore from '../../hooks/useStore';
import Avatar from '../common/Avatar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brandPrimary,
  },
  name: {
    fontSize: 20,
  },
});

const ProfileInfo = () => {
  const {
    state: {profile},
  } = useStore();

  return (
    <View style={[globalStyles.flex1, globalStyles.rowCenteredContainer, styles.container]}>
      <Avatar
        url={profile.avatarUrl}
        isBig
      />
      <View style={globalStyles.innerGaps}>
        <Text style={[styles.name, globalStyles.textBold, globalStyles.textBlack]}>
          {profile.name} {profile.lastName}
        </Text>
        <Text style={globalStyles.textBlack}>
          <Text>
            Given <Text style={globalStyles.textBold}>${profile.rewardsAmount.given}</Text>
          </Text>
          <Text> / </Text>
          <Text>
            Recieved <Text style={globalStyles.textBold}>${profile.rewardsAmount.received}</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
