import React from 'react';
import {StyleSheet, Image} from 'react-native';

const DEFAULT_AVATAR_URL = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 999,
    height: 50,
    width: 50,
  },
  big: {
    height: 80,
    width: 80,
  },
});

const Avatar = ({url, isBig}) => (
  <Image
    style={[styles.avatar, isBig && styles.big]}
    source={{
      uri: url ?? DEFAULT_AVATAR_URL,
    }}
  />
);

export default React.memo(Avatar);
