import * as actionTypes from 'store/actions/actionTypes';

const initState = {
   token: null,
   userID: null
}

const login = (state) => {
   console.log("hi");
   return {
      ...state,
      userID: 1
   }
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case actionTypes.LOGIN: return login(state);
      default: return state;
   }
}

export default reducer;