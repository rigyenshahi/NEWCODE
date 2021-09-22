const addUserDetails = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_USER_DETAILS', payload: data });
  };
};

const addUserResponse = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_USER_RESPONSE', payload: { response: data } });
  };
};

const removeUserResponse = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_USER_RESPONSE', payload: data });
  };
};

export { addUserDetails, addUserResponse, removeUserResponse };
