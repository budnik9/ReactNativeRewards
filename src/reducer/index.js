import {generateId} from '../services/utils';
import {users} from '../mock';

export const INITIAL_STATE = {
  profile: {
    ...users.dmitroGordon,
    rewardsAmount: {
      given: 100,
      received: 250,
    },
  },
  rewards: [
    {
      id: generateId(),
      fromUser: users.johnChen,
      toUser: users.davidGreene,
      message: 'Big thanks for your help on the outage today!',
      date: '01/03/2021',
    },
    {
      id: generateId(),
      fromUser: users.dmitroGordon,
      toUser: users.alexBrown,
      message:
        'Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story.',
      date: '01/02/2021',
    },
    {
      id: generateId(),
      fromUser: users.alexBrown,
      toUser: users.dmitroGordon,
      message: 'Thank you a lot for your help on the project',
      date: '01/01/2021',
    },
  ],
};

// Actions
const CREATE_REWARD = 'CREATE_REWARD';

// Action creators
export const createReward = payload => ({type: CREATE_REWARD, payload});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_REWARD:
      return {
        ...state,
        rewards: [action.payload.reward, ...state.rewards],
        profile: {
          ...state.profile,
          rewardsAmount: {
            ...state.profile.rewardsAmount,
            given: state.profile.rewardsAmount.given - action.payload.amount,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
