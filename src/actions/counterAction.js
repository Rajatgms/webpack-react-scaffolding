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
const incrementAsyncAction = (dispatch, payload) => {
  setTimeout(() => {
    dispatch(incrementAction(payload));
  }, 1000);
};

const decrementAsyncAction = (dispatch, payload) => {
  setTimeout(() => {
    dispatch(decrementAction(payload));
  });
};
export { incrementAction, decrementAction, incrementAsyncAction, decrementAsyncAction };