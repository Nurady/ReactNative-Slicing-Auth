import {combineReducers} from 'redux';

const initStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
};

const initStateLogin = {
  form: {
    email: '',
    password: '',
  },
};

const RegisterReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const LoginReducer = (state = initStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
