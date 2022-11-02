import React from 'react';
import {StyleSheet, Modal, Text, View, ActivityIndicator} from 'react-native';

import {STATUS_BAR_HEIGHT} from '../../../../constants';
import {heightPercentageToDpi} from '../../../../services/responsive';
import TextField from '../../../common/TextField';
import ButtonRounded from '../../../common/ButtonRounded';

import {globalStyles, gap} from '../../../../../styles';

const styles = StyleSheet.create({
  body: {
    marginTop: heightPercentageToDpi(15) + STATUS_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  title: {
    marginTop: gap(),
    fontSize: 24,
    color: 'white',
  },
  form: {
    paddingTop: gap(2),
    alignSelf: 'stretch',
  },
  textField: {
    marginBottom: gap(),
  },
  button: {
    marginTop: gap(),
    marginHorizontal: gap(1.5),
  },
});

const CreateRewardModal = ({
  handleModalClose,
  rewardForm,
  handleFormValueChange,
  handleCreateReward,
  isSubmitButtonDisabled,
  isRewardCreating,
}) => (
  <Modal
    onRequestClose={handleModalClose}
    animationType="slide"
    transparent
  >
    <View
      style={[globalStyles.flex1, globalStyles.innerGaps, styles.body]}
      behavior="height"
    >
      <Text style={styles.title}>Give reward</Text>
      <View style={styles.form}>
        <TextField
          label="To"
          name="toUser"
          style={styles.textField}
          value={rewardForm.toUser.value}
          isValid={rewardForm.toUser.isValid}
          errorMessage={rewardForm.toUser.errorMessage}
          onChangeText={handleFormValueChange}
        />
        <TextField
          label="Amount"
          name="amount"
          keyboardType="numeric"
          style={styles.textField}
          value={rewardForm.amount.value}
          isValid={rewardForm.amount.isValid}
          errorMessage={rewardForm.amount.errorMessage}
          onChangeText={handleFormValueChange}
        />
        <TextField
          label="Message"
          name="message"
          style={styles.textField}
          value={rewardForm.message.value}
          isValid={rewardForm.message.isValid}
          errorMessage={rewardForm.message.errorMessage}
          onChangeText={handleFormValueChange}
          multiline
          numberOfLines={5}
          maxLength={256}
        />
        <ButtonRounded
          title="Give"
          accessibilityLabel="Give reward"
          style={styles.button}
          onPress={handleCreateReward}
          disabled={isSubmitButtonDisabled}
        >
          {isRewardCreating && (
            <ActivityIndicator
              size="small"
              color="black"
            />
          )}
        </ButtonRounded>
        <ButtonRounded
          title="Cancel"
          accessibilityLabel="Cancel"
          style={styles.button}
          onPress={handleModalClose}
        />
      </View>
    </View>
  </Modal>
);

export default CreateRewardModal;
