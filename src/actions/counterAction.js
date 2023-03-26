// Sync Actions
const incrementAction = (payload) => {
  return {
    type: 'INCREMENT',
    payload,
  };
};

const decrementAction = (payload) => {
  return {
    type: 'DECREMENT',
    payload,
  };
};

// Dispatch Async Actions
// Thunk figure out whether object or dispatch function is return
const incrementAsyncAction = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementAction(payload));
    }, 1000);
  };
};

const decrementAsyncAction = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(decrementAction(payload));
    });
  };
};
export { incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction };