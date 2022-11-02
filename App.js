import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Layout from './src/components/Layout';
import StoreProvider from './src/context/StoreContext';
import TabNavigator from './src/components/TabNavigator';

import {globalStyles} from './styles';

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={globalStyles.flex1}>
      <StoreProvider>
        <Layout>
          <TabNavigator />
        </Layout>
      </StoreProvider>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
