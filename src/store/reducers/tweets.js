const initState = {
   tweets: [1]
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case "FETCH_TWEETS": return {...state, tweets: state.tweets}
      default: return state;
   }
}

export default reducer;


