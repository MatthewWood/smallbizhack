import { enabledLanguages } from '../../../Intl/setup';
import { SWITCH_LANGUAGE } from './IntlActions';

const initialState = {
  enabledLanguages,
  ...({}),
};

const IntlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const {...actionWithoutType } = action; // eslint-disable-line
      return { ...state, ...actionWithoutType };
    }

    default:
      return state;
  }
};

export default IntlReducer;
