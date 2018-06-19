const initState = {
   tweets: [1, 2, 3],
   addTweetInput: true
}

const reducer = (state = initState, action) => {
   switch (action.type) {
      case "FETCH_TWEETS": return {...state, tweets: [1,2]}
      default: return state;
   }
}

export default reducer;


