const initState = {
  userResponses: [],
  userFirstName: null,
  userLastName: null,
  userEmail: null,
  userPhoneNumber: null,
  userSwimLevel: null,
  userTimeOptions: []
};

const userResponsesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER_DETAILS':
      return {
        ...state,
        userFirstName: action.payload.firstname,
        userLastName: action.payload.lastname,
        userEmail: action.payload.email,
        userPhoneNumber: action.payload.phonenumber
      };
    case 'ADD_USER_RESPONSE':
      return {
        ...state,
        userResponses: [...state.userResponses, action.payload.response]
      };
    case 'REMOVE_LAST_RESPONSE':
      let updatedResponses = [...state.userResponses].pop();
      return {
        ...state,
        userResponses: updatedResponses
      };
    default:
      break;
  }
  return state;
};

export default userResponsesReducer;
