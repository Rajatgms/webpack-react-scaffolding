const counterReducer = (counter = 0, action) => {
  if (action.type === 'INCREMENT') {
    return counter + action.payload;
  }

  if (action.type === 'DECREMENT') {
    return counter - action.payload;
  }

  return counter;
};

export default counterReducer;