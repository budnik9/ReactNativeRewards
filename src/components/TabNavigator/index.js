import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Rewards from '../Rewards';
import useStore from '../../hooks/useStore';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const {state} = useStore();

  const MyRewardsComponent = useCallback(
    () => <Rewards filterItem={item => item.toUser.id === state.profile.id} />,
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => <ActivityIndicator size="large" />,
      }}
    >
      <Tab.Screen
        name="Rewards"
        component={Rewards}
      />
      <Tab.Screen
        name="MyRewards"
        component={MyRewardsComponent}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
