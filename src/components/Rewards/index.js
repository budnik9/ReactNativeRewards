import React from 'react';

import Rewards from './Rewards';
import useStore from '../../hooks/useStore';
import useToggle from '../../hooks/useToggle';

const RewardsContainer = ({filterItem}) => {
  const {state} = useStore();

  const {
    isToggled: isCreateRewardModalVisible,
    setIsToggledOn: openCreateRewardModel,
    setIsToggledOff: closeCreateRewardModal,
  } = useToggle();

  const rewards = filterItem ? state.rewards.filter(filterItem) : state.rewards;

  return (
    <Rewards
      rewards={rewards}
      isCreateRewardModalVisible={isCreateRewardModalVisible}
      openCreateRewardModel={openCreateRewardModel}
      closeCreateRewardModal={closeCreateRewardModal}
    />
  );
};

export default RewardsContainer;
