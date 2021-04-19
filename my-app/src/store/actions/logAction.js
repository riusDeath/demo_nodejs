import {
    ACTION_CLICK_REQUEST,
    ACTION_CLICK_SUCCESS,
    ACTION_CLICK_FAILED
} from './constants';

import logService from '../services/logService';

const initState = {
    isLoading: false,
    log: {}
};

export default logAction => {
    return dispatch  => {
        dispatch(logServiceRequest());
        logService(logAction)
          .then(logAction => {
              console.log(logAction)
              dispatch(logServiceSuccess(logAction))
            })
          .catch(error => dispatch(logServiceFailed(error)))
      }
}

const logServiceRequest = () => ({      
    type: ACTION_CLICK_REQUEST
});
  
const logServiceSuccess = logAction => ({
    type: ACTION_CLICK_SUCCESS,
    payload: {
        logAction
    },
})

const logServiceFailed = error => ({
    type: ACTION_CLICK_FAILED,
    payload: { error }
})
