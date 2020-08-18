import { LOGIN_USER } from '../actions/types';

const initialState = {
    loginError:false
  }

const loginUser = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          loginError:action.payload
        }
      default:
        return state
    }
  }

  export default loginUser