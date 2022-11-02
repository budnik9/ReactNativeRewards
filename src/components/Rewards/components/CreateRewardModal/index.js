import React, {useCallback, useState} from 'react';

import useForm from '../../../../hooks/useForm';
import useStore from '../../../../hooks/useStore';
import {createReward} from '../../../../reducer';
import {amountValidator, nameValidator} from '../../../../services/validators';
import {generateId, getFormattedDate} from '../../../../services/utils';
import CreateRewardModal from './CreateRewardModal';

import {users} from '../../../../mock';

const CreateRewardModalContainer = ({handleModalClose}) => {
  const {state, dispatch} = useStore();
  const {profile} = state;

  const [isRewardCreating, setIrRewardCreating] = useState(false);

  const {
    values: rewardForm,
    handleValueChange: handleFormValueChange,
    isFormEmpty: isRewardFormEmpty,
    isFormValid: isRewardFormValid,
    getFormData,
  } = useForm({
    toUser: {
      value: '',
      errorMessage: 'Unknown user',
      validators: [
        nameValidator,
        value =>
          Object.values(users)
            .filter(({id}) => id !== profile.id)
            .some(({name, lastName}) => `${name} ${lastName}` === value),
      ],
    },
    amount: {
      value: '',
      errorMessage: 'Invalid amount',
      validators: [
        amountValidator,
        value => {
          const parsedValue = parseFloat(value);
          return Number.isFinite(parsedValue) && parseFloat(value) <= profile.rewardsAmount.given;
        },
      ],
    },
    message: {
      value: '',
    },
  });

  const handleCreateReward = useCallback(() => {
    setIrRewardCreating(true);

    setTimeout(() => {
      const formData = getFormData();
      const toUser = Object.values(users).find(({name, lastName}) => `${name} ${lastName}` === formData.toUser);
      const fromUser = Object.values(users).find(({id}) => id === profile.id);
      const reward = {
        toUser,
        fromUser,
        id: generateId(),
        date: getFormattedDate(),
        message: formData.message,
      };

      dispatch(createReward({reward, amount: +formData.amount}));
      setIrRewardCreating(false);
      handleModalClose();
    }, 3000);
  }, [rewardForm]);

  return (
    <CreateRewardModal
      handleModalClose={handleModalClose}
      rewardForm={rewardForm}
      handleFormValueChange={handleFormValueChange}
      handleCreateReward={handleCreateReward}
      isSubmitButtonDisabled={isRewardFormEmpty || !isRewardFormValid || isRewardCreating}
      isRewardCreating={isRewardCreating}
    />
  );
};

export default CreateRewardModalContainer;
