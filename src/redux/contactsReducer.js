const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/setContacts': {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case 'contacts/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setContacts = payload => {
  return {
    type: 'contacts/setContacts',
    payload,
  };
};
export const setFilter = payload => {
  return {
    type: 'contacts/setFilter',
    payload,
  };
};
// { type: 'contacts/setContacts', payload: {contacts}}
// { type: 'contacts/setFilter', payload: {filter}}
