import React, {useMemo} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

import Reward from './components/Reward';
import CreateButton from '../common/CreateButton';
import CreateRewardModal from './components/CreateRewardModal';
import {heightPercentageToDpi, widthPercentageToDpi} from '../../services/responsive';

import {globalStyles} from '../../../styles';

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  createRewardButton: {
    position: 'absolute',
    width: widthPercentageToDpi(20),
    right: widthPercentageToDpi(5),
    bottom: heightPercentageToDpi(2),
  },
});

const Rewards = ({rewards, isCreateRewardModalVisible, openCreateRewardModel, closeCreateRewardModal}) => {
  const ListEmptyComponent = useMemo(
    () => (
      <View style={[globalStyles.innerGaps, globalStyles.columnCenteredContainer]}>
        <Text>The list of rewards is empty</Text>
      </View>
    ),
    [],
  );

  return (
    <>
      <FlatList
        style={[globalStyles.flex1, styles.list]}
        data={rewards}
        renderItem={({item}) => <Reward {...item} />}
        keyExtractor={({id}) => id}
        ListEmptyComponent={ListEmptyComponent}
      />
      {isCreateRewardModalVisible && <CreateRewardModal handleModalClose={closeCreateRewardModal} />}
      <CreateButton
        onPress={openCreateRewardModel}
        style={styles.createRewardButton}
      />
    </>
  );
};

export default Rewards;
