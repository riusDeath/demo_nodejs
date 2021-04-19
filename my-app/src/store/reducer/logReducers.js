import {
    ACTION_CLICK_REQUEST,
    ACTION_CLICK_SUCCESS,
    ACTION_CLICK_FAILED
  } from '../actions/constants';
  
  const initialState = {
    loading: false,
    error: null,
    log: null
  }
  
  export const logReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_CLICK_REQUEST:
        return {
          loading: true,
          log: null,
          error: null,
        };
      case ACTION_CLICK_SUCCESS: {
        return {
          loading: false,
          log: action.payload.log,
          error: null,
        };
      }
      case ACTION_CLICK_FAILED: {
        return {
          loading: false,
          log: null,
          error: action.payload.error
        }
      }
      default:
        return state;
    }
  }