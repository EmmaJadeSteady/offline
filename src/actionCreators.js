import {
  CONNECTION_CHANGE,
  FETCH_OFFLINE_MODE,
  REMOVE_FROM_ACTION_QUEUE,
  DISMISS_ACTIONS_FROM_QUEUE,
} from './actionTypes';

export const connectionChange = isConnected => ({
  type: CONNECTION_CHANGE,
  payload: isConnected,
});

export const fetchOfflineMode = (action) => {
  if (typeof action === 'object') {
    return {
      type: FETCH_OFFLINE_MODE,
      payload: {
        prevAction: {
          type: action.type,
          payload: action.payload,
        },
      },
      meta: action.meta,
    };
  }
  // Thunk
  return {
    type: FETCH_OFFLINE_MODE,
    payload: {
      prevThunk: action,
    },
    meta: action.meta,
  };
};

export const removeActionFromQueue = action => ({
  type: REMOVE_FROM_ACTION_QUEUE,
  payload: action,
});

export const dismissActionsFromQueue = actionTrigger => ({
  type: DISMISS_ACTIONS_FROM_QUEUE,
  payload: actionTrigger,
});
